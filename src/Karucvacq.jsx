import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ChevronRight, ZoomIn, ExternalLink, X } from 'lucide-react';

// Схема структуры банка: по одному файлу на язык (hy / ru / en).
// Если для языка файла нет (картинка не загрузилась) — показываем армянский.
const img = (lang) => `https://www.evoca.am/file_manager/structure/final/structure-${lang}.png`;

export default function Karucvacq() {
  const { t, i18n } = useTranslation();
  const lang = ['hy', 'ru', 'en'].includes(i18n.language) ? i18n.language : 'hy';
  const [src, setSrc] = useState(img(lang));
  const [zoom, setZoom] = useState(false);

  // сменили язык сайта — пробуем картинку этого языка
  useEffect(() => { setSrc(img(lang)); }, [lang]);
  // Esc закрывает увеличенный вид, фон не скроллится
  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => e.key === 'Escape' && setZoom(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [zoom]);

  const onError = () => { if (src !== img('hy')) setSrc(img('hy')); };

  return (
    <main className="kc-page">
      <style>{`
        .kc-page { padding-bottom: 72px; color: #222; }
        .kc-wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
        .kc-crumbs { display: flex; align-items: center; gap: 8px; padding: 18px 0; font-size: 12px; color: #6a00db; flex-wrap: wrap; }
        .kc-crumbs a { color: #6a00db; text-decoration: none; }
        .kc-crumbs a:hover { opacity: .6; }
        .kc-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin: 12px 0 28px; }
        .kc-title { margin: 0; font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); font-weight: 700; }
        .kc-tools { display: flex; gap: 10px; }
        .kc-btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 16px; border-radius: 999px; border: 0; background: #ece6f8;
          color: #6a00db; font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: none; transition: background .2s, color .2s; }
        .kc-btn:hover { background: #6a00db; color: #fff; }
        /* карточка со схемой: на узких экранах скроллится по горизонтали, чтобы текст схемы оставался читаемым */
        .kc-card { background: #fff; border: 1px solid #ece6f8; border-radius: 14px; box-shadow: 0 6px 24px rgba(106,0,219,.08); overflow-x: auto; }
        .kc-card img { display: block; width: 100%; min-width: 900px; cursor: zoom-in; }
        .kc-hint { margin: 12px 0 0; font-size: 12px; color: #888; }

        .kc-modal { position: fixed; inset: 0; z-index: 1000; background: rgba(20,10,40,.88); overflow: auto; padding: 56px 16px 24px; }
        .kc-modal img { display: block; width: 2000px; max-width: none; margin: 0 auto; background: #fff; border-radius: 8px; }
        .kc-close { position: fixed; top: 14px; right: 18px; z-index: 1001; width: 40px; height: 40px; border-radius: 50%; border: 0;
          background: #fff; color: #6a00db; display: flex; align-items: center; justify-content: center; cursor: pointer; }

        @media (max-width: 767px) { .kc-wrap { padding: 0 14px; } }
      `}</style>

      <div className="kc-wrap">
        <nav className="kc-crumbs">
          <Link to="/" aria-label="Home"><Home size={14} /></Link>
          <ChevronRight size={12} />
          <Link to="/about">{t('Մեր մասին')}</Link>
          <ChevronRight size={12} />
          <span>{t('Կառուցվածք')}</span>
        </nav>

        <div className="kc-top">
          <h1 className="kc-title">{t('Բանկի կառուցվածքը')}</h1>
          <div className="kc-tools">
            <button type="button" className="kc-btn" onClick={() => setZoom(true)}>
              <ZoomIn size={16} /> {t('Մեծացնել')}
            </button>
            <a className="kc-btn" href={src} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> {t('Բացել ամբողջ չափով')}
            </a>
          </div>
        </div>

        <div className="kc-card">
          <img src={src} alt={t('Բանկի կառուցվածքը')} onError={onError} onClick={() => setZoom(true)} />
        </div>
        <p className="kc-hint">{t('Սեղմեք սխեմայի վրա՝ մեծացնելու համար')}</p>
      </div>

      {zoom && (
        <div className="kc-modal" onClick={() => setZoom(false)}>
          <button type="button" className="kc-close" aria-label={t('Փակել')} onClick={() => setZoom(false)}>
            <X size={20} />
          </button>
          <img src={src} alt={t('Բանկի կառուցվածքը')} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}