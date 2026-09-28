import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, ArrowRight, Home, ChevronRight } from 'lucide-react';
import './About.css';

// ---------- Картинки ----------
const IMG_GENERAL = 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png';
const IMG_MISSION = 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg';
const IMG_HISTORY = 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png';
const IMG_LOGO = 'https://www.evoca.am/file_manager/icons/logo.png';
const IMG_BRANDBOOK = 'https://www.evoca.am/file_manager/other/52.png';
const VIDEO_ID = 'QTuqGz3USRE';

// ---------- История банка ----------
// Для годов без текста — заглушка. Замените text/img на реальные данные.
const PLACEHOLDER = 'Բովանդակությունը շուտով կհրապարակվի:';
const HISTORY = [
  {
    year: 2026,
    img: IMG_HISTORY,
    text: 'Բանկը բացեց նոր «Աղափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը:',
  },
  { year: 2025, img: IMG_HISTORY, text: PLACEHOLDER },
  {
    year: 2024,
    img: IMG_HISTORY,
    text: 'Evocabank-ը responsAbility-ից ներգրավեց 4 մլն ԱՄՆ դոլար՝ Հայաստանում ՄՓՄՁ-ների ֆինանսավորման համար, իսկ EIB Global-ի հետ միավորեց ուժերը՝ 12 միլիոն եվրո վարկային միջոցներով փոքր բիզնեսի զարգացմանը նպաստելու նպատակով:',
  },
  {
    year: 2023,
    img: IMG_HISTORY,
    text: 'Evocabank-ն ավարտեց իր պարտատոմսերի տեղաբաշխումը՝ 2 մլրդ ՀՀ դրամ և 10 մլն ԱՄՆ դոլար ընդհանուր ծավալով, արժանացավ «Օրինապահ հարկ վճարող» հավաստագրին և ստացավ նոր միջազգային վարկանիշ Fitch Ratings-ից:',
  },
  { year: 2022, img: IMG_HISTORY, text: PLACEHOLDER },
  { year: 2021, img: IMG_HISTORY, text: PLACEHOLDER },
];

const VALUES = [
  {
    title: 'Human-first',
    text: 'Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար:',
  },
  {
    title: 'Նորարարություն',
    text: 'Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ զարգանալու համար:',
  },
  {
    title: 'Դրական ազդեցություն',
    text: 'Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհին ավելի լավը դարձնելուն:',
  },
];

const CSR_ITEMS = [
  'Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,',
  'Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,',
  'Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,',
  'Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:',
];

const COLORS = [
  { color: '#ffffff', border: true, text: 'Սպիտակը խորհրդանշում է նորը:' },
  { color: '#808080', text: 'Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:' },
  { color: '#6a00db', text: 'Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության գույնն է:' },
];

function Breadcrumbs() {
  return (
    <nav className="ab-crumbs" aria-label="breadcrumb">
      <Link to="/" aria-label="Գլխավոր">
        <Home size={16} strokeWidth={1.6} />
      </Link>
      <ChevronRight size={12} />
      <Link to="/about">Մեր մասին</Link>
      <ChevronRight size={12} />
      <Link to="/about">Evoca-ի մասին</Link>
      <ChevronRight size={12} />
      <span>Ընդհանուր</span>
    </nav>
  );
}

