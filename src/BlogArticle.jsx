import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { POSTS } from './blogData';

// Страница отдельной статьи блога: /blog/:slug (та же схема, что NewsArticle).
// Один общий шаблон для всех постов: меняются картинка, рубрика, заголовок, текст и дата.
// Хочешь уникальный текст для поста — добавь запись в ARTICLES (ключ = id поста из blogData.js).
// В body: строка = абзац (**жирный**), { center, italic } = крупная строка по центру.
const ARTICLES = {};

const GENERIC_BODY = [
  '**Evocabank**-ը շարունակում է կիսվել օգտակար խորհուրդներով և պատմություններով, որոնք օգնում են Ձեզ ավելի հարմարավետ և գիտակցված կառավարել Ձեր ֆինանսները:',
  'Այս գրառման ամբողջական տարբերակը շուտով կհրապարակվի մեր կայքում և սոցիալական ցանցերի էջերում:',
  'Հետևեք մեր բլոգին՝ առաջինը տեղեկանալու նոր նյութերին, խորհուրդներին և Բանկի նորություններին:',
];

function getArticle(slug) {
  if (ARTICLES[slug]) return ARTICLES[slug];
  const p = POSTS[slug];
  if (!p) return null;
  const ids = Object.keys(POSTS);
  const start = ids.indexOf(slug);
  const more = [1, 2, 3].map((k) => ids[(start + k) % ids.length]); // 3 соседних поста
  return { cat: p.cat, title: p.title, lead: p.text, date: p.date, img: p.img, body: GENERIC_BODY, more };
}

function Rich({ text }) {
  return text.split('**').map((p, i) => (i % 2 ? <strong key={i} className="font-bold text-[#6a0bd6]">{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>));
}

export default function BlogArticle() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const a = getArticle(slug);
  if (!a) return <Navigate to="/blog" replace />;

  return (
    <main className="w-full overflow-x-clip bg-white text-[#111]" style={{ fontFamily: "'Noto Sans Armenian','Montserrat',system-ui,sans-serif" }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-6">
        {/* Назад + хлебные крошки */}
        <div className="flex flex-wrap items-center gap-4 py-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#111] shadow-[0_2px_8px_rgba(0,0,0,.18)]"
          >
            <ArrowLeft size={16} /> {t('Վերադառնալ')}
          </button>
          <nav className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
            <Link to="/" aria-label="Home"><Home size={14} /></Link>
            <ChevronRight size={11} />
            <Link to="/blog" className="text-[#6a0bd6] no-underline">{t('Բլոգ')}</Link>
            <ChevronRight size={11} />
            <span className="text-[#6a0bd6]">{t(a.cat)}</span>
            <ChevronRight size={11} />
            <span className="text-[#111]">{t(a.title)}</span>
          </nav>
        </div>

        {/* Шапка статьи */}
        <section className="flex flex-col lg:flex-row">
          <div className="flex min-w-0 flex-col justify-center rounded-bl-[120px] bg-gradient-to-b from-[#f4f4f4] to-[#f6effe] p-8 lg:w-[38%] lg:p-12">
            <div className="flex items-center">
              <span className="mr-3 inline-block h-5 w-8 bg-[#2a0a4f]" />
              <span className="text-[14px] font-bold text-[#1d0a4a]">{t(a.cat)}</span>
            </div>
            <h1 className="mt-8 break-words" style={{ fontSize: 28, fontWeight: 700, lineHeight: '38px', color: '#111', margin: '32px 0 0' }}>{t(a.title)}</h1>
            {a.lead && <p className="mt-5 text-[14px] leading-[24px] text-[#333]">{t(a.lead)}</p>}
            {a.date && <p className="mt-10 text-[13px] text-[#888]">{a.date}</p>}
          </div>
          <div className="min-w-0 lg:w-[62%]">
            <img src={a.img} alt={t(a.title)} className="h-full max-h-[420px] w-full bg-black object-contain" />
          </div>
        </section>

        {/* Текст */}
        <article className="mx-auto max-w-[640px] py-14 text-[13px] leading-[1.9] text-[#222]">
          {a.body.map((b, i) =>
            typeof b === 'string' ? (
              <p key={i} className="mb-6"><Rich text={t(b)} /></p>
            ) : (
              <p key={i} className={`mb-3 text-center ${b.italic ? 'italic text-[#6a0bd6]' : 'text-[16px] font-bold text-[#6a0bd6]'}`}>{t(b.center)}</p>
            )
          )}

          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1d0a4a', margin: '48px 0 20px' }}>{t('Այլ գրառումներ')}</h2>
        </article>

        <section className="mx-auto grid max-w-[760px] gap-6 pb-16 sm:grid-cols-3">
          {a.more.map((id) => {
            const p = POSTS[id];
            return (
              <Link key={id} to={`/blog/${id}`} className="block" style={{ color: '#111', textDecoration: 'none' }}>
                <img src={p.img} alt={t(p.title)} className="aspect-[3/2] w-full object-cover" />
                <h3 className="line-clamp-3" style={{ fontSize: 13, fontWeight: 700, lineHeight: '18px', color: '#111', margin: '12px 0 0' }}>{t(p.title)}</h3>
                {p.date && <p style={{ fontSize: 12, color: '#c9c9c9', margin: '8px 0 0' }}>{p.date}</p>}
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
