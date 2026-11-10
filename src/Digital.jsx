import React, { useState } from 'react';
import Tr from './Tr';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Avandner.css';
import './Accounts.css';
import './Securities.css';
import './Digital.css';
import { Share } from './Accounts';
import { SecCrumbs, PlainPage } from './SecurityParts';
import OnlineBanner from './OnlineBanner';
import NewsBlock from './NewsBlock';

const Bottom = () => <><OnlineBanner /><NewsBlock /></>;

/* ---------- Картинки (с evoca.am) ---------- */
const IMG = 'https://www.evoca.am/images-cache/menu/1';
const VPOS_HERO = `${IMG}/16158111599306/780x585.jpg`;
const POS_HERO = `${IMG}/16158085302978/780x585.jpg`;
const FILES = 'https://www.evoca.am/file_manager';
const MPOS_HERO = 'https://www.evoca.am/images-cache/menu/1/16697156723793/780x585.png';
const LOGO = {
  telcell: `${FILES}/telcell-evoca-logo.png`,
  upay: `${FILES}/uPay-evoca.png`,
  mobidram: `${FILES}/mobidram-evoca.jpg`,
  idram: `${FILES}/idram-evoca.png`,
  easypay: `${FILES}/easypay-evoca.png`,
};
const VPOS_PICTURE = 'https://www.evoca.am/file_manager/pos2-600x315.jpg';

const SECTION = { label: 'Դիջիթալ', path: '/business/digital' };

/* ---------- Общие части ---------- */
const A = ({ children, to = '#' }) =>
  to.startsWith('/') ? <Link className="dp-link" to={to}>{children}</Link> : <a className="dp-link" href={to}>{children}</a>;

const Bullets = ({ items }) => (
  <ul className="dp-list dg-list">{items.map((t, i) => <li key={i}><Tr>{t}</Tr></li>)}</ul>
);

const PurpleH = ({ children }) => <h3 className="dp-ph dg-ph">{children}</h3>;

/* Hero: серый блок слева + картинка справа; если картинки нет — фиолетовая заглушка */
function DigitalHero({ title, text, img }) {
  const { t } = useTranslation();
  return (
    <section className="dp-hero dg-hero">
      <div className="dp-hero-text">
        <h1><Tr>{title}</Tr></h1>
        <p><Tr>{text}</Tr></p>
      </div>
      {img ? (
        <img src={img} alt={t(title)} />
      ) : (
        <div className="dg-hero-ph" role="img" aria-label={t(title)}><Smartphone size={96} strokeWidth={1.2} /></div>
      )}
    </section>
  );
}

/* Страница с hero (V-POS, POS, mPOS) */
function DigitalPage({ crumb, hero, updated, after, children }) {
  return (
    <div className="dp dp-v2 dg">
      <div className="dp-wrap">
        <SecCrumbs current={crumb} section={SECTION} />
        <DigitalHero {...hero} />
        <div className="dp-body dg-body">
          <Share />
          <article className="dp-content">{children}</article>
        </div>
      </div>
      {after}
      {updated && <p className="dp-updated"><Tr>{"Թարմացվել է՝ "}</Tr>{updated}</p>}
    </div>
  );
}

/* Таблица-карточка. head: массив <th> (может быть пустой), children — <tbody> */
const Card = ({ children, className = '' }) => (
  <div className={`dg-card ${className}`}><table className="dg-table">{children}</table></div>
);

const Sup = ({ n }) => <sup className="dg-sup">[{n}]</sup>;

