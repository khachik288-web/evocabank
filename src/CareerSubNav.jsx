import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Вкладки раздела «Կարիերա»: каждая — отдельная страница со своим адресом
export const CAREER_TABS = [
  { label: 'Մշակույթ', path: '/career' },
  { label: 'Առավելություններ', path: '/career/benefits' },
  { label: 'Հաճախ տրվող հարցեր', path: '/career/faq' },
  { label: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/career/how-we-hire' },
];

export default function CareerSubNav() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="career sections"
      style={{ background: '#6a00db', boxShadow: '0 2px 6px rgba(0,0,0,.18)', position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6">
        {CAREER_TABS.map((t) => {
          const active = pathname === t.path;
          return (
            <Link
              key={t.path}
              to={t.path}
              style={{
                color: '#fff',
                background: active ? '#4b0094' : 'transparent',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: 'nowrap',
                padding: '18px 22px',
                transition: 'background .2s',
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = '#5a00bd'; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
