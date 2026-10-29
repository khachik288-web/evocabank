import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import BusinessHeader from './BusinessHeader';
import OnlineBanner from './OnlineBanner';
import { DEFAULT_LOANS_DATA } from './busines';
import './CardDetail.css';

const L_BANK = 'Կանխիկացում բանկի կանխիկացման կետերում';
const L_ARCA = 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում';
const L_OTHER = 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում';
const L_ANNUAL = 'Տարեկան սպասարկում';
const L_FOREIGN = 'Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար';
const mcGoldImg = 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png';

export const MC_GOLD_IMG = mcGoldImg;
export const VISA_GOLD_IMG = 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png';

// Динамический словарь карт и бизнес-кредитов
export const CARD_DETAILS = {
  'mastercard-gold': {
    title: 'Mastercard Gold',
    subtitle: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:',
    img: mcGoldImg,
    crumb: ['Mastercard', 'Mastercard Gold'],
    paragraphs: [
      [['b', 'Mastercard Gold քարտը'], ' Mastercard միջազգային վճարահաշվարկային համակարգի ', ['b', 'պրեմիում դասի չիպային քարտ'], ' է, որն ունի դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:'],
      [['b', 'Mastercard Gold քարտը'], ' կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները. Հաշված րոպեների ընթացքում դու կկարողանաս ', ['b', 'նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա'], ' վճարելով ', ['b', 'Mastercard Gold քարտով'], ':'],
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

// Автоматически добавляем бизнес-кредиты из DEFAULT_LOANS_DATA в единый словарь деталлок
DEFAULT_LOANS_DATA.forEach((loan) => {
  CARD_DETAILS[loan.id] = {
    title: loan.title,
    subtitle: loan.subtitle || loan.description,
    img: loan.image,
    crumb: loan.crumb || ['Бизнес', 'Вклады', loan.title],
    paragraphs: loan.paragraphs || [[loan.description]],
    stats: loan.stats.map(s => ({
      value: s.value,
      label: s.label,
      pre: s.sublabel
    })),
    banner: loan.banner || 'Evocabank — Ваш надежный финансовый партнер в бизнесе.',
    bannerClass: loan.bannerClass || 'purple'
  };
});

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
        <h2>Այլ վարկեր</h2>
        <div className="cd-other-row">
          <button type="button" aria-label="prev" onClick={() => setI((v) => (v <= 0 ? max : v - 1))} className="cursor-pointer">
            <ChevronLeft size={22} />
          </button>
          <div className="cd-other-viewport">
            <div className="cd-other-track" style={{ transform: `translateX(-${i * (100 / visible)}%)` }}>
              {list.map((c) => (
                <Link to="/business" key={c.name} className="cd-other-item" style={{ flex: `0 0 ${100 / visible}%` }}>
                  <img src={c.img} alt={c.name} />
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <button type="button" aria-label="next" onClick={() => setI((v) => (v >= max ? 0 : v + 1))} className="cursor-pointer">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CardDetail() {
  const { cardId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('about');

  // Если переданы стейтом новые данные из карточки — используем их, иначе берем из словаря по id
  const passedItem = location.state?.item;
  const d = passedItem ? {
    title: passedItem.title,
    subtitle: passedItem.description,
    img: passedItem.image,
    crumb: passedItem.crumb || ['Բիզնես', 'Վարկեր', passedItem.title],
    paragraphs: passedItem.paragraphs || [[passedItem.description]],
    stats: passedItem.stats?.map(s => ({ value: s.value, label: s.label, pre: s.sublabel })) || [],
    banner: passedItem.banner || 'Evocabank — Ձեր վստահելի գործընկերը բիզնեսում:',
    bannerClass: 'purple'
  } : CARD_DETAILS[cardId];

  if (!d) return <Navigate to="/business" replace />;

  return (
    <main className="cd-page bg-white min-h-screen text-[#212529]">
      <BusinessHeader />

      <section className="cd-hero bg-[#f4f5f8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="cd-wrap cd-hero-in max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="cd-hero-text max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">{d.title}</h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{d.subtitle}</p>
          </div>
          <div className="cd-hero-img relative">
            <img src={d.img} alt={d.title} className="max-w-md w-full h-auto object-cover rounded-2xl shadow-md" />
            <i className="cd-shadow" />
          </div>
        </div>
      </section>

      <div className="cd-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="cd-toolbar flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <button
            type="button"
            className="cd-back inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer text-sm font-semibold"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} /> Վերադառնալ
          </button>
          <nav className="cd-crumbs flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
            <Link to="/" aria-label="Home" className="hover:text-purple-700"><Home size={14} /></Link>
            <ChevronRight size={12} />
            <Link to="/business" className="hover:text-purple-700">Բիզնես</Link>
            <ChevronRight size={12} />
            <Link to="/business" className="hover:text-purple-700">Վարկեր</Link>
            <ChevronRight size={12} />
            <Link to="/business" className="hover:text-purple-700">Բիզնես վարկեր</Link>
            {d.crumb.map((c, i) => (
              <React.Fragment key={c + i}>
                <ChevronRight size={12} />
                <span className={i === d.crumb.length - 1 ? 'font-semibold text-gray-900' : ''}>{c}</span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="cd-tabs flex gap-8 border-b border-gray-200 mb-8">
          <button
            type="button"
            className={`pb-3 text-base font-bold transition-colors cursor-pointer border-b-2 ${tab === 'about' ? 'border-purple-700 text-purple-700' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            onClick={() => setTab('about')}
          >
            Վարկի մասին
          </button>
          <button
            type="button"
            className={`pb-3 text-base font-bold transition-colors cursor-pointer border-b-2 ${tab === 'tariffs' ? 'border-purple-700 text-purple-700' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
            onClick={() => setTab('tariffs')}
          >
            Պայմաններ
          </button>
        </div>

        <div className="cd-body grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="cd-text lg:col-span-2 space-y-4 text-gray-700 text-base leading-relaxed">
            {tab === 'about' ? (
              d.paragraphs.map((p, i) => (
                <p key={i} className="mb-3">
                  <Rich parts={p} />
                </p>
              ))
            ) : (
              <p>Սակագները, դրույքները և մանրամասն պայմանները ներկայացված են աջ կողմի աղյուսակում:</p>
            )}
          </div>

          <aside className="cd-stats bg-[#f9f9fb] p-6 rounded-2xl border border-gray-100 shadow-xs space-y-6">
            <div className="cd-cur flex gap-3 text-purple-700 font-bold text-lg pb-4 border-b border-gray-200">
              {['֏', '$', '€', '₽'].map((c) => (
                <span key={c} className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm">{c}</span>
              ))}
            </div>
            {d.stats.map((s, i) => (
              <div className="cd-stat flex flex-col" key={i}>
                <div className="cd-stat-v flex items-baseline gap-2">
                  {s.pre && <small className="text-xs text-gray-500 font-medium">{s.pre}</small>}
                  <b className="text-2xl font-extrabold text-[#7B2CBF]">{s.value}</b>
                </div>
                <div className="cd-stat-l text-sm text-gray-600 font-medium mt-1">
                  {s.label}
                  {s.note && <><br /><span className="text-xs text-gray-400">{s.note}</span></>}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <section className={`cd-banner ${d.bannerClass} bg-[#7B2CBF] text-white py-12 px-4 sm:px-6 lg:px-8 text-center my-12`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">{d.banner}</h2>
        </div>
      </section>

      <OtherCards exclude={d.title} />

      <OnlineBanner />
    </main>
  );
}