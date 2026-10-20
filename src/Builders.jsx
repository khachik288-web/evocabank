import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE = 'https://www.evoca.am/file_manager/constractors/';

const BUILDERS = [
  {
    id: 1,
    title: '«ՀԱԷԿ-ի Շինարարություն» ՓԲԸ',
    project: 'Մեծամոր Ռեզիդենս',
    builder: '«ՀԱԷԿ-ի Շինարարություն» ՓԲԸ',
    address: 'ՀՀ, Արմավիրի մարզ, ք. Մեծամոր, 2-րդ թաղամաս 1/2 հողամաս',
    phone: '+374 95 506506',
    images: [
      IMG_BASE + 'hipotek%20[Recovered]shin%20web.png',
      IMG_BASE + 'hipotek%20[Recovered]shin2%20web.png',
    ],
  },
  { id: 2, title: 'Dilijan Eye' },
  { id: 3, title: '«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ' },
  { id: 4, title: '«ԱՍՏՐՈՅ» ՍՊԸ' },
  { id: 5, title: '«White island» ՍՊԸ' },
  { id: 6, title: 'PARK VIEW' },
  { id: 7, title: '«ՕՊՏԻՄԱ 25» ՍՊԸ' },
  { id: 8, title: '«Midis Park»' },
  { id: 9, title: '«Ավենյու Գրուպ» ՍՊԸ' },
  { id: 10, title: '«ԴԻ ՋԻ ԷՅ ՔՆՍԹՐԱՔՇՆ» ՍՊԸ' },
  { id: 11, title: '«ՀԵՍՔՅՈՒ-ԱՐԳՈ» ՍՊԸ' },
  { id: 12, title: '«ԱՏԱՐԱԴ» ՍՊԸ' },
  { id: 13, title: '«Majestic Residence»' },
  { id: 14, title: 'ԱՍՈՒՐ 21 ՍՊԸ' },
  { id: 15, title: '«Փիրումյան Շին» ՍՊԸ' },
  { id: 16, title: 'In Town' },
  { id: 17, title: 'Շինարտ Գրուպ ՍՊԸ' },
  { id: 18, title: 'Ա.Կ. ԳՐՈՒՊ ՍՊԸ' },
  { id: 19, title: 'ԹՈՓ ԲԻԼԴԻՆԳՍ ՍՊԸ' },
  { id: 20, title: '«Pullman Living and Residences»' },
  { id: 21, title: '«Միթթարթ» ՍՊԸ' },
  { id: 22, title: '«ԲՈԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ' },
  { id: 23, title: '«Նորթերն Գեյթս» ԲԲԸ' },
  { id: 24, title: '«Կոնստրո» ՍՊԸ' },
  { id: 25, title: '«ՐԻՎԵՐ ՍԱՅԴ» ՍՊԸ' },
  { id: 26, title: '«ԿԱՄ ԴԵՎԵԼՈՓՄԵՆԹ» ՍՊԸ' },
  { id: 27, title: 'ՄԵՏՏԱ ԳՐՈՒՊ ՍՊԸ' },
  { id: 28, title: 'Վի էմ Բիլդինգ' },
];

