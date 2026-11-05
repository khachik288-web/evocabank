import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

/* ---------- Данные ---------- */
// grid: [[ячейка, ...], ...]; ячейка = 'текст' | { t, rs, cs, head, note }
const DRAM = 'ՀՀ դրամ';
const LATE = 'ժամկետանց վարկի համար՝ օրական 0.015%, ժամկետանց տոկոսագումարի համար օրական 0.1%:';

const LOANS = [
  { slug: 'evocahome', label: 'Վերանորոգման վարկ EvocaHOME' },
  { slug: 'nerdrumayin', label: 'Անհատական վարկ «Ներդրումային»' },
  { slug: 'collateral', label: 'Գույքի գրավով ապահովված վարկ' },
  { slug: 'unsecured', label: 'Անգրավ սպառողական վարկ' },
  { slug: 'gold', label: 'Ոսկու գրավով (լոմբարդային) վարկ' },
  { slug: 'overdraft', label: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)' },
  { slug: 'visa-infinite', label: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ' },
  { slug: 'student', label: '«ՈՒՍՄՈՒՆԱԿԱՆ» սպառողական վարկ (ծրագրային)' },
  { slug: 'evolution', label: 'Evolution' },
  { slug: 'salary', label: 'Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ' },
  { slug: 'parking', label: 'Ավտոկայանատեղիի ձեռքբերման վարկ' },
  { slug: 'evocapower', label: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER' },
  { slug: 'perspective', label: 'Հեռանկարի ձեռքբերման վարկ' },
  { slug: 'teghum', label: 'Տեղում Ապահով' },
  { slug: 'cash-collateral', label: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ' },
];

const GROUPS = ['Հիփոթեքային վարկեր', 'Ավտովարկեր', 'Լիզինգ', 'Օժանդակ վարկեր'];

const DETAILS = {
  collateral: {
    title: 'Գույքի գրավով ապահովված վարկ',
    rows: [
      ['Վարկի տրամադրման նպատակը', 'Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների), ծառայությունների պատվիրման կամ ձեռքբերման նպատակով:'],
      ['Ովքեր կարող են դիմել', '18 - 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն լրացրի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:'],
      ['Վարկավորման գումար', { grid: [
        [{ t: 'Վարկունակության գնահատմամբ', rs: 2 }, 'Անշարժ գույքի գրավադրմամբ', '3,000,000 - 150,000,000'],
        ['Տրանսպորտային միջոցի գրավադրմամբ', '5,000,000 - 50,000,000'],
        ['Առանց վարկունակության գնահատման', 'Անշարժ գույքի գրավադրմամբ', '3,000,000 - 100,000,000'],
      ] }],
      ['Վարկավորման արժույթ', DRAM],
      ['Մարման ժամկետ', { grid: [
        [{ t: 'Հաստատուն տոկոսադրույքի դեպքում', rs: 2 }, 'Անշարժ գույքի գրավադրմամբ', '24 - 84 ամիս'],
        ['Տրանսպորտային միջոցի գրավադրմամբ', '60 ամիս'],
        [{ t: 'Լողացող տոկոսադրույքի դեպքում անշարժ գույքի դեպքում', cs: 2 }, '36 - 180 ամիս'],
      ] }],
      ['Տարեկան անվանական տոկոսադրույք', { grid: [
        [{ t: 'Վարկունակության գնահատմամբ', rs: 2 }, { t: 'Անշարժ գույքի գրավադրմամբ', note: '1' }, '14% - 17%'],
        ['Տրանսպորտային միջոցի գրավադրմամբ', '18%'],
        [{ t: 'Առանց վարկունակության գնահատման', cs: 2 }, '15 - 18%'],
      ] }],
      ['Տարեկան փաստացի տոկոսադրույք', { grid: [
        [{ t: 'Վարկունակության գնահատմամբ', rs: 2 }, 'Անշարժ գույքի գրավադրմամբ', '15.23%-21.98%'],
        ['Տրանսպորտային միջոցի գրավադրմամբ', '17.38%-20.95%'],
        [{ t: 'Առանց վարկունակության գնահատման', cs: 2 }, '16.38%-23.20%'],
      ] }],
      ['Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ', { list: [
        'Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ՝ սկսած 5%-ից + փոփոխուն բաղադրիչ:',
        'Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն չափը՝ հաստատված տարեկան տոկոսադրույք ±4%, սակայն ոչ ավել քան 21%',
        'Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերահաշվարկվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանից հետո…',
      ] }],
    ],
  },

  unsecured: {
    title: 'Անգրավ սպառողական վարկ',
    rows: [
      ['Վարկի տրամադրման նպատակը', 'Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների), ծառայությունների պատվիրման կամ ձեռքբերման նպատակով:'],
      ['Ովքեր կարող են դիմել', '18 - 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն լրացրի 65 տարին: Տվյալ պայմանը վերաբերում է նաև երաշխավոր ֆիզիկական անձանց:'],
      ['Վարկավորման արժույթ', DRAM],
      ['Վարկավորման գումար', { grid: [
        ['Առանց եկամուտների հիմնավորման', '1,000,000 - 3,000,000'],
        ['Եկամուտների հիմնավորմամբ', '1,000,000 - 10,000,000'],
      ] }],
      ['Վարկի մարման ժամկետը', '36 - 60 ամիս'],
      ['Տարեկան տոկոսադրույքներ', { grid: [
        [{ t: '', head: true }, { t: 'Անվանական', head: true }, { t: 'Փաստացի', head: true }],
        ['Առանց եկամուտների հիմնավորման', '21%', '23.17%'],
        ['Եկամուտների հիմնավորմամբ', '19%', '20.77%'],
      ] }],
      ['Վարկի մարման ժամանակացույց', 'Անուիտետային (ամենամսյա պարբերականությամբ)'],
      ['Վարկի գումարը պարտավորագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք', 'Տուգանք չի կիրառվում'],
      ['Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր', LATE],
      ['Վարկի տրամադրման եղանակը', 'Անկանխիկ'],
      ['Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ', 'Չի սահմանվում'],
      ['Երաշխավորություն', { grid: [
        ['Առանց եկամուտների հիմնավորման 1,000,000 ՀՀ դրամ', 'Նվազագույնը 1 (մեկ) անձի երաշխավորություն'],
        ['Առանց եկամուտների հիմնավորման 1,000,001 - 3,000,000 ՀՀ դրամ', 'Նվազագույնը 2 (երկու) անձի երաշխավորություն'],
      ] }],
    ],
  },

  evocahome: {
    title: 'Վերանորոգման վարկ EvocaHOME',
    updated: '02/01/2026 10:24',
    rows: [
      ['Տրամադրման նպատակը', 'Շինարարական նյութերի, կենցաղային տեխնիկայի և կահույքի վաճառքով զբաղվող և համագործակցության շրջանակներում գործընկեր հանդիսացող կազմակերպությունների կողմից առաջարկվող ապրանքների ձեռք բերման` այդ թվում աշխատանքների, ծառայությունների պատվիրման նպատակով:'],
      ['Ովքեր կարող են դիմել', '21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք'],
      ['Սահմանաչափ', '500,000 - 10,000,000 ՀՀ դրամ'],
      ['Սահմանաչափի տեսակ', 'Չվերականգնվող'],
      ['Սահմանաչափի տրամադրման եղանակ', 'Վարկային սահմանաչափը տրամադրվում է Բանկի կողմից թողարկված հատուկ ARCA վճարային քարտերի միջոցով:'],
      ['Արժույթ՝', DRAM],
      ['Անվանական տոկոսադրույք՝', '16%'],
      ['Փաստացի տոկոսադրույք՝', '17.42%'],
      ['Արտոնյալ ժամանակահատված', 'Չի տրամադրվում'],
      ['Մարման ժամկետ', '60 ամիս'],
      ['Մարման եղանակ', 'Անուիտետային'],
      ['Քաղվածքի օր', 'Միևնույն յուրաքանչյուր ամսվա 10-ը'],
      ['Վճարման վերջնաժամկետ', 'Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետը հանդիսանում է հաջորդ աշխատանքային օրը):'],
      ['Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր', LATE],
      ['Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ', { list: [
        'Վարկի տրամադրման կամ մերժման որոշումը կայացվում է վարկային հայտի ընթացքում:',
        'Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:',
      ], plain: true }],
    ],
  },

  nerdrumayin: {
    title: 'Անհատական վարկ «Ներդրումային»',
    rows: [
      ['Նպատակը', { intro: 'Վարկը տրամադրվում է.', list: [
        'ՀՀ տարածքում կամ ՀՀ տարածքից դուրս գործող իրավաբանական անձանց կանոնադրական կապիտալում մասնակցության կամ բաժնեմասնակցության ձեռքբերման կամ որևէ այլ կերպ ՀՀ օրենսդրությամբ թույլատրելի առևտրային գործունեությամբ ներդրման նպատակով:',
        'ՀՀ տարածքից դուրս եկամուտ ստանալու նպատակով, անշարժ կամ շարժական գույքի ձեռքբերման նպատակով:',
      ] }],
      ['Ովքեր կարող են դիմել', '18 - 65 տարեկան ՀՀ ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն լրացրի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:'],
      ['Վարկավորման արժույթ', { list: ['ՀՀ դրամ', 'ԱՄՆ դոլար', 'Եվրո'] }],
      ['Վարկավորման գումար', { grid: [
        [{ t: '16,000,000 - 350,000,000 ՀՀ դրամ', cs: 1 }],
        ['40,000 - 700,000 ԱՄՆ դոլար'],
        ['40,000 - 700,000 եվրո'],
      ] }],
      ['Սահմանաչափի տեսակ', { grid: [
        [{ t: 'Վարկային գիծ', note: '2' }, 'Մարման գրաֆիկով վարկ'],
      ] }],
      ['Մարման եղանակը', { grid: [
        ['Չվերականգնվող վարկային գիծ, Օվերդրաֆտ', '«Անուիտետային», «Դիֆերենցված»'],
      ] }],
      ['Մարման ժամկետը', { grid: [
        ['Հաստատուն տոկոսադրույքի կիրառման դեպքում', '12 - 84 ամիս'],
        ['Լողացող տոկոսադրույքի կիրառման դեպքում', '60 - 240 ամիս'],
      ] }],
      ['Տարեկան տոկոսադրույք (հաստատուն)', { grid: [
        [{ t: '', head: true }, { t: 'Անվանական', head: true }, { t: 'Առավելագույն փաստացի', head: true, note: '3' }],
        ['ՀՀ դրամ', '15.0%', '16.56% - 18.72%'],
        ['ԱՄՆ դոլար', '10.0%', '10.92% - 12.95%'],
        ['Եվրո', '8.5%', '9.27% - 11.27%'],
      ] }],
      ['Տարեկան տոկոսադրույք (լողացող)', { grid: [
        [{ t: '', head: true }, { t: 'Անվանական', head: true }, { t: 'Առավելագույն փաստացի', head: true }],
        ['ՀՀ դրամ', 'սկսած 14.0%-ից (հաստատուն բաղադրիչ՝ սկսած 5.0%-ից + փոփոխուն բաղադրիչ)', '15.68% - 16.03%'],
        ['ԱՄՆ դոլար', 'սկսած 9.2%-ից (հաստատուն բաղադրիչ՝ սկսած 8.2%-ից + փոփոխուն բաղադրիչ)', '10.29% - 10.62%'],
        ['Եվրո', 'սկսած 7.5%-ից (հաստատուն բաղադրիչ՝ սկսած 7.5%-ից + փոփոխուն բաղադրիչ)', '8.44% - 8.76%'],
        [{ t: 'Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն չափ', cs: 2 }, '±4%, սակայն ոչ ավել քան 21%'],
      ] }],
    ],
  },
};

/* ---------- Рендер ---------- */
const Note = ({ n }) => <sup className="tl-note">[{n}]</sup>;

function Grid({ grid }) {
  return (
    <table className="tl-in">
      <tbody>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((c, j) => {
              const cell = typeof c === 'string' ? { t: c } : c;
              const Tag = cell.head ? 'th' : 'td';
              return (
                <Tag key={j} rowSpan={cell.rs} colSpan={cell.cs}>
                  {cell.t}
                  {cell.note && <Note n={cell.note} />}
                </Tag>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Body({ body }) {
  if (typeof body === 'string') return <>{body}</>;
  if (body.grid) return <Grid grid={body.grid} />;
  return (
    <>
      {body.intro && <p className="tl-p">{body.intro}</p>}
      <ul className={`tl-list${body.plain ? ' plain' : ''}`}>
        {body.list.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </>
  );
}

export default function TariffsLoansPersonal() {
  const { slug } = useParams();
  const [openGroup, setOpenGroup] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);

  if (!slug) return <Navigate to="/about/tariffs/loans/collateral" replace />;
  const current = LOANS.find((l) => l.slug === slug);
  if (!current) return <Navigate to="/about/tariffs/loans/collateral" replace />;
  const data = DETAILS[slug];

  return (
    <main className="tl-page">
      <style>{`
        .tl-page { color: #222; padding-bottom: 80px; }
        .tl-wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .tl-crumbs { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 18px 0; color: #6a00db; flex-wrap: wrap; }
        .tl-crumbs a { color: #6a00db; text-decoration: none; transition: opacity .2s; }
        .tl-crumbs a:hover { opacity: .6; }
        .tl-title { font-size: clamp(1.2rem, 1rem + 0.9vw, 1.6rem) !important; font-weight: 700 !important; line-height: 1.3; margin: 24px 0 36px; max-width: 900px; }

        .tl-layout { display: grid; grid-template-columns: 290px minmax(0, 1fr); gap: 28px; align-items: start; }

        .tl-side { background: #fff; border: 1px solid #ece6f5; border-radius: 12px; box-shadow: 0 2px 14px rgba(40,0,90,.07); padding: 6px 0; position: sticky; top: 16px; }
        .tl-grp { display: flex; align-items: center; justify-content: space-between; width: 100%; background: none; border: 0; border-left: 3px solid transparent;
          padding: 14px 18px; font-size: 13px; font-weight: 700; color: #222; text-align: left; cursor: pointer; transition: background .2s, color .2s; }
        .tl-grp:hover { background: #faf6ff; color: #6a00db; }
        .tl-grp.on { border-left-color: #6a00db; color: #6a00db; }
        .tl-grp svg { color: #6a00db; transition: transform .25s; flex-shrink: 0; }
        .tl-grp.open svg { transform: rotate(180deg); }
        .tl-items { padding: 0 0 8px; }
        .tl-items a { display: block; padding: 9px 18px 9px 22px; font-size: 12px; line-height: 1.4; color: #555; text-decoration: none; transition: background .2s, color .2s, padding .2s; }
        .tl-items a:hover { color: #6a00db; background: #faf6ff; padding-left: 26px; }
        .tl-items a.active { color: #6a00db; font-weight: 700; }

        .tl-h2 { font-size: 17px !important; font-weight: 700 !important; margin: 0 0 14px; }
        .tl-scroll { overflow-x: auto; background: #fff; border-radius: 6px; box-shadow: 0 2px 14px rgba(40,0,90,.08); }
        .tl-table { width: 100%; border-collapse: collapse; font-size: 11.5px; line-height: 1.55; }
        .tl-table > tbody > tr > td { border: 1px solid #e6e6ec; padding: 14px 12px; vertical-align: middle; }
        .tl-table > tbody > tr > td.n { width: 40px; color: #555; }
        .tl-table > tbody > tr > td.l { width: 24%; color: #444; font-weight: 500; }
        .tl-table > tbody > tr > td.v { padding: 0; }
        .tl-table > tbody > tr > td.v.pad { padding: 14px 12px; }
        .tl-in { width: 100%; height: 100%; border-collapse: collapse; }
        .tl-in td, .tl-in th { border: 1px solid #e6e6ec; padding: 14px 12px; vertical-align: middle; font-weight: 400; text-align: left; }
        .tl-in tr:first-child > td, .tl-in tr:first-child > th { border-top: 0; }
        .tl-in tr > :first-child { border-left: 0; }
        .tl-in tr > :last-child { border-right: 0; }
        .tl-in tr:last-child > td { border-bottom: 0; }
        .tl-in th { background: #faf8fd; color: #555; }
        .tl-table > tbody > tr:last-child > td { border-bottom: 0; }
        .tl-table > tbody > tr > td:first-child { border-left: 0; }
        .tl-table > tbody > tr > td:last-child { border-right: 0; }
        .tl-table > tbody > tr:first-child > td { border-top: 0; }
        .tl-p { margin: 0 0 10px; }
        .tl-list { margin: 0; padding-left: 18px; }
        .tl-list li { margin-bottom: 12px; }
        .tl-list li::marker { color: #6a00db; }
        .tl-list.plain { padding-left: 0; list-style: none; }
        .tl-list.plain li { margin-bottom: 6px; }
        .tl-note { color: #6a00db; font-size: 9px; margin-left: 1px; }
        .tl-empty { padding: 40px 24px; text-align: center; color: #777; font-size: 14px; }
        .tl-upd { margin-top: 28px; padding-top: 14px; border-top: 1px solid #e6e6ec; text-align: right; font-size: 11px; color: #6a00db; }

        @media (max-width: 991px) {
          .tl-layout { grid-template-columns: 1fr; gap: 20px; }
          .tl-side { position: static; }
        }
        @media (max-width: 767px) {
          .tl-wrap { padding: 0 16px; }
          .tl-title { margin: 14px 0 22px; }
          .tl-table { min-width: 560px; }
        }
      `}</style>

      <div className="tl-wrap">
        <nav className="tl-crumbs">
          <Link to="/">⌂</Link>
          <span>›</span>
          <Link to="/about">Մեր մասին</Link>
          <span>›</span>
          <Link to="/about/tariffs/archive">Սակագներ</Link>
          <span>›</span>
          <span>Վարկեր ֆիզիկական անձանց</span>
        </nav>

        <h1 className="tl-title">Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /</h1>

        <div className="tl-layout">
          <aside className="tl-side">
            <button type="button" className={`tl-grp on${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span>Սպառողական վարկեր</span>
              <Chevron />
            </button>
            {menuOpen && (
              <div className="tl-items">
                {LOANS.map((l) => (
                  <Link key={l.slug} to={`/about/tariffs/loans/${l.slug}`} className={l.slug === slug ? 'active' : ''}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
            {GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                className={`tl-grp${openGroup === g ? ' open' : ''}`}
                onClick={() => setOpenGroup(openGroup === g ? null : g)}
              >
                <span>{g}</span>
                <Chevron />
              </button>
            ))}
          </aside>

          <section>
            <h2 className="tl-h2">{current.label}</h2>
            <div className="tl-scroll">
              {data ? (
                <table className="tl-table">
                  <tbody>
                    {data.rows.map(([label, body], i) => (
                      <tr key={i}>
                        <td className="n">{i + 1}.</td>
                        <td className="l">{label}</td>
                        <td className={`v${typeof body === 'string' || !body.grid ? ' pad' : ''}`}>
                          <Body body={body} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="tl-empty">Այս պրոդուկտի պայմանները և սակագները շուտով կավելացվեն։</div>
              )}
            </div>
            {data?.updated && <div className="tl-upd">Թարմացվել է՝ {data.updated}</div>}
          </section>
        </div>
      </div>
    </main>
  );
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
