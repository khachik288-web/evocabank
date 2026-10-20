import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/auto-web.png';

const DEALERS = [
  {
    id: 1,
    title: 'ECO MOTORS',
    amount: 'մինչև 50,000,000 ՀՀ դրամ',
    term: 'մինչև 84 ամիս',
    rate: '14.5%',
    insurance: 'Անվճար ԿԱՍԿՕ',
    addresses: [
      'Երևան, Դավիթ Բեկ 97/26',
      'Երևան, Դավիթ Բեկ 164/11',
      'Երևան, Մալաթիա Սեբաստիա 108/2',
      'Կոտայքի մարզ, Վերին Պտղնի 14',
    ],
    phones: ['+37495949466', '+37496949466'],
    images: [IMG],
    linkText: 'Ավտովարկի մանրամասներին կարող ես ծանոթանալ',
    linkLabel: 'այստեղ',
    link: '/loans',
  },
  { id: 2, title: 'JCars' },
  { id: 3, title: 'City Auto' },
  { id: 4, title: 'Original Motors' },
  { id: 5, title: 'Tesla Service Yerevan' },
  { id: 6, title: 'E-auto' },
  { id: 7, title: 'TESLA ENERGY' },
  { id: 8, title: 'E-Mobile' },
  { id: 9, title: 'iMotors' },
  { id: 10, title: 'EV Centre' },
  { id: 11, title: 'Carmark' },
  { id: 12, title: 'V&V Trans' },
  { id: 13, title: 'Smart Motors' },
  { id: 14, title: 'Auto Gallery' },
  { id: 15, title: 'INTERCARS Armenia' },
];