function Item({ item, open, onToggle }) {
  const hasDetails = !!item.project;
  return (
    <div className={`bd-item${open ? ' bd-open' : ''}`}>
      <button type="button" className="bd-head" onClick={onToggle} aria-expanded={open}>
        <svg className="bd-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span>{item.title}</span>
      </button>

      <div className="bd-body" style={{ maxHeight: open ? 1400 : 0 }}>
        <div className="bd-content">
          {hasDetails ? (
            <>
              <p><b>Նախագիծ՝</b> {item.project}</p>
              <p><b>Կառուցապատող՝</b> {item.builder}</p>
              <p><b>Հասցե՝</b> {item.address}</p>
              <p><b>Հեռ.՝</b> <a href={`tel:${item.phone.replace(/\s/g, '')}`}>{item.phone}</a></p>
              {item.images && (
                <div className="bd-gallery">
                  {item.images.map((src, i) => (
                    <a key={src} href={src} target="_blank" rel="noreferrer" className="bd-img">
                      <img src={src} alt={`${item.project} ${i + 1}`} loading="lazy" />
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="bd-muted">Մանրամասն տեղեկությունների համար զանգահարեք՝ <a href="tel:+37410605555">+374 10 605555</a></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Builders() {
  const [openId, setOpenId] = useState(1);

  return (
    <main className="bd-page">
      <style>{`
        .bd-page { padding-bottom: 80px; color: #222; }
        .bd-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .bd-crumbs { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 18px 0; color: #6a00db; }
        .bd-crumbs a { color: #6a00db; text-decoration: none; transition: opacity .2s; }
        .bd-crumbs a:hover { opacity: .6; }

        .bd-inner { max-width: 760px; margin: 0 auto; }
        .bd-title { font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); font-weight: 700; margin: 28px 0 32px; }
        .bd-lead { font-size: 15px; line-height: 1.7; margin-bottom: 14px; }
        .bd-lead a { color: #6a00db; text-decoration: none; }
        .bd-lead a:hover { text-decoration: underline; }
        .bd-sub { font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin: 44px 0 22px; }

        .bd-item { border: 1px solid #e3d3f8; border-radius: 10px; margin-bottom: 10px; background: #fff;
          transition: border-color .2s, box-shadow .25s; overflow: hidden; }
        .bd-item:hover { border-color: #b98af0; box-shadow: 0 4px 16px rgba(106,0,219,.1); }
        .bd-item.bd-open { border-color: #6a00db; box-shadow: 0 6px 24px rgba(106,0,219,.14); }

        .bd-head { width: 100%; display: flex; align-items: center; gap: 14px; padding: 13px 18px; background: none;
          border: 0; text-align: left; font-size: 13px; font-weight: 700; color: #333; cursor: pointer; transition: color .2s, background .2s; }
        .bd-head:hover { color: #6a00db; background: #faf6ff; }
        .bd-open .bd-head { color: #111; }
        .bd-arrow { color: #6a00db; flex-shrink: 0; transition: transform .3s; }
        .bd-open .bd-arrow { transform: rotate(180deg); }

        .bd-body { overflow: hidden; transition: max-height .45s ease; }
        .bd-content { padding: 6px 18px 22px 46px; font-size: 13px; }
        .bd-content p { margin: 0 0 16px; line-height: 1.5; }
        .bd-content b { color: #6a00db; }
        .bd-content a { color: inherit; text-decoration: none; }
        .bd-content a:hover { color: #6a00db; }
        .bd-muted { color: #777; }

        .bd-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 8px;
          box-shadow: 0 4px 20px rgba(106,0,219,.1); border-radius: 6px; overflow: hidden; background: #fff; }
        .bd-img { display: block; overflow: hidden; border-right: 1px solid #eee; }
        .bd-img:last-child { border-right: 0; }
        .bd-img img { width: 100%; height: auto; display: block; transition: transform .5s; }
        .bd-img:hover img { transform: scale(1.05); }

        /* ===== MEDIA ===== */
        @media (max-width: 1023px) {
          .bd-wrap { padding: 0 16px; }
        }
        @media (max-width: 767px) {
          .bd-title { margin: 16px 0 22px; }
          .bd-sub { font-size: 16px; margin: 30px 0 16px; }
          .bd-content { padding: 4px 14px 18px 18px; }
        }
        @media (max-width: 575px) {
          .bd-gallery { grid-template-columns: 1fr; }
          .bd-img { border-right: 0; border-bottom: 1px solid #eee; }
          .bd-img:last-child { border-bottom: 0; }
          .bd-head { padding: 12px 14px; gap: 10px; }
        }
        @media (max-width: 380px) {
          .bd-wrap { padding: 0 10px; }
          .bd-lead { font-size: 14px; }
        }
      `}</style>

      <div className="bd-wrap">
        <nav className="bd-crumbs">
          <Link to="/">⌂</Link>
          <span>›</span>
          <span>Կառուցապատողներ</span>
        </nav>

        <div className="bd-inner">
          <h1 className="bd-title">Կառուցապատողներ</h1>

          <p className="bd-lead">
            Չեք բերեք Ձեր նորաոճ և հարմարավետ բնակարանը <a href="/">Evocabank</a>-ի հետ։
          </p>
          <p className="bd-lead">
            Ծանոթացեք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների ցանկին և անհրաժեշտ տեղեկատվությանը ստորև.
          </p>

          <h2 className="bd-sub">Անհրաժեշտ տեղեկատվություն</h2>

          {BUILDERS.map((b) => (
            <Item
              key={b.id}
              item={b}
              open={openId === b.id}
              onToggle={() => setOpenId(openId === b.id ? null : b.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}