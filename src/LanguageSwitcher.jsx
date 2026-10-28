import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGS } from './i18n';

// compact — выпадающий список с иконкой глобуса (шапка ПК)
// иначе — три кнопки в ряд (мобильное меню)
export default function LanguageSwitcher({ compact = false }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const cur = i18n.language;

  useEffect(() => {
    const h = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const pick = (code) => { i18n.changeLanguage(code); setOpen(false); };

  if (!compact) {
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => pick(l.code)}
            style={{
              flex: 1, padding: '8px 0', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer',
              border: '1px solid #7000ff', background: cur === l.code ? '#7000ff' : '#fff', color: cur === l.code ? '#fff' : '#7000ff',
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={box} style={{ position: 'relative' }}>
      <button
        type="button"
        aria-label={t('Լեզու')}
        title={t('Լեզու')}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 hover:text-purple-700"
        style={{ background: 'none', border: 0, padding: 0, color: 'inherit', cursor: 'pointer', fontSize: 13 }}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
        </svg>
        <span className="hidden xl:inline">{LANGS.find((l) => l.code === cur)?.label}</span>
      </button>
      {open && (
        <ul style={{ position: 'absolute', right: 0, top: '100%', marginTop: 10, zIndex: 100, background: '#fff', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,.15)', padding: '6px 0', listStyle: 'none', minWidth: 130 }}>
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => pick(l.code)}
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 0, padding: '8px 18px', fontSize: 14, cursor: 'pointer', color: cur === l.code ? '#7000ff' : '#222', fontWeight: cur === l.code ? 700 : 400 }}
              >
                {l.full}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
