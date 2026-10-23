import React, { useState, useRef } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import './CardDetail.css';

const L_BANK = 'Կանխիկացում բանկի կանխիկացման կետերում';
const L_ARCA = 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում';
const L_OTHER = 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում';
const L_ANNUAL = 'Տարեկան սպասարկում';
const L_FOREIGN = 'Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար';
const mcGoldImg = 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png';

export const MC_GOLD_IMG = mcGoldImg;
export const VISA_GOLD_IMG = 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png';

// slug -> данные страницы карты. Новые карты добавляются сюда.
export const CARD_DETAILS = {
  'mastercard-gold': {
    title: 'Mastercard Gold',
    subtitle: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:',
    img: mcGoldImg,
    crumb: ['Mastercard', 'Mastercard Gold'],
    paragraphs: [
      [['b', 'Mastercard Gold քարտը'], ' Mastercard միջազգային վճարահաշվարկային համակարգի ', ['b', 'պրեմիում դասի չիպային քարտ'], ' է, որն ունի դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:'],
      [['b', 'Mastercard Gold քարտը'], ' կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս ', ['b', 'նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա'], ' վճարելով ', ['b', 'Mastercard Gold քարտով'], ':'],
      ['Քո դրամական միջոցներն օրվա բոլոր ժամերին, աշխարհի ցանկացած կետում հասանելի կլինեն քեզ: Դու կկարողանաս բանկոմատի միջոցով ', ['b', 'քո Mastercard Gold քարտից'], ' գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Mastercard Gold տարբերանշանը:'],
      ['Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: ', ['b', 'EvocaTOUCH'], ' հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով կտրամադրենք քո քարտը Հայաստանի ցանկացած կետում:'],
    ],
    stats: [
      { value: '0%', label: L_BANK, note: 'մինչև 2 մլն ֏' },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '15.000 ֏', label: L_ANNUAL },
      { value: '45,000 ֏', label: L_FOREIGN },
    ],
    banner: 'Պատվիրիր քո Mastercard Gold քարտն EvocaTOUCH հավելվածի օգնությամբ և ստացիր այն քո ցանկացած վայրում՝ անվճար առաքման միջոցով',
    bannerClass: 'gold',
  },
  'visa-gold': {
    title: 'Visa Gold',
    subtitle: 'Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից',
    img: VISA_GOLD_IMG,
    crumb: ['Visa', 'Visa Gold'],
    paragraphs: [
      [['b', 'Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:']],
      ['Visa Gold քարտը Visa International միջազգային վճարահաշվարկային համակարգի պրեմիում դասի չիպային քարտ է, որն ապահովում է Ձեր հարմարավետությունն ու ընդգծում Ձեր կարգավիճակը:'],
      ['Աշխարհի ցանկացած կետում Ձեր ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն: Դուք կկարողանաք բանկոմատի միջոցով Evoca Visa Gold քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը:'],
      [['b', 'Evoca Visa Gold'], ' քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում:'],
      ['Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրեք քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում:'],
    ],
    stats: [
      { value: '0.2%', label: L_BANK },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '15,000 ֏', label: L_ANNUAL },
      { value: '75,000 ֏', label: L_FOREIGN },
    ],
    banner: 'Evoca Visa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցը և կընդգծի Ձեր յուրահատուկ կարգավիճակը:',
    bannerClass: 'purple',
  },
};

const IMG = (id, ext = 'png') => `https://www.evoca.am/images-cache/cards/1/${id}/415x261.${ext}`;
const OTHER_CARDS = [
  { name: 'Evoca Visa Platinum', img: IMG('17798007931247') },
  { name: 'Mastercard Standard', img: IMG('17282986912132') },
  { name: 'Visa Classic', img: IMG('1714986642953') },
  { name: 'Visa Infinite', img: IMG('17149866652788') },
  { name: 'UnionPay Gold', img: IMG('17249401821904') },
  { name: 'Mastercard World Digital', img: IMG('17655348192361') },
];

