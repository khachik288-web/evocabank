import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// href: подставь реальные ссылки на PDF (например '/files/tariffs/rub-gbp-chf-2024.pdf')
const ARCHIVE = [
  {
    id: 1,
    title: 'Կանխիկ մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր',
    years: [
      {
        year: '2024',
        docs: [
          {
            label:
              'Կանխիկ մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր (ՌԴ ռուբլի RUB, Բրիտանական ֆունտ GBP, Շվեյցարական ֆրանկ CHF)',
            href: '#',
          },
        ],
      },
    ],
  },
  { id: 2, title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ', years: [] },
  { id: 3, title: 'Վարկավորման պայմաններ և սակագներ', years: [] },
  { id: 4, title: 'Ավանդների ներգրավման պայմաններ և սակագներ', years: [] },
  { id: 5, title: 'Վճարային քարտերի տրամադրման և օգտագործման պայմաններ', years: [] },
  { id: 6, title: 'Սակագներ և դրույքներ', years: [] },
];

const FILES = [
  { id: 1, label: 'Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026', href: '#' },
];

function Item({ item, open, onToggle }) {
  return (
    <div className={`ta-item${open ? ' ta-open' : ''}`}>
      <button type="button" className="ta-head" onClick={onToggle} aria-expanded={open}>
        <svg className="ta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span>{item.title}</span>
      </button>

      <div className="ta-body" style={{ maxHeight: open ? 1200 : 0 }}>
        <div className="ta-content">
          {item.years.length ? (
            item.years.map((y) => (
              <div key={y.year} className="ta-year-block">
                <h3 className="ta-year">{y.year}</h3>
                {y.docs.map((d) => (
                  <p key={d.label}>
                    <a href={d.href} target="_blank" rel="noreferrer">{d.label}</a>
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p className="ta-muted">Արխիվային փաստաթղթեր դեռ չկան։</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TariffsArchive() {
  const [openId, setOpenId] = useState(1);

  return (
    <main className="ta-page">
      <style>{`
        .ta-page { padding-bottom: 80px; color: #222; }
        .ta-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .ta-crumbs { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 18px 0; color: #6a00db; flex-wrap: wrap; }
        .ta-crumbs a { color: #6a00db; text-decoration: none; transition: opacity .2s; }
        .ta-crumbs a:hover { opacity: .6; }

        .ta-inner { max-width: 760px; margin: 0 auto; }
        .ta-title { font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); font-weight: 700; margin: 28px 0 40px; }
        .ta-sub { font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin: 0 0 22px; }

        .ta-item { border: 1px solid #e3d3f8; border-radius: 10px; margin-bottom: 10px; background: #fff;
          transition: border-color .2s, box-shadow .25s; overflow: hidden; }
        .ta-item:hover { border-color: #b98af0; box-shadow: 0 4px 16px rgba(106,0,219,.1); }
        .ta-item.ta-open { border-color: #6a00db; box-shadow: 0 6px 24px rgba(106,0,219,.14); }

        .ta-head { width: 100%; display: flex; align-items: center; gap: 14px; padding: 13px 18px; background: none;
          border: 0; text-align: left; font-size: 13px; font-weight: 700; color: #555; cursor: pointer; transition: color .2s, background .2s; }
        .ta-head:hover { color: #6a00db; background: #faf6ff; }
        .ta-open .ta-head { color: #111; }
        .ta-arrow { color: #6a00db; flex-shrink: 0; transition: transform .3s; }
        .ta-open .ta-arrow { transform: rotate(180deg); }

        .ta-body { overflow: hidden; transition: max-height .45s ease; }
        .ta-content { padding: 8px 20px 22px 46px; font-size: 13px; }
        .ta-year { font-size: 20px; font-weight: 700; color: #6a00db; margin: 6px 0 18px; }
        .ta-content p { margin: 0 0 14px; line-height: 1.6; }
        .ta-content a { color: #6a00db; font-weight: 700; text-decoration: underline; transition: color .2s; }
        .ta-content a:hover { color: #3d0080; }
        .ta-muted { color: #777; }

        .ta-docs { max-width: 700px; margin: 48px auto 0; }
        .ta-docs h2 { font-size: 20px; font-weight: 700; margin-bottom: 18px; }
        .ta-file { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #f3f3f6; border-radius: 6px;
          color: #222; text-decoration: none; font-size: 13px; font-weight: 600; transition: background .2s, color .2s, transform .2s; margin-bottom: 10px; }
        .ta-file:hover { background: #ece0fb; color: #6a00db; transform: translateX(4px); }
        .ta-file svg { flex-shrink: 0; color: #6a00db; }

        /* ===== MEDIA ===== */
        @media (max-width: 1023px) {
          .ta-wrap { padding: 0 16px; }
        }
        @media (max-width: 767px) {
          .ta-title { margin: 16px 0 28px; }
          .ta-sub { font-size: 16px; }
          .ta-content { padding: 4px 14px 18px 18px; }
          .ta-docs { margin-top: 36px; }
        }
        @media (max-width: 575px) {
          .ta-head { padding: 12px 14px; gap: 10px; }
          .ta-year { font-size: 18px; }
          .ta-file { align-items: flex-start; }
        }
        @media (max-width: 380px) {
          .ta-wrap { padding: 0 10px; }
        }
      `}</style>

      <div className="ta-wrap">
        <nav className="ta-crumbs">
          <Link to="/">⌂</Link>
          <span>›</span>
          <Link to="/about">Մեր մասին</Link>
          <span>›</span>
          <Link to="/about/tariffs/archive">Սակագներ</Link>
          <span>›</span>
          <span>Արխիվ</span>
        </nav>

        <div className="ta-inner">
          <h1 className="ta-title">Արխիվ</h1>
          <h2 className="ta-sub">Անհրաժեշտ տեղեկատվություն</h2>

          {ARCHIVE.map((a) => (
            <Item
              key={a.id}
              item={a}
              open={openId === a.id}
              onToggle={() => setOpenId(openId === a.id ? null : a.id)}
            />
          ))}
        </div>

        <section className="ta-docs">
          <h2>Փաստաթղթեր</h2>
          {FILES.map((f) => (
            <a key={f.id} href={f.href} target="_blank" rel="noreferrer" className="ta-file">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                <path d="M14 3v5h5" />
                <path d="M12 12v5M9.5 14.5 12 17l2.5-2.5" />
              </svg>
              <span>{f.label}</span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}