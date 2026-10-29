import React, { useState } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import './CardDetail.css';

import { useTranslation } from 'react-i18next';
import OnlineBanner from './OnlineBanner';
import { CARDS, MC_GOLD_IMG, VISA_GOLD_IMG, L_BANK, L_ARCA, L_OTHER, L_ANNUAL } from './cardsData';

const L_FOREIGN = 'Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար';
const mcGoldImg = MC_GOLD_IMG;

export { MC_GOLD_IMG, VISA_GOLD_IMG };

// slug -> данные страницы карты. Новые карты добавляются сюда.
export const CARD_DETAILS = {
  'mastercard-gold': {
    title: 'Mastercard Gold',
    subtitle: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:',
    img: mcGoldImg,
    crumb: ['Mastercard', 'Mastercard Gold'],
    paragraphs: [
      "**Mastercard Gold քարտը** Mastercard միջազգային վճարահաշվարկային համակարգի **պրեմիում դասի չիպային քարտ** է, որն ունի դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:",
      "**Mastercard Gold քարտը** կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս **նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա** վճարելով **Mastercard Gold քարտով**:",
      "Քո դրամական միջոցներն օրվա բոլոր ժամերին, աշխարհի ցանկացած կետում հասանելի կլինեն քեզ: Դու կկարողանաս բանկոմատի միջոցով **քո Mastercard Gold քարտից** գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Mastercard Gold տարբերանշանը:",
      "Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: **EvocaTOUCH** հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով կտրամադրենք քո քարտը Հայաստանի ցանկացած կետում:",
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
      "**Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:**",
      "Visa Gold քարտը Visa International միջազգային վճարահաշվարկային համակարգի պրեմիում դասի չիպային քարտ է, որն ապահովում է Ձեր հարմարավետությունն ու ընդգծում Ձեր կարգավիճակը:",
      "Աշխարհի ցանկացած կետում Ձեր ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն: Դուք կկարողանաք բանկոմատի միջոցով Evoca Visa Gold քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը:",
      "**Evoca Visa Gold** քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում:",
      "Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրեք քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում:",
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
  'travel': {
    subtitle: 'Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:',
    crumb: ['Mastercard', 'Evoca Travel Card'],
    paragraphs: [
      'Որտե՞ղ ես ուզում լինել վաղը․ Փարիզո՞ւմ, Դուբայո՞ւմ, թե՞ քեզ համար նոր, արկածներով լի վայրում:',
      '**Evocabank**-ը ներկայացնում է **Evoca Travel Card** ճամփորդական քարտը, որը կդառնա քո ակտիվ ապրելակերպի ուղեկիցը յուրաքանչյուր ճամփորդության ժամանակ:',
      'Ձեռք բերելով **Evoca Travel Card**՝ դու դառնում ես **Evocabank**-ի պրեմիում քարտապանների ոչ միայն Հայաստանում, այլ նաև ամբողջ աշխարհում՝ միջազգային ճամփորդական ապահովագրություն, կոնսիերժ ծառայություն, անվճար մուտք օդանավակայանների բիզնես սրահներ, Fast track, արտարժույթի արտոնյալ կուրս և այլն:',
    ],
  },
  'visa-vision': {
    subtitle: 'Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:',
    crumb: ['Visa', 'Visa Vision'],
    tariffTab: 'Visa Vision քարտի սակագներ',
    paragraphs: [
      '**Evocabank**-ը ներկայացնում է իր նոր **Visa Vision** քարտը, որի հետ դու կստանաս՝',
      { list: [
        '0% կանխիկացում Evoca-ի բոլոր բանկոմատներից',
        'Cashback բոլոր անկանխիկ վճարումներից',
        'Դրական մնացորդի վրա գումարի կուտակում',
        'Վարկային սահմանաչափ՝ քո ցանկությամբ',
      ] },
      'Ի դեպ, քո քարտի դիզայնը դու ես ընտրում՝ մինիմալիստիկ սպիտակ, թե՞ ոճային սև:',
      { img: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png' },
      'Դե կարող ես ընտրել գույնն ու պատվիրել քո Visa Vision քարտը:',
      'Այո, այս ամենն իրական է!',
      '**Vision** քարտը **Visa Rewards** տեսակի քարտ է: Անկախ մնացորդի չափից՝ դրամային քարտի վրա դու կուտակում ես տարեկան **4%** գումար, դոլարային քարտերի դեպքում՝ **1%**, իսկ եվրոյով՝ **0.5%**:',
      'Բայց այսքանով քարտի առավելությունները չեն ավարտվում:',
      'Կատարիր անկանխիկ գնումներ ու վճարումներ քո Visa Vision քարտով և ստացիր **0.25% cashback** տեղական գործարքների համար, և **0.5% cashback** արտասահմանյան գործարքների համար:',
      '**Visa Vision** քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով **թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում**:',
      '**Որտե՞ղ կարելի է օգտագործել քարտը:**',
      '**Evoca Vision** քարտով կարող ես վճարել խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում ինչպես ՀՀ տարածքում, այնպես էլ ՀՀ տարածքից դուրս: Այս քարտով կարելի է նաև կատարել օնլայն գնումներ՝ աշխարհի ցանկացած կետից:',
      '**Որքա՞ն է քարտի սպասարկման վճարը:**',
      'Քարտի ամսական սպասարկման վճարը կազմում է 600 ՀՀ դրամ:',
    ],
  },
};

// Общий шаблон: для карт без собственной записи в CARD_DETAILS страница собирается из данных списка (cardsData.js)
const BRANDS = [['visa', 'Visa'], ['mastercard', 'Mastercard'], ['unionpay', 'UnionPay'], ['arca', 'ArCa']];

const GENERIC_PARAGRAPHS = [
  'Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: **EvocaTOUCH** հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել քարտը և ստանալ այն քո ցանկացած վայրում՝ անվճար առաքման միջոցով:',
  'Լրացուցիչ տեղեկությունների համար զանգահարիր մեր կարճ համարով՝ **8444**, կամ այցելիր Բանկի ցանկացած մասնաճյուղ:',
];

const cardPath = (c) => c.to || `/cards/${c.id}`;

function getDetails(cardId) {
  const card = CARDS.find((c) => c.id === cardId || c.to === `/cards/${cardId}`);
  const own = CARD_DETAILS[cardId] || (card && CARD_DETAILS[card.id]);
  if (!card && !own) return null;
  const brand = card ? BRANDS.find(([k]) => card.cats.includes(k)) : null;
  const base = card
    ? {
        title: card.title,
        subtitle: card.text,
        img: card.img,
        crumb: brand ? [brand[1], card.title] : [card.title],
        paragraphs: [card.text, ...GENERIC_PARAGRAPHS],
        stats: card.stats,
      }
    : {};
  return { ...base, ...own, card };
}

function Rich({ text }) {
  // **жирный** внутри уже переведённой строки
  return text.split('**').map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>));
}

function OtherCards({ exclude }) {
  const { t } = useTranslation();
  const list = CARDS.filter((c) => c.id !== exclude);
  const [i, setI] = useState(0);
  const visible = 4;
  const max = Math.max(0, list.length - visible);
  return (
    <section className="cd-other">
      <div className="cd-wrap">
        <h2>{t('Այլ քարտեր')}</h2>
        <div className="cd-other-row">
          <button type="button" aria-label="prev" onClick={() => setI((v) => (v <= 0 ? max : v - 1))}><ChevronLeft size={22} /></button>
          <div className="cd-other-viewport">
            <div className="cd-other-track" style={{ transform: `translateX(-${i * (100 / visible)}%)` }}>
              {list.map((c) => (
                <Link to={cardPath(c)} key={c.id} className="cd-other-item" style={{ flex: `0 0 ${100 / visible}%` }}>
                  <img src={c.img} alt={c.title} />
                  <span>{c.title}</span>
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
  const { t } = useTranslation();
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('about');
  const d = getDetails(cardId);
  if (!d) return <Navigate to="/cards" replace />;
  const hasStats = d.stats && d.stats.length > 0;

  return (
    <main className="cd-page">
      <section className="cd-hero">
        <div className="cd-wrap cd-hero-in">
          <div className="cd-hero-text">
            <h1>{d.title}</h1>
            <p>{t(d.subtitle)}</p>
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
            <ArrowLeft size={18} /> {t('Վերադառնալ')}
          </button>
          <nav className="cd-crumbs">
            <Link to="/" aria-label="Home"><Home size={14} /></Link>
            <ChevronRight size={11} />
            <Link to="/">{t('Անհատ')}</Link>
            <ChevronRight size={11} />
            <Link to="/cards">{t('Քարտեր')}</Link>
            <ChevronRight size={11} />
            <Link to="/cards">{t('Քարտեր')}</Link>
            {d.crumb.map((c, i) => (
              <React.Fragment key={c}>
                <ChevronRight size={11} />
                <span className={i === d.crumb.length - 1 ? 'last' : ''}>{c}</span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="cd-tabs">
          <button type="button" className={tab === 'about' ? 'on' : ''} onClick={() => setTab('about')}>{t('Քարտի մասին')}</button>
          <button type="button" className={tab === 'tariffs' ? 'on' : ''} onClick={() => setTab('tariffs')}>{t(d.tariffTab || 'Սակագներ և դրույքներ')}</button>
        </div>

        <div className={`cd-body${hasStats ? '' : ' cd-body--single'}`}>
          <div className="cd-text">
            {tab === 'about' ? (
              d.paragraphs.map((p, i) => {
                if (p.list) return <ul key={i}>{p.list.map((li) => <li key={li}>{t(li)}</li>)}</ul>;
                if (p.img) return <img key={i} className="cd-inline-img" src={p.img} alt={d.title} />;
                return <p key={i}><Rich text={t(p)} /></p>;
              })
            ) : (
              <p>{t(hasStats ? 'Սակագները և դրույքները ներկայացված են աջ կողմի աղյուսակում:' : 'Սակագների և դրույքների մասին մանրամասն տեղեկությունը կարող եք ստանալ կարճ համարով՝ 8444:')}</p>
            )}
          </div>

          {hasStats && (
            <aside className="cd-stats">
              <div className="cd-cur">
                {['֏', '$', '€', '₽'].map((c) => <span key={c}>{c}</span>)}
              </div>
              {d.stats.map((s, i) => (
                <div className="cd-stat" key={i}>
                  <div className="cd-stat-v">
                    {s.pre && <small>{t(s.pre)}</small>}
                    <b>{t(s.value)}</b>
                  </div>
                  <div className="cd-stat-l">
                    {t(s.label)}
                    {s.note && <><br />{t(s.note)}</>}
                  </div>
                </div>
              ))}
            </aside>
          )}
        </div>
      </div>

      {d.banner && (
        <section className={`cd-banner ${d.bannerClass}`}>
          <h2>{t(d.banner)}</h2>
        </section>
      )}

      <OtherCards exclude={d.card?.id} />
      <OnlineBanner />
    </main>
  );
}