function Rich({ parts }) {
  return parts.map((p, i) =>
    Array.isArray(p) ? <strong key={i}>{p[1]}</strong> : <React.Fragment key={i}>{p}</React.Fragment>
  );
}

function OtherCards({ exclude }) {
  const list = OTHER_CARDS.filter((c) => c.name !== exclude);
  const [i, setI] = useState(0);
  const visible = 4;
  const max = Math.max(0, list.length - visible);
  return (
    <section className="cd-other">
      <div className="cd-wrap">
        <h2>Այլ քարտեր</h2>
        <div className="cd-other-row">
          <button type="button" aria-label="prev" onClick={() => setI((v) => (v <= 0 ? max : v - 1))}><ChevronLeft size={22} /></button>
          <div className="cd-other-viewport">
            <div className="cd-other-track" style={{ transform: `translateX(-${i * (100 / visible)}%)` }}>
              {list.map((c) => (
                <Link to="/cards" key={c.name} className="cd-other-item" style={{ flex: `0 0 ${100 / visible}%` }}>
                  <img src={c.img} alt={c.name} />
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <button type="button" aria-label="next" onClick={() => setI((v) => (v >= max ? 0 : v + 1))}><ChevronRight size={22} /></button>
        </div>
      </div>
    </section>
  );
}

export default function CardDetail() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('about');
  const d = CARD_DETAILS[cardId];
  if (!d) return <Navigate to="/cards" replace />;

  return (
    <main className="cd-page">
      <section className="cd-hero">
        <div className="cd-wrap cd-hero-in">
          <div className="cd-hero-text">
            <h1>{d.title}</h1>
            <p>{d.subtitle}</p>
          </div>
          <div className="cd-hero-img">
            <img src={d.img} alt={d.title} />
            <i className="cd-shadow" />
          </div>
        </div>
      </section>

      <div className="cd-wrap">
        <div className="cd-toolbar">
          <button type="button" className="cd-back" onClick={() => navigate('/cards')}>
            <ArrowLeft size={18} /> Վերադառնալ
          </button>
          <nav className="cd-crumbs">
            <Link to="/" aria-label="Home"><Home size={14} /></Link>
            <ChevronRight size={11} />
            <Link to="/">Անհատ</Link>
            <ChevronRight size={11} />
            <Link to="/cards">Քարտեր</Link>
            <ChevronRight size={11} />
            <Link to="/cards">Քարտեր</Link>
            {d.crumb.map((c, i) => (
              <React.Fragment key={c}>
                <ChevronRight size={11} />
                <span className={i === d.crumb.length - 1 ? 'last' : ''}>{c}</span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="cd-tabs">
          <button type="button" className={tab === 'about' ? 'on' : ''} onClick={() => setTab('about')}>Քարտի մասին</button>
          <button type="button" className={tab === 'tariffs' ? 'on' : ''} onClick={() => setTab('tariffs')}>Սակագներ և դրույքներ</button>
        </div>

        <div className="cd-body">
          <div className="cd-text">
            {tab === 'about' ? (
              d.paragraphs.map((p, i) => <p key={i}><Rich parts={p} /></p>)
            ) : (
              <p>Սակագները և դրույքները ներկայացված են աջ կողմի աղյուսակում:</p>
            )}
          </div>

          <aside className="cd-stats">
            <div className="cd-cur">
              {['֏', '$', '€', '₽'].map((c) => <span key={c}>{c}</span>)}
            </div>
            {d.stats.map((s, i) => (
              <div className="cd-stat" key={i}>
                <div className="cd-stat-v">
                  {s.pre && <small>{s.pre}</small>}
                  <b>{s.value}</b>
                </div>
                <div className="cd-stat-l">
                  {s.label}
                  {s.note && <><br />{s.note}</>}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <section className={`cd-banner ${d.bannerClass}`}>
        <h2>{d.banner}</h2>
      </section>

      <OtherCards exclude={d.title} />
    </main>
  );
}
