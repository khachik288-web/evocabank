import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Announcements.css';

const PAGE_SIZE = 6;

// Базовые объявления (дата в формате ДД.ММ.ГГГГ)
const BASE_ITEMS = [
  { title: 'Գործարքների արգելափակում ֆունկցիոնալ', date: '26.06.2026' },
  { title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով', date: '28.08.2026' },
  { title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով', date: '04.06.2025' },
  { title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով', date: '28.03.2025' },
  { title: 'Արտաքին աուդիտի մրցույթի հայտարարություն', date: '30.12.2024' },
  { title: 'Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%', date: '12.11.2024' },
  { title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով', date: '13.06.2024' },
  { title: 'ՄԻՐ քարտերի սպասարկման դադարեցում', date: '13.06.2024' },
  { title: 'Արտարժութային գործարքների սահմանափակում', date: '02.10.2023' },
  { title: 'Արտարժութային գործարքների սահմանափակում', date: '30.09.2023' },
  { title: 'Թղթադրամների մուտքագրման սակագնի փոփոխություն', date: '07.09.2023' },
  { title: 'Արտարժութային հաշիվներից կանխիկացման միջնորդավճարի ժամանակավոր փոփոխություն', date: '31.07.2023' },
  { title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի տարեկան ընդհանուր ժողով', date: '15.05.2023' },
  { title: 'ԱՄՆ դոլարով և Եվրոյով ստացված արագ դրամական փոխանցումների վերաբերյալ', date: '24.03.2023' },
  { title: 'Արտարժութային հաշիվներից կանխիկացման միջնորդավճարի ժամանակավոր փոփոխություն', date: '24.03.2023' },
  { title: '2023թ. փետրվարի 06-ին տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի արտահերթ ընդհանուր ժողով', date: '27.03.2023' },
  { title: 'Արտարժութային հաշիվներից կանխիկացման միջնորդավճարի ժամանակավոր փոփոխություն', date: '30.12.2022' },
  { title: '2023թ. հունվարի 13-ին տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով', date: '28.12.2022' },
];

// Старые объявления для страниц 4–8 (чтобы пагинация была как на оригинале)
const FILLER_TITLES = [
  'Սակագների փոփոխության մասին ծանուցում',
  'Բանկի աշխատանքային ժամերի փոփոխություն',
  'Տեխնիկական աշխատանքների մասին հայտարարություն',
  'Քարտային ծառայությունների պայմանների թարմացում',
  'Նոր մասնաճյուղի բացման մասին հայտարարություն',
  'Ավանդների տոկոսադրույքների վերանայում',
];

const FILLER_ITEMS = Array.from({ length: 30 }, (_, i) => {
  const month = String(((i * 5) % 12) + 1).padStart(2, '0');
  const day = String(((i * 7) % 27) + 1).padStart(2, '0');
  const year = 2022 - Math.floor(i / 6);
  return { title: FILLER_TITLES[i % FILLER_TITLES.length], date: `${day}.${month}.${year}` };
});

const ALL_ITEMS = [...BASE_ITEMS, ...FILLER_ITEMS].map((it, i) => ({ ...it, id: i + 1 }));

// "ДД.ММ.ГГГГ" -> "ГГГГ-ММ-ДД" для сравнения с <input type="date">
const toIso = (d) => {
  const [dd, mm, yyyy] = d.split('.');
  return `${yyyy}-${mm}-${dd}`;
};

function Illustration() {
  return (
    <div className="ann-illustration" aria-hidden="true">
      <div className="ann-dots-ring" />
      <svg className="ann-zigzag" width="56" height="48" viewBox="0 0 56 48" fill="none">
        <path d="M2 2h22v14h28v10H34V12H12v12H2z" fill="#c13cf2" />
        <path d="M2 2h22v6H2z" fill="#ff5ccd" />
      </svg>
      <svg className="ann-tri-yellow" width="48" height="40" viewBox="0 0 48 40" fill="none">
        <path d="M2 4l44 10-30 24z" fill="#ffd93b" />
      </svg>
      <svg className="ann-tri-purple" width="44" height="40" viewBox="0 0 44 40" fill="none">
        <path d="M2 2h40L22 38z" fill="#9b5cf6" stroke="#7000ff" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <div className="ann-clipboard">
        <div className="ann-clipboard-paper">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="ann-clipboard-clip" />
        <div className="ann-clipboard-pen" />
      </div>
      <span className="ann-yellow-dot" />
      <div className="ann-dots-grid" />
    </div>
  );
}

export default function Announcements() {
  const [openId, setOpenId] = useState(null);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const filtered = useMemo(
    () =>
      ALL_ITEMS.filter((it) => {
        const iso = toIso(it.date);
        if (from && iso < from) return false;
        if (to && iso > to) return false;
        return true;
      }),
    [from, to]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goTo = (p) => {
    setPage(Math.min(Math.max(p, 1), totalPages));
    setOpenId(null);
  };

  return (
    <div className="ann-page">
      <div className="ann-container">
        <nav className="ann-breadcrumbs">
          <Link to="/" className="ann-crumb-home" aria-label="Home">🏠</Link>
          <span className="ann-crumb-sep">›</span>
          <Link to="/about" className="ann-crumb-link">Մեր մասին</Link>
          <span className="ann-crumb-sep">›</span>
          <span className="ann-crumb-current">Հայտարարություններ</span>
        </nav>

        <div className="ann-head">
          <h1 className="ann-title">Հայտարարություններ</h1>

          <div className="ann-filter">
            <span className="ann-cal-icon" aria-hidden="true">🗓</span>
            <input
              type="date"
              className="ann-date"
              value={from}
              onChange={(e) => { setFrom(e.target.value); setPage(1); }}
              aria-label="Սկսած"
            />
            <span className="ann-filter-dash">-</span>
            <input
              type="date"
              className="ann-date"
              value={to}
              onChange={(e) => { setTo(e.target.value); setPage(1); }}
              aria-label="Մինչև"
            />
          </div>
        </div>
      </div>

      <div className="ann-bg">
        <Illustration />

        <div className="ann-container ann-list-wrap">
          <div className="ann-list">
            {pageItems.length === 0 && (
              <div className="ann-empty">Այս ժամանակահատվածում հայտարարություններ չկան</div>
            )}

            {pageItems.map((item) => {
              const open = openId === item.id;
              return (
                <div key={item.id} className={`ann-item ${open ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="ann-item-head"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                  >
                    <svg className="ann-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ann-item-text">
                      <span className="ann-item-title">{item.title}</span>
                      <span className="ann-item-date">{item.date}</span>
                    </span>
                  </button>

                  {open && (
                    <div className="ann-item-body">
                      <p>
                        Հարգելի հաճախորդներ, տեղեկացնում ենք Ձեզ վերոնշյալ հայտարարության մասին։
                        Լրացուցիչ մանրամասների համար դիմեք Բանկի մասնաճյուղեր կամ զանգահարեք 8444։
                      </p>
                      <p className="ann-item-note">
                        Շնորհակալություն, որ ընտրել եք Evocabank-ը։
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="ann-pagination">
            <button type="button" className="ann-arrow" onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous">
              ←
            </button>
            <div className="ann-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`ann-page-btn ${p === currentPage ? 'active' : ''}`}
                  onClick={() => goTo(p)}
                >
                  {p}
                </button>
              ))}
            </div>
            <button type="button" className="ann-arrow" onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next">
              →
            </button>
          </div>

          <div className="ann-updated">Թարմացվել է` 28/08/2026 17:11</div>
        </div>
      </div>
    </div>
  );
}