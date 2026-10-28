import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// Ссылка «Մուտք» (вход) / «Իմ էջը» (профиль) — зависит от того, залогинен ли юзер
export function AuthLink({ className = '', style, onClick }) {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return (
    <Link to={user ? '/logout' : '/reg'} onClick={onClick} className={className} style={style}>
      {user ? t('Իմ էջը') : t('Մուտք')}
    </Link>
  );
}

// Бургер-меню для телефонов и планшетов (< 1024px)
// topLinks / mainLinks: [{ label, path }]
export default function MobileNav({ topLinks = [], mainLinks = [], variant = 'mobile' }) {
  const { t } = useTranslation();
  const isDesktop = variant === 'desktop';
  // меню открыто только на той странице, где его открыли — при переходе закрывается само
  const { pathname } = useLocation();
  const [openAt, setOpenAt] = useState(null);
  const open = openAt === pathname;
  const setOpen = (v) => setOpenAt(v ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const item = 'block border-b border-gray-100 py-3 text-[15px] font-medium no-underline hover:no-underline';
  const color = (active) => ({ color: active ? '#7000ff' : '#1f2937' });
  const close = () => setOpen(false);

  return (
    <div className={isDesktop ? '' : 'lg:hidden'}>
      <button
        type="button"
        aria-label="menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={
          isDesktop
            ? 'flex items-center text-gray-600 hover:text-purple-700'
            : 'flex h-10 w-10 items-center justify-center rounded-full text-gray-800 hover:bg-gray-100'
        }
      >
        <svg className={isDesktop ? 'h-4 w-4' : 'h-6 w-6'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[3000]">
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          <aside className="absolute right-0 top-0 flex h-full w-[85%] max-w-[360px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <span className="text-2xl font-bold tracking-tight text-gray-800">
                evoc<span className="text-purple-700">a</span>
              </span>
              <button
                type="button"
                aria-label="close"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-6">
              {mainLinks.length > 0 && (
                <>
                  <p className="mb-1 mt-4 text-xs uppercase tracking-wide text-gray-400">{t("Ծառայություններ")}</p>
                  {mainLinks.map((l) => (
                    <Link key={l.label} to={l.path} className={item} style={color(pathname === l.path)}>
                      {t(l.label)}
                    </Link>
                  ))}
                </>
              )}

              <p className="mb-1 mt-6 text-xs uppercase tracking-wide text-gray-400">{t("Բաժիններ")}</p>
              {topLinks.map((l) => (
                <Link key={l.label} to={l.path} className={item} style={color(false)}>
                  {t(l.label)}
                </Link>
              ))}
              <Link to="/branches" className={item} style={color(pathname === '/branches')}>
                {t("Մասնաճյուղեր և բանկոմատներ")}
              </Link>
              <Link to="/faq" className={item} style={color(pathname === '/faq')}>
                {t("Հաճախ տրվող հարցեր")}
              </Link>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-200 p-5">
              <LanguageSwitcher />
              <Link
                to="/evoca-online"
                style={{ color: '#fff', background: '#7000ff' }}
                className="rounded-full py-3 text-center font-semibold no-underline hover:no-underline"
              >
                EvocaONLINE
              </Link>
              <AuthLink
                style={{ color: '#7000ff', border: '1px solid #7000ff' }}
                className="rounded-full py-3 text-center font-semibold no-underline hover:bg-purple-50 hover:no-underline"
              />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