/* ===================================================================== */
/* 1. V-POS Տերմինալ                                                      */
/* ===================================================================== */
export function VPos() {
  return (
    <DigitalPage
      crumb="V-POS Տերմինալ"
      updated="02/10/2026 14:12"
      after={<Bottom />}
      hero={{
        title: 'V-POS Տերմինալ',
        img: VPOS_HERO,
        text: 'V-POS-ը (virtual point of sale) վիրտուալ վճարային համակարգ է, որը հարմարավետ, ապահով և հեշտ լուծում է օնլայն առևտրով զբաղվող բիզնեսների համար: Արագ և տեղում օնլայն վճարումներ կատարելն այսօր կարևոր նախապայման է Ձեր գնորդների համար:',
      }}
    >
      <p className="dp-p">
        <Tr>{"Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն հնարավորություն կտա Ձեզ "}</Tr><A><Tr>{"խուսափել լրացուցիչ ծրագրային ծախսերից"}</Tr></A><Tr>{", սերտիֆիկացումից և հետագա ծրագրային ապահովումից:"}</Tr>
      </p>
      <p className="dp-p">
        <Tr>{"Ձեր գնորդները կկարողանան "}</Tr><A><Tr>{"գնումներ կատարել Ձեր կայքից"}</Tr></A><Tr>{" ու "}</Tr><A><Tr>{"վճարել"}</Tr></A><Tr>{" դրանց համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով:"}</Tr>
      </p>
      <p className="dp-p"><Tr>{"V-POS-ը հասանելի կլինի ինչպես "}</Tr><A><Tr>{"Ձեր կայքում"}</Tr></A><Tr>{", այնպես էլ՝ "}</Tr><A><Tr>{"մոբայլ հավելվածում"}</Tr></A>:</p>

      <p className="dp-p"><Tr>{"Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝"}</Tr></p>
      <Bullets items={[
        <><Tr>{"Օնլայն վաճառքների շնորհիվ "}</Tr><A><Tr>{"կաճեն Ձեր եկամուտները"}</Tr></A>,</>,
        <><Tr>{"Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի "}</Tr><A><Tr>{"նվազագույն միջնորդավճարներ"}</Tr></A><Tr>{"՝ հատուկ Ձեր բիզնեսի համար,"}</Tr><br /><Tr>{"Սպասարկման կետի գրանցման համար անհրաժեշտ "}</Tr><A>V-POS</A><Tr>{" տերմինալների տեղադրման ստանդարտ սակագներն են՝"}</Tr></>,
      ]} />

      <Card className="dg-vpos">
        <thead>
          <tr>
            <th><Tr>{"Գործարքի տեսակ"}</Tr></th>
            <th><Tr>{"Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում"}</Tr></th>
            <th><Tr>{"ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"QR կոդով վճարման դեպքում"}</Tr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Tr>{"Վճարվող գումարի չափ"}</Tr><Sup n={1} /></td>
            <td>1.50%</td><td>1.90%</td><td>3.00%</td><td>1%</td>
          </tr>
          <tr>
            <td colSpan={3}><Tr>{"200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող շրջանառության պարագայում"}</Tr></td>
            <td colSpan={2}>3000<Sup n={2} /></td>
          </tr>
          <tr>
            <td colSpan={3}><Tr>{"Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում"}</Tr></td>
            <td colSpan={2}>20000<Sup n={3} /></td>
          </tr>
        </tbody>
      </Card>

      <ul className="dg-notes">
        <li><Sup n={1} /><Tr>{" Կախված ոլորտի առանձնահատկություններից և շրջանառությունից՝ սակագները կարող են փոփոխվել"}</Tr></li>
        <li><Sup n={2} /><Tr>{" Ներառյալ կիրառելի բոլոր հարկերը"}</Tr></li>
        <li><Sup n={3} /><Tr>{" Ներառյալ կիրառելի բոլոր հարկերը"}</Tr></li>
      </ul>

      <Bullets items={[
        <><Tr>{"Վճարումներն անվտանգ են, գործում են "}</Tr><A>3D Secure Code</A><Tr>{" անվտանգության համակարգերը,"}</Tr></>,
        'Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,',
        <><A><Tr>{"Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում"}</Tr></A><Tr>{" Բանկի մասնագետների կողմից,"}</Tr></>,
        'Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:',
      ]} />

      <p className="dp-p"><Tr>{"V-POS տերմինալ տեղադրելու համար լրացրեք "}</Tr><A to="/business/digital/request"><Tr>{"Տերմինալի տեղադրման հայտը"}</Tr></A><Tr>{" հիմա:"}</Tr></p>
      <ol className="dp-ol dg-ol">
        <li><Tr>{"Մեր մասնագետը 3 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:"}</Tr></li>
        <li><Tr>{"Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում:"}</Tr></li>
      </ol>

      <p className="dp-p"><Tr>{"Կառուցեք Ձեր բիզնեսի թվային ապագան:"}</Tr></p>
      <p className="dp-p"><Tr>{"Evocabank-ում այսուհետ գործում են բիզնես վարկ և բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա:"}</Tr></p>

      <div className="dg-pic"><img src={VPOS_PICTURE} alt="Evocabank POS" loading="lazy" /></div>

      <PurpleH><Tr>{"Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա"}</Tr></PurpleH>
      <p className="dp-p">
        <Tr>{"Եթե ունեք փոքր և միջին բիզնես ու իրականացնում եք անկանխիկ գործարքներ, ապա այս բիզնես վարկը Ձեզ համար է: Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար:"}</Tr>
      </p>
      <p className="dp-p"><Tr>{"Վարկի համար կարող են դիմել՝"}</Tr></p>
      <Bullets items={[
        'ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս',
        'Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր',
      ]} />
      <p className="dp-p"><Tr>{"Որպես վարկի ապահովության միջոց կարող են հանդիսանալ՝"}</Tr></p>
      <Bullets items={[
        'POS տերմինալի շրջանառություն',
        'Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն',
      ]} />
      <p className="dp-p"><Tr>{"Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես հաջողությունները:"}</Tr></p>
      <p className="dp-p"><Tr>{"Վարկի պայմանների կարող եք ծանոթանալ "}</Tr><A><Tr>{"այստեղ"}</Tr></A>:</p>

      <PurpleH><Tr>{"Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա"}</Tr></PurpleH>
      <p className="dp-p">
        <Tr>{"Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ՝ առանց ավելորդ թղթաբանության և ժամանակի կորստի: Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվերդրաֆտ:"}</Tr>
      </p>
      <p className="dp-p"><Tr>{"Վարկի համար կարող են դիմել՝"}</Tr></p>
      <Bullets items={[
        'ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս',
        'Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր',
      ]} />
      <p className="dp-p"><Tr>{"Օվերդրաֆտի պայմաններին կարող եք ծանոթանալ "}</Tr><A><Tr>{"այստեղ"}</Tr></A>:</p>
      <p className="dp-p"><Tr>{"Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ "}</Tr><Link className="dp-link" to="/business"><Tr>{"այստեղ"}</Tr></Link>:</p>
      <p className="dp-p"><Tr>{"Հարցերի դեպքում մեր թիմի հետ կարող եք կապ հաստատել հետևյալ "}</Tr><A><Tr>{"հղումով"}</Tr></A>:</p>
    </DigitalPage>
  );
}

/* ===================================================================== */
/* 2. POS Տերմինալ                                                        */
/* ===================================================================== */
export function Pos() {
  const note = 'mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում';
  return (
    <DigitalPage
      crumb="POS Տերմինալ"
      updated="02/10/2026 14:12"
      after={<Bottom />}
      hero={{
        title: 'POS Տերմինալ',
        img: POS_HERO,
        text: 'POS-ը (point of sale) վճարային համակարգ է, որն օգտագործվում է անկանխիկ վճարումներ ընդունելու համար: Արագ և տեղում վճարումներ կատարելն այսօր կարևոր նախապայման է Ձեր գնորդների համար:',
      }}
    >
      <p className="dp-p">
        <Tr>{"Ձեր գնորդները կկարողանան "}</Tr><A><Tr>{"գնումներ կատարել"}</Tr></A><Tr>{" իրենց միջազգային VISA, Mastercard և տեղական ArCa "}</Tr><A><Tr>{"վճարային քարտերով"}</Tr></A>:
      </p>
      <p className="dp-p"><Tr>{"POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ "}</Tr><A><Tr>{"մոբայլ հավելվածում"}</Tr></A>:</p>
      <p className="dp-p"><Tr>{"Իսկ ինչո՞ւ տեղադրել Evocabank-ի POS տերմինալ՝"}</Tr></p>

      <Bullets items={[
        <><Tr>{"Evocabank-ը POS-ով կատարված վաճառքներից կգանձի "}</Tr><A><Tr>{"նվազագույն միջնորդավճարներ"}</Tr></A><Tr>{"՝ հատուկ Ձեր բիզնեսի համար,"}</Tr><br /><Tr>{"Սպասարկման կետի գրանցման համար անհրաժեշտ "}</Tr><A><Tr>{"POS, ՀԴՄ-POS, mPOS, VENDISTA"}</Tr></A><Tr>{" տերմինալների տեղադրման "}</Tr><A><Tr>{"ստանդարտ սակագներ ու պայմաններ"}</Tr></A>:</>,
      ]} />

      <ul className="dg-dash">
        <li>
          <Tr>{"Եթե վաճառակետի գործունեության տեսակը չի համընկնում "}</Tr><A><Tr>{"ԿԲ կողմից ներկայացված տեսակի կոդին"}</Tr></A><Tr>{" կամ գերազանցում է տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝"}</Tr>
        </li>
      </ul>

      <Card className="dg-pos">
        <thead>
          <tr>
            <th><Tr>{"Գործարքի տեսակ"}</Tr></th>
            <th><Tr>{"Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում"}</Tr></th>
            <th><Tr>{"Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"Ոչ Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"QR կոդով վճարման դեպքում"}</Tr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="dg-rowh"><Tr>{"Վճարվող գումարի չափ"}</Tr></th>
            <td>1.5 %</td><td>1.7 %</td><td>3.0 %</td><td>1 %</td>
          </tr>
          <tr>
            <td rowSpan={3} className="dg-u"><Tr>{"Յուրաքանչյուր տերմինալից գանձվող ամսական միջնորդավճարի նվազագույն չափ (ՀՀ դրամ)"}</Tr></td>
            <td colSpan={3}><Tr>{"Բանկի կողմից տրամադրված POS տերմինալ"}</Tr></td><td>10,000</td>
          </tr>
          <tr><td colSpan={3}><Tr>{"Բանկի կողմից տրամադրված ՀԴՄ-POS"}</Tr></td><td>7,000</td></tr>
          <tr><td colSpan={3}><Tr>{"Տնտեսվարողի ՀԴՄ-POS տերմինալ"}</Tr></td><td>3,000</td></tr>
          <tr><td colSpan={5} className="dg-foot"><Tr>{note}</Tr></td></tr>
        </tbody>
      </Card>

      <ul className="dg-dash">
        <li>
          <Tr>{"Եթե վաճառակետի գործունեության տեսակը համընկնում է "}</Tr><A><Tr>{"ԿԲ կողմից ներկայացված տեսակի կոդին"}</Tr></A><Tr>{" և չի գերազանցում տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝"}</Tr>
        </li>
      </ul>

      <Card className="dg-pos dg-pos2">
        <thead>
          <tr>
            <th><Tr>{"Գործարքի տեսակ"}</Tr></th>
            <th><Tr>{"Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում"}</Tr></th>
            <th><Tr>{"ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa քարտերի դեպքում առավելագույնը"}</Tr></th>
            <th><Tr>{"ՀՀ տարածքում գործող բանկերի կողմից թողարկված UPay քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, UPay քարտերի դեպքում"}</Tr></th>
            <th><Tr>{"QR կոդով վճարման դեպքում"}</Tr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="dg-rowh"><Tr>{"Վճարվող գումարի չափ"}</Tr></th>
            <td>max 0.5 %</td><td>max 0.9 %</td><td>1.7 %</td><td>3.0 %</td><td>1 %</td>
          </tr>
          <tr>
            <td rowSpan={3} className="dg-u"><Tr>{"50.000 ՀՀ դրամ քարտային շրջանառության շեմը չգերազանցելու դեպքում յուրաքանչյուր տերմինալից գանձվող ամսական ընդհանուր միջնորդավճարների առավելագույն սահմանաչափ (ՀՀ դրամ)"}</Tr></td>
            <td colSpan={4}><Tr>{"Ք.Երևան"}</Tr></td><td>4,600</td>
          </tr>
          <tr><td colSpan={4}><Tr>{"Մարզային քաղաքներ"}</Tr></td><td>3,000</td></tr>
          <tr><td colSpan={4}><Tr>{"Գյուղեր"}</Tr></td><td>1,000</td></tr>
          <tr><td colSpan={6} className="dg-foot"><Tr>{note}</Tr></td></tr>
        </tbody>
      </Card>

      <Bullets items={[
        'Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,',
        <><A><Tr>{"Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում"}</Tr></A><Tr>{" Բանկի մասնագետների կողմից,"}</Tr></>,
        'Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:',
      ]} />

      <ol className="dp-ol dg-ol">
        <li><Tr>{"POS տերմինալ տեղադրելու համար "}</Tr><A to="/business/digital/request"><Tr>{"լրացրեք հայտը հենց հիմա"}</Tr></A>:</li>
      </ol>
      <p className="dp-p"><Tr>{"Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:"}</Tr></p>
      <p className="dp-p"><Tr>{"Կառուցեք Ձեր ապագան Evocabank-ի հետ:"}</Tr></p>
    </DigitalPage>
  );
}

/* 3. Սակագներ */
function Provider({ title, logo, children }) {
  const { t } = useTranslation();
  return (
    <section className="dg-prov">
      <h2 className="dg-prov-h"><Tr>{title}</Tr></h2>
      <img className="dg-logo" src={logo} alt={t(title)} loading="lazy" />
      {children}
    </section>
  );
}

/* Таблица комиссий: rows = [название, [[условие, сумма], ...]] */
function FeeTable({ rows }) {
  return (
    <Card className="dg-fee">
      <tbody>
        {rows.map(([name, fees]) =>
          fees.map(([cond, fee], i) => (
            <tr key={name + i}>
              {i === 0 && <td rowSpan={fees.length} className="dg-fee-n"><Tr>{name}</Tr></td>}
              <td><Tr>{cond}</Tr></td>
              <td className="dg-fee-v"><Tr>{fee}</Tr></td>
            </tr>
          ))
        )}
      </tbody>
    </Card>
  );
}

const UP_TO_100 = 'Մինչև 100,000 դրամը ներառյալ';

export function DigitalTariffs() {
  return (
    <PlainPage
      title="Սակագներ"
      section={SECTION}
      after={<NewsBlock />}
    >
      <div className="dg">
        <p className="dp-p">
          <Tr>{"Տերմինալը փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար նախատեսված սարք է: Տերմինալների միջոցով Դուք նաև կարող եք կատարել բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար տարբերակով:"}</Tr>
        </p>
        <p className="dp-p"><Tr>{"Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել Ձեր վճարումները հետևյալ տերմինալների միջոցով."}</Tr></p>

        <Provider title="Telcell" logo={LOGO.telcell}>
          <p className="dp-p"><Tr>{"Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ:"}</Tr></p>
          <p className="dp-p"><Tr>{"Telcell համակարգը հասանելի է ինչպես Հայաստանի հանրապետության տարածքում, այնպես էլ Արցախի Հանրապետությունում: Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ "}</Tr><A><Tr>{"այստեղ"}</Tr></A>:</p>
          <p className="dp-p"><Tr>{"Evocabank-ի մասնաճյուղերում տեղադրված TelCell տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված TelCell տերմինալով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝"}</Tr></p>
          <FeeTable rows={[
            ['Հաշվի համալրում', [[UP_TO_100, '300 ՀՀ դրամ']]],
            ['Քարտային հաշվի համալրում', [[UP_TO_100, '300 ՀՀ դրամ']]],
            ['Վարկի մարում', [[UP_TO_100, '300 ՀՀ դրամ']]],
          ]} />
        </Provider>

        <Provider title="uPay" logo={LOGO.upay}>
          <p className="dp-p"><Tr>{"uPay -ի միջոցով վճարումներ կարող եք կատարել ինչպես uPay հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կենտրոններ:"}</Tr></p>
          <p className="dp-p"><Tr>{"uPay-ում վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝"}</Tr></p>
          <FeeTable rows={[
            ['Վարկերի մարում և փոխանցում բանկային հաշիվներին', [
              ['Մինչև 35,000 ՀՀ դրամի դեպքում', '200 ՀՀ դրամ'],
              ['35,001-ից ավելի ՀՀ դրամի դեպքում', '0.6%, բայց ոչ ավել 1200 ՀՀ դրամ'],
            ]],
          ]} />
        </Provider>

        <Provider title="ՄոբիԴրամ" logo={LOGO.mobidram}>
          <p className="dp-p"><Tr>{"Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ "}</Tr><A><Tr>{"այստեղ"}</Tr></A>:</p>
          <p className="dp-p"><Tr>{"ՄոբիԴրամի տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝"}</Tr></p>
          <FeeTable rows={[
            ['Վարկի մարում', [
              ['Մինչև 50,000 դրամի դեպքում', '200 ՀՀ դրամ'],
              ['50,001 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ'],
            ]],
            ['Բանկային հաշիվների/քարտերի համալրում', [
              ['Մինչև 50,000 դրամի դեպքում', '200 ՀՀ դրամ'],
              ['50,001 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ'],
            ]],
          ]} />
        </Provider>

        <Provider title="iDram" logo={LOGO.idram}>
          <p className="dp-p"><Tr>{"Idram հավելվածով կարող եք կատարել գործարքներ հետևյալ միջնորդավճարներով՝"}</Tr></p>
          <FeeTable rows={[
            ['Վարկի մարում', [
              ['մինչև 15,000 դրամի դեպքում', '100 ՀՀ դրամ'],
              ['15,001 - 50,000 դրամի դեպքում', '200 ՀՀ դրամ'],
              ['50,001 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ'],
            ]],
          ]} />
        </Provider>

        <Provider title="EasyPay" logo={LOGO.easypay}>
          <p className="dp-p"><Tr>{"2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող եք ծանոթանալ "}</Tr><A><Tr>{"այստեղ"}</Tr></A>:</p>
          <p className="dp-p"><Tr>{"Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝"}</Tr></p>
          <FeeTable rows={[
            ['Հաշվի համալրում', [['1,000 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)']]],
            ['Քարտային հաշվի համալրում', [['1,000 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)']]],
            ['Վարկի մարում', [['1,000 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ']]],
          ]} />
        </Provider>
      </div>
    </PlainPage>
  );
}

/* 4. Տերմինալի տեղադրման հայտ */
const LEGAL_FORMS = ['ԱԸ', 'ՍՊԸ', 'ՓԲԸ', 'ԲԲԸ', 'Այլ'];
const TERMINALS = ['POS', 'ՀԴՄ POS', 'V-POS', 'M-POS'];

function Field({ label, req, hint, children }) {
  return (
    <div className="dg-field">
      {label && <label className="dg-label"><Tr>{label}</Tr>{req && <span className="dg-req"> *</span>}</label>}
      {children}
      {hint && <small className="dg-hint"><Tr>{hint}</Tr></small>}
    </div>
  );
}

const Input = (p) => <input className="dg-input" {...p} />;
const Area = (p) => <textarea className="dg-input dg-area" rows={3} {...p} />;

function Radios({ name, options, required }) {
  return (
    <div className="dg-radios">
      {options.map((o, i) => (
        <label key={o} className="dg-radio">
          <input type="radio" name={name} value={o} required={required && i === 0} />
          <span className="dg-dot" /> <Tr>{o}</Tr>
        </label>
      ))}
    </div>
  );
}


export function MPos() {
  return (
    <DigitalPage
      crumb="Evoca Mobile POS՝ mPOS"
      updated="04/10/2024 12:10"
      hero={{
        title: 'Evoca Mobile POS՝ mPOS',
        img: MPOS_HERO,
        text: 'Evocabank-ի նոր mobile POS՝ mPOS գործիքի շնորհիվ Ձեր բիզնեսը կարող է ստանալ անկանխիկ վճարումներ՝ ավելի հեշտ ու արագ:',
      }}
    >
      <p className="dp-p dg-tight">
        <a className="dp-link dg-b" href="#">mPOS</a><Tr>{"-ը ստանդարտ POS տերմինալի մոբայլ տարբերակն է, որը ցանկացած Android սմարթֆոն վերածում է վճարային տերմինալի:"}</Tr><br />
        <Tr>{"mPOS-ը հատկապես հարմար է շարժական բիզնեսով զբաղվողների համար՝ բացօթյա խանութներ, սրճարաններ, միջոցառումների ընթացքում սննդի վաճառքի կետեր, օնլայն խանութներ, առաքման ծառայություններ, կամ ցանկացած այլ բիզնես, որը հաճախորդից վճարումն ընդունում է բիզնեսի տարածքից դուրս:"}</Tr><br />
        <Tr>{"mPOS-ն ակտիվացնելու համար բիզնեսին պարզապես անհրաժեշտ է "}</Tr><A><Tr>{"NFC ընթերցող Android սմարթֆոն"}</Tr></A><Tr>{", որը միացված է ինտերնետին, և "}</Tr><A><Tr>{"Evoca-ի mPOS հավելվածը"}</Tr></A><Tr>{": Այն կարող եք ներբեռնել Google Play-ից՝ Android 8.1 կամ ավելի թարմ ծրագրային ապահովման դեպքում:"}</Tr><br />
        <Tr>{"Հավելվածը ներբեռնելուց հետո պետք է մուտք գործել հավելված՝ Բանկի տրամադրած մուտքանունով և գաղտնաբառով: Եվ վերջ: Դուք արդեն կարող եք Ձեր հաճախորդներից ստանալ անհպում վճարումներ: Վճարում կատարելու համար հաճախորդը պարզապես մոտեցնում է Ձեր սմարթֆոնին իր քարտը կամ Apple Pay ունեցող հեռախոսը, որին կցված է Evoca վճարային քարտ:"}</Tr>
      </p>
    </DigitalPage>
  );
}

export function TerminalRequest() {
  const [sent, setSent] = useState(false);

  return (
    <PlainPage title="Տերմինալի տեղադրման հայտ" section={SECTION}>
      <div className="dg">
        <div className="dg-formwrap">
          {sent ? (
            <div className="dg-thanks">
              <h3><Tr>{"Շնորհակալություն:"}</Tr></h3>
              <p><Tr>{"Ձեր հայտն ընդունված է: Մեր մասնագետը շուտով կապ կհաստատի Ձեզ հետ:"}</Tr></p>
              <button type="button" className="dg-submit" onClick={() => setSent(false)}><Tr>{"Նոր հայտ"}</Tr></button>
            </div>
          ) : (
            <form className="dg-form" onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <h3 className="dg-form-h"><Tr>{"V-POS, POS կամ mPOS տերմինալի տեղադրման հայտ"}</Tr></h3>

              <Field label="Անուն Ազգանուն">
                <div className="dg-row2">
                  <div><Input name="firstName" /><small className="dg-hint"><Tr>{"Անուն"}</Tr></small></div>
                  <div><Input name="lastName" /><small className="dg-hint"><Tr>{"Ազգանուն"}</Tr></small></div>
                </div>
              </Field>

              <Field label="Հեռախոսի համար">
                <div className="dg-phone">
                  <span className="dg-pre"><i className="dg-flag" /> +374 <b>▾</b></span>
                  <Input name="phone" type="tel" inputMode="tel" />
                </div>
              </Field>

              <Field label="Կազմակերպության անվանում" req><Input name="org" required /></Field>
              <Field label="ՀՎՀՀ" req><Input name="tin" required /></Field>
              <Field label="Կազմակերպության ստեղծման ամսաթիվ օր/ամիս/տարի" req hint="dd-MMM-yyyy">
                <Input name="orgDate" type="date" required className="dg-input dg-date" />
              </Field>

              <Field label="Իրավաբանական հասցե" hint="Փողոցի անուն, տան համար, բնակարանի համար">
                <Input name="street" />
              </Field>
              <div className="dg-row2 dg-row2-in">
                <Field hint="Մարզ"><Input name="region" /></Field>
                <Field hint="Քաղաք"><Input name="city" /></Field>
              </div>
              <div className="dg-row2 dg-row2-in">
                <Field hint="Փոստային ինդեքս"><Input name="zip" /></Field>
              </div>

              <Field label="Տնօրենի Անուն Ազգանուն">
                <div className="dg-row2">
                  <div><Input name="dirFirst" /><small className="dg-hint"><Tr>{"Անուն"}</Tr></small></div>
                  <div><Input name="dirLast" /><small className="dg-hint"><Tr>{"Ազգանուն"}</Tr></small></div>
                </div>
              </Field>
              <Field label="Տնօրենի անձնագրի համարը" req><Input name="passport" required /></Field>
              <Field label="Անձնագրի տրման ամսաթիվը" req hint="dd-MMM-yyyy">
                <Input name="passportDate" type="date" required className="dg-input dg-date" />
              </Field>
              <Field label="Ում կողմից է տրված" req><Input name="passportBy" required /></Field>

              <Field label="Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները" req><Input name="contactPhones" required /></Field>
              <Field label="Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն"><Input name="contactEmail" type="email" /></Field>

              <Field label="Կազմակերպության իրավական ձևը" req><Radios name="legalForm" options={LEGAL_FORMS} required /></Field>
              <Field label="Պահանջվող տերմինալի ձևը" req><Radios name="terminal" options={TERMINALS} required /></Field>

              <Field label="Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն)" req><Area name="pointName" required /></Field>
              <Field label="Առևտրային և սպասարկման կետի հասցե"><Area name="pointAddr" /></Field>
              <Field label="Ինտերնետային կայքի անվանում (V-POS-ի դեպքում)"><Input name="site" /></Field>
              <Field label="Վերջին տարվա, ամսվա միջին շրջանառությունը ՀՀ դրամով"><Input name="turnover" inputMode="numeric" /></Field>
              <Field label="Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը" req><Area name="goods" required /></Field>
              <Field label="Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով: Եթե այո, խնդրում ենք նշել նաև սպասարկող կազմակերպության անվանումը և վերջինիս հետ պայմանագիրը խզելու պատճառները:"><Area name="prev" /></Field>
              <Field label="Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով" req><Input name="forecast" required inputMode="numeric" /></Field>
              <Field label="Նշումների համար"><Area name="notes" /></Field>

              <label className="dg-agree">
                <input type="checkbox" required />
                <span><Tr>{"Սույն հայտը լրացնելով՝ հավաստում եմ, որ դրանում ներկայացված տվյալները ստույգ են, լրիվ և արժանահավատ: Տալիս եմ իմ համաձայնությունը, որպեսզի Բանկը ստուգի դրանց իսկությունը:"}</Tr></span>
              </label>

              <button type="submit" className="dg-submit"><Tr>{"Ուղարկել"}</Tr></button>
            </form>

            
          )}
          
        </div>
      </div>
    </PlainPage>
  );
}