function History() {
  const [idx, setIdx] = useState(0);
  const item = HISTORY[idx];

  return (
    <div className="ab-history">
      <div className="ab-tl">
        <button
          type="button"
          className="ab-tl-arrow ab-tl-arrow--left"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          aria-label="Նախորդ տարի"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="ab-tl-years">
          {HISTORY.map((h, i) => (
            <button
              key={h.year}
              type="button"
              className={`ab-tl-year ${i === idx ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
            >
              <span>{h.year}</span>
              <i />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="ab-tl-arrow ab-tl-arrow--right"
          onClick={() => setIdx((i) => Math.min(HISTORY.length - 1, i + 1))}
          disabled={idx === HISTORY.length - 1}
          aria-label="Հաջորդ տարի"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="ab-history-card" key={item.year}>
        <div className="ab-history-text">
          <p>{item.text}</p>
        </div>
        <div className="ab-history-img">
          <img src={item.img} alt={`Բանկի պատմությունը ${item.year}`} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* ===== Заголовок страницы ===== */}
      <section className="ab-head">
        <div className="ab-wrap">
          <Breadcrumbs />
          <h1 className="ab-h1">Ընդհանուր տեղեկատվություն</h1>
        </div>
      </section>

      {/* ===== Общая информация ===== */}
      <section className="ab-general">
        <div className="ab-wrap ab-general-grid">
          <div className="ab-general-text">
            <p>
              <span className="ab-purple">Evocabank</span>-ը արագ, պարզ և նորարար ծառայություններ
              մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ
              կիրառմամբ:
            </p>
            <p>Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:</p>
            <p>
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն
              նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման
              հարմարավետությունը:
            </p>
            <p>Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:</p>
          </div>
          <div className="ab-general-img">
            <img src={IMG_GENERAL} alt="Evoca" />
          </div>
        </div>
      </section>

      {/* ===== Видение ===== */}
      <section className="ab-vision">
        <div className="ab-wrap-wide">
          <h2 className="ab-vision-title">Մեր տեսլականը</h2>
          <div className="ab-vision-row">
            <span className="ab-vision-line" />
            <p>
              Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական
              նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
            </p>
          </div>
        </div>
      </section>

      {/* ===== Основной узкий контент ===== */}
      <div className="ab-narrow">
        {/* Миссия */}
        <section className="ab-block">
          <h2 className="ab-h2">Մեր առաքելությունը</h2>
          <div className="ab-mission">
            <img src={IMG_MISSION} alt="Evoca" />
            <div className="ab-mission-card">
              <p>
                Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս
                մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և
                հասարակությանը՝ կառուցելու ավելի լավ ապագա:
              </p>
            </div>
          </div>
        </section>

        {/* История */}
        <section className="ab-block">
          <h2 className="ab-h2">Բանկի պատմությունը</h2>
          <History />
        </section>
      </div>

      {/* ===== Ценности ===== */}
      <section className="ab-values">
        <div className="ab-narrow">
          <h2 className="ab-h2">Արժեքներ և առաջնայնություններ</h2>
          <div className="ab-values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="ab-value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CSR ===== */}
      <section className="ab-csr">
        <div className="ab-narrow">
          <h2 className="ab-h2">Կորպորատիվ սոցիալական պատասխանատվություն</h2>
          <p className="ab-csr-lead">
            Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և
            հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
          </p>
          <div className="ab-csr-grid">
            {CSR_ITEMS.map((t) => (
              <div key={t} className="ab-csr-item">
                <span className="ab-csr-dash" />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Бренд ===== */}
      <section className="ab-brand">
        <div className="ab-narrow">
          <h2 className="ab-h2">Բանկի լոգոտիպը</h2>
          <p className="ab-p">
            Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝
            զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով
            հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝
            խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
          </p>
          <div className="ab-logo">
            <img src={IMG_LOGO} alt="Evocabank logo" />
          </div>

          <h3 className="ab-h3">Բանկի բրենդբուքը</h3>
          <p className="ab-p">
            Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները,
            տառատեսակները և բրենդի այլ կարևոր տարրերը:
            <br />
            Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ
            կառուցելու համար:
          </p>
          <a className="ab-brandbook" href="#brandbook" aria-label="Brandbook">
            <img src={IMG_BRANDBOOK} alt="Brandbook" />
          </a>

          <h2 className="ab-h2 ab-h2--colors">Բանկի կորպորատիվ գույները</h2>
          <p className="ab-p">
            Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
          </p>
          <div className="ab-colors">
            {COLORS.map((c) => (
              <div key={c.text} className="ab-color-row">
                <span
                  className="ab-dot"
                  style={{
                    background: c.color,
                    border: c.border ? '1px solid #d9d9d9' : 'none',
                  }}
                />
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <div className="ab-video">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?start=1`}
              title="Evocabank"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== ISO ===== */}
      <section className="ab-iso">
        <div className="ab-narrow">
          <h2 className="ab-h2 ab-h2--iso">ISO27001:2026 միջազգային հավաստագիր</h2>
          <p className="ab-p">Evocabank-ը ստացել է ISO27001:2026 միջազգային հավաստագիր</p>
          <p className="ab-p">
            Հավաստագիրը վկայում է Բանկում ֆինանսական պրոդուկտների և ծառայությունների,
            տվյալների բազաների, տեղեկատվության մշակման և պահպանման օբյեկտների,
            հաճախորդների և բանկային հիմնական գործընթացների վերաբերյալ ֆինանսական
            տեղեկատվության անվտանգ կառավարման համակարգի առկայության մասին:
          </p>
        </div>
      </section>

      {/* Плавающая кнопка звонка (чат-плашка уже есть в футере) */}
      <a href="tel:+37410605555" className="ab-call" aria-label="Զանգահարել">
        <Phone size={20} fill="currentColor" />
      </a>
    </div>
  );
}