function Item({ item, open, onToggle }) {
  const detailed = !!item.amount;
  return (
    <div className={`pd-item${open ? ' pd-open' : ''}`}>
      <button type="button" className="pd-head" onClick={onToggle} aria-expanded={open}>
        <svg className="pd-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span>{item.title}</span>
      </button>

      <div className="pd-body" style={{ maxHeight: open ? 1800 : 0 }}>
        <div className="pd-content">
          {detailed ? (
            <>
              <p><b>Գումար՝</b> {item.amount}</p>
              <p><b>Ժամկետ՝</b> {item.term}</p>
              <p><b>Տոկոսադրույք՝</b> {item.rate}</p>
              <p><b>{item.insurance}</b></p>

              <div className="pd-row">
                <b>Սրահի հասցե՝</b>
                <ul>
                  {item.addresses.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>

              <p>
                <b>Կոնտակտային տվյալներ՝</b>{' '}
                {item.phones.map((p, i) => (
                  <React.Fragment key={p}>
                    {i > 0 && ' | '}
                    <a href={`tel:${p}`}>{p}</a>
                  </React.Fragment>
                ))}
              </p>

              {item.images?.map((src, i) => (
                <a key={i} href={src} target="_blank" rel="noreferrer" className="pd-img">
                  <img src={src} alt={`${item.title} ${i + 1}`} loading="lazy" />
                </a>
              ))}

              {item.link && (
                <p className="pd-more">
                  {item.linkText} <Link to={item.link}>{item.linkLabel}</Link>:
                </p>
              )}
            </>
          ) : (
            <p className="pd-muted">
              Մանրամասն տեղեկությունների համար զանգահարեք՝ <a href="tel:+37410605555">+374 10 605555</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Dealerships() {
  const [openId, setOpenId] = useState(1);

  return (
    <main className="pd-page">
      <style>{`
        .pd-page { padding-bottom: 80px; color: #222; }
        .pd-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .pd-crumbs { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 18px 0; color: #6a00db; }
        .pd-crumbs a { color: #6a00db; text-decoration: none; transition: opacity .2s; }
        .pd-crumbs a:hover { opacity: .6; }

        .pd-inner { max-width: 760px; margin: 0 auto; }
        .pd-title { font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); font-weight: 700; margin: 28px 0 32px; }
        .pd-lead { font-size: 14px; line-height: 1.75; margin-bottom: 18px; }
        .pd-lead strong.pd-hl { color: #6a00db; }
        .pd-lead a { color: #6a00db; text-decoration: none; font-weight: 700; }
        .pd-lead a:hover { text-decoration: underline; }
        .pd-sub { font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin: 44px 0 22px; }

        .pd-item { border: 1px solid #e3d3f8; border-radius: 10px; margin-bottom: 10px; background: #fff;
          transition: border-color .2s, box-shadow .25s; overflow: hidden; }
        .pd-item:hover { border-color: #b98af0; box-shadow: 0 4px 16px rgba(106,0,219,.1); }
        .pd-item.pd-open { border-color: #6a00db; box-shadow: 0 6px 24px rgba(106,0,219,.14); }

        .pd-head { width: 100%; display: flex; align-items: center; gap: 14px; padding: 13px 18px; background: none;
          border: 0; text-align: left; font-size: 13px; font-weight: 700; color: #333; cursor: pointer; transition: color .2s, background .2s; }
        .pd-head:hover { color: #6a00db; background: #faf6ff; }
        .pd-open .pd-head { color: #111; }
        .pd-arrow { color: #6a00db; flex-shrink: 0; transition: transform .3s; }
        .pd-open .pd-arrow { transform: rotate(180deg); }

        .pd-body { overflow: hidden; transition: max-height .5s ease; }
        .pd-content { padding: 8px 20px 24px 32px; font-size: 13px; }
        .pd-content p { margin: 0 0 18px; line-height: 1.5; }
        .pd-content b { color: #6a00db; }
        .pd-content a { color: inherit; text-decoration: none; }
        .pd-content a:hover { color: #6a00db; }
        .pd-muted { color: #777; }

        .pd-row { display: flex; gap: 8px; margin-bottom: 18px; line-height: 1.5; }
        .pd-row b { white-space: nowrap; }
        .pd-row ul { list-style: none; margin: 0; padding: 0; }
        .pd-row li { margin-bottom: 14px; transition: color .2s, transform .2s; }
        .pd-row li:last-child { margin-bottom: 0; }
        .pd-row li:hover { color: #6a00db; transform: translateX(4px); }

        .pd-img { display: block; overflow: hidden; border-radius: 4px; margin: 28px 0 18px; }
        .pd-img img { width: 100%; height: auto; display: block; transition: transform .6s; }
        .pd-img:hover img { transform: scale(1.04); }

        .pd-content .pd-more a { color: #6a00db; font-weight: 700; text-decoration: underline; }
        .pd-content .pd-more a:hover { color: #5a00bd; }

        /* ===== MEDIA ===== */
        @media (max-width: 1023px) {
          .pd-wrap { padding: 0 16px; }
        }
        @media (max-width: 767px) {
          .pd-title { margin: 16px 0 22px; }
          .pd-sub { font-size: 16px; margin: 30px 0 16px; }
          .pd-content { padding: 4px 14px 18px 16px; }
        }
        @media (max-width: 575px) {
          .pd-head { padding: 12px 14px; gap: 10px; }
          .pd-row { flex-direction: column; gap: 6px; }
          .pd-row b { white-space: normal; }
          .pd-img { margin: 18px 0 14px; }
        }
        @media (max-width: 380px) {
          .pd-wrap { padding: 0 10px; }
          .pd-lead { font-size: 13px; }
        }
      `}</style>

      <div className="pd-wrap">
        <nav className="pd-crumbs">
          <Link to="/">⌂</Link>
          <span>›</span>
          <span>Գործընկեր ավտոսրահներ</span>
        </nav>

        <div className="pd-inner">
          <h1 className="pd-title">Գործընկեր ավտոսրահներ</h1>

          <p className="pd-lead">
            Պետք է ավտովարկ և որոշել ես դիմել <strong className="pd-hl">Evoca</strong>-ին, իմացիր՝ արդեն ունես
            արտոնյալ պայմաններ:
          </p>

          <p className="pd-lead"><strong className="pd-hl">Նոր մեքենա, ցածր տոկոսադրույք</strong></p>

          <p className="pd-lead">
            Դու գիտես, որ Evoca-ում ավտոմեքենա կարող ես ձեռք բերել ինչպես առաջնային, այնպես էլ երկրորդային
            շուկայից: Առաջնային շուկայի դեպքում՝ Evoca-ն համագործակցում է մի շարք ավտոսրահների հետ և
            առաջարկում վարկավորման արտոնյալ պայմաններ:
          </p>

          <p className="pd-lead">
            Վարկավորման արտոնյալ պայմանները հերիք չի, դու նաև ունես տեղում վարկային հայտ ներկայացնելու
            հնարավորություն: Հայտը ներկայացնելուց հետո հարցման պատասխանը ստանում ես րոպեների ընթացքում:
            Կարող ես տեղում կնքել վարկային պայմանագիրը և դու ունես նոր ավտոմեքենա՝ հատուկ պայմաններով: Օնլայն
            վարկավորման դեպքում՝ ավտովարկը տրամադրվում է առանց սպասարկման վճարների, իսկ ԿԱՍԿՕ
            ապահովագրությունը վարկի մայր գումարի մնացորդի չափով յուրաքանչյուր տարի մինչև վարկի մարման
            վերջնաժամկետը կնքվում է Բանկի կողմից և Բանկի հաշվին:
          </p>

          <p className="pd-lead">
            <strong className="pd-hl">Evoca</strong>-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին
            մանրամասն կարող ես ծանոթանալ ստորև.
          </p>

          <h2 className="pd-sub">Անհրաժեշտ տեղեկատվություն</h2>

          {DEALERS.map((d) => (
            <Item
              key={d.id}
              item={d}
              open={openId === d.id}
              onToggle={() => setOpenId(openId === d.id ? null : d.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}