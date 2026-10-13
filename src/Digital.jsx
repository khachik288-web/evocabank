import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
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
  <ul className="dp-list dg-list">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>
);

const PurpleH = ({ children }) => <h3 className="dp-ph dg-ph">{children}</h3>;

/* Hero: серый блок слева + картинка справа; если картинки нет — фиолетовая заглушка */
function DigitalHero({ title, text, img }) {
  return (
    <section className="dp-hero dg-hero">
      <div className="dp-hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <div className="dg-hero-ph" role="img" aria-label={title}><Smartphone size={96} strokeWidth={1.2} /></div>
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
      {updated && <p className="dp-updated">Թարմացվել է՝ {updated}</p>}
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
        Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն հնարավորություն կտա Ձեզ <A>խուսափել լրացուցիչ ծրագրային ծախսերից</A>, սերտիֆիկացումից և հետագա ծրագրային ապահովումից:
      </p>
      <p className="dp-p">
        Ձեր գնորդները կկարողանան <A>գնումներ կատարել Ձեր կայքից</A> ու <A>վճարել</A> դրանց համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով:
      </p>
      <p className="dp-p">V-POS-ը հասանելի կլինի ինչպես <A>Ձեր կայքում</A>, այնպես էլ՝ <A>մոբայլ հավելվածում</A>:</p>

      <p className="dp-p">Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝</p>
      <Bullets items={[
        <>Օնլայն վաճառքների շնորհիվ <A>կաճեն Ձեր եկամուտները</A>,</>,
        <>Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի <A>նվազագույն միջնորդավճարներ</A>՝ հատուկ Ձեր բիզնեսի համար,<br />Սպասարկման կետի գրանցման համար անհրաժեշտ <A>V-POS</A> տերմինալների տեղադրման ստանդարտ սակագներն են՝</>,
      ]} />

      <Card className="dg-vpos">
        <thead>
          <tr>
            <th>Գործարքի տեսակ</th>
            <th>Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
            <th>ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում</th>
            <th>Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում</th>
            <th>QR կոդով վճարման դեպքում</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Վճարվող գումարի չափ<Sup n={1} /></td>
            <td>1.50%</td><td>1.90%</td><td>3.00%</td><td>1%</td>
          </tr>
          <tr>
            <td colSpan={3}>200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող շրջանառության պարագայում</td>
            <td colSpan={2}>3000<Sup n={2} /></td>
          </tr>
          <tr>
            <td colSpan={3}>Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում</td>
            <td colSpan={2}>20000<Sup n={3} /></td>
          </tr>
        </tbody>
      </Card>

      <ul className="dg-notes">
        <li><Sup n={1} /> Կախված ոլորտի առանձնահատկություններից և շրջանառությունից՝ սակագները կարող են փոփոխվել</li>
        <li><Sup n={2} /> Ներառյալ կիրառելի բոլոր հարկերը</li>
        <li><Sup n={3} /> Ներառյալ կիրառելի բոլոր հարկերը</li>
      </ul>

      <Bullets items={[
        <>Վճարումներն անվտանգ են, գործում են <A>3D Secure Code</A> անվտանգության համակարգերը,</>,
        'Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,',
        <><A>Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում</A> Բանկի մասնագետների կողմից,</>,
        'Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:',
      ]} />

      <p className="dp-p">V-POS տերմինալ տեղադրելու համար լրացրեք <A to="/business/digital/request">Տերմինալի տեղադրման հայտը</A> հիմա:</p>
      <ol className="dp-ol dg-ol">
        <li>Մեր մասնագետը 3 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:</li>
        <li>Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում:</li>
      </ol>

      <p className="dp-p">Կառուցեք Ձեր բիզնեսի թվային ապագան:</p>
      <p className="dp-p">Evocabank-ում այսուհետ գործում են բիզնես վարկ և բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա:</p>

      <div className="dg-pic"><img src={VPOS_PICTURE} alt="Evocabank POS" loading="lazy" /></div>

      <PurpleH>Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա</PurpleH>
      <p className="dp-p">
        Եթե ունեք փոքր և միջին բիզնես ու իրականացնում եք անկանխիկ գործարքներ, ապա այս բիզնես վարկը Ձեզ համար է: Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար:
      </p>
      <p className="dp-p">Վարկի համար կարող են դիմել՝</p>
      <Bullets items={[
        'ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս',
        'Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր',
      ]} />
      <p className="dp-p">Որպես վարկի ապահովության միջոց կարող են հանդիսանալ՝</p>
      <Bullets items={[
        'POS տերմինալի շրջանառություն',
        'Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն',
      ]} />
      <p className="dp-p">Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես հաջողությունները:</p>
      <p className="dp-p">Վարկի պայմանների կարող եք ծանոթանալ <A>այստեղ</A>:</p>

      <PurpleH>Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա</PurpleH>
      <p className="dp-p">
        Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ՝ առանց ավելորդ թղթաբանության և ժամանակի կորստի: Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվերդրաֆտ:
      </p>
      <p className="dp-p">Վարկի համար կարող են դիմել՝</p>
      <Bullets items={[
        'ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս',
        'Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր',
      ]} />
      <p className="dp-p">Օվերդրաֆտի պայմաններին կարող եք ծանոթանալ <A>այստեղ</A>:</p>
      <p className="dp-p">Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ <Link className="dp-link" to="/business">այստեղ</Link>:</p>
      <p className="dp-p">Հարցերի դեպքում մեր թիմի հետ կարող եք կապ հաստատել հետևյալ <A>հղումով</A>:</p>
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
        Ձեր գնորդները կկարողանան <A>գնումներ կատարել</A> իրենց միջազգային VISA, Mastercard և տեղական ArCa <A>վճարային քարտերով</A>:
      </p>
      <p className="dp-p">POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ <A>մոբայլ հավելվածում</A>:</p>
      <p className="dp-p">Իսկ ինչո՞ւ տեղադրել Evocabank-ի POS տերմինալ՝</p>

      <Bullets items={[
        <>Evocabank-ը POS-ով կատարված վաճառքներից կգանձի <A>նվազագույն միջնորդավճարներ</A>՝ հատուկ Ձեր բիզնեսի համար,<br />Սպասարկման կետի գրանցման համար անհրաժեշտ <A>POS, ՀԴՄ-POS, mPOS, VENDISTA</A> տերմինալների տեղադրման <A>ստանդարտ սակագներ ու պայմաններ</A>:</>,
      ]} />

      <ul className="dg-dash">
        <li>
          Եթե վաճառակետի գործունեության տեսակը չի համընկնում <A>ԿԲ կողմից ներկայացված տեսակի կոդին</A> կամ գերազանցում է տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝
        </li>
      </ul>

      <Card className="dg-pos">
        <thead>
          <tr>
            <th>Գործարքի տեսակ</th>
            <th>Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
            <th>Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
            <th>Ոչ Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
            <th>QR կոդով վճարման դեպքում</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="dg-rowh">Վճարվող գումարի չափ</th>
            <td>1.5 %</td><td>1.7 %</td><td>3.0 %</td><td>1 %</td>
          </tr>
          <tr>
            <td rowSpan={3} className="dg-u">Յուրաքանչյուր տերմինալից գանձվող ամսական միջնորդավճարի նվազագույն չափ (ՀՀ դրամ)</td>
            <td colSpan={3}>Բանկի կողմից տրամադրված POS տերմինալ</td><td>10,000</td>
          </tr>
          <tr><td colSpan={3}>Բանկի կողմից տրամադրված ՀԴՄ-POS</td><td>7,000</td></tr>
          <tr><td colSpan={3}>Տնտեսվարողի ՀԴՄ-POS տերմինալ</td><td>3,000</td></tr>
          <tr><td colSpan={5} className="dg-foot">{note}</td></tr>
        </tbody>
      </Card>

      <ul className="dg-dash">
        <li>
          Եթե վաճառակետի գործունեության տեսակը համընկնում է <A>ԿԲ կողմից ներկայացված տեսակի կոդին</A> և չի գերազանցում տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝
        </li>
      </ul>

      <Card className="dg-pos dg-pos2">
        <thead>
          <tr>
            <th>Գործարքի տեսակ</th>
            <th>Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
            <th>ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa քարտերի դեպքում առավելագույնը</th>
            <th>ՀՀ տարածքում գործող բանկերի կողմից թողարկված UPay քարտերի դեպքում</th>
            <th>Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
            <th>QR կոդով վճարման դեպքում</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="dg-rowh">Վճարվող գումարի չափ</th>
            <td>max 0.5 %</td><td>max 0.9 %</td><td>1.7 %</td><td>3.0 %</td><td>1 %</td>
          </tr>
          <tr>
            <td rowSpan={3} className="dg-u">50.000 ՀՀ դրամ քարտային շրջանառության շեմը չգերազանցելու դեպքում յուրաքանչյուր տերմինալից գանձվող ամսական ընդհանուր միջնորդավճարների առավելագույն սահմանաչափ (ՀՀ դրամ)</td>
            <td colSpan={4}>Ք.Երևան</td><td>4,600</td>
          </tr>
          <tr><td colSpan={4}>Մարզային քաղաքներ</td><td>3,000</td></tr>
          <tr><td colSpan={4}>Գյուղեր</td><td>1,000</td></tr>
          <tr><td colSpan={6} className="dg-foot">{note}</td></tr>
        </tbody>
      </Card>

      <Bullets items={[
        'Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,',
        <><A>Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում</A> Բանկի մասնագետների կողմից,</>,
        'Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:',
      ]} />

      <ol className="dp-ol dg-ol">
        <li>POS տերմինալ տեղադրելու համար <A to="/business/digital/request">լրացրեք հայտը հենց հիմա</A>:</li>
      </ol>
      <p className="dp-p">Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:</p>
      <p className="dp-p">Կառուցեք Ձեր ապագան Evocabank-ի հետ:</p>
    </DigitalPage>
  );
}

/* 3. Սակագներ */
function Provider({ title, logo, children }) {
  return (
    <section className="dg-prov">
      <h2 className="dg-prov-h">{title}</h2>
      <img className="dg-logo" src={logo} alt={title} loading="lazy" />
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
              {i === 0 && <td rowSpan={fees.length} className="dg-fee-n">{name}</td>}
              <td>{cond}</td>
              <td className="dg-fee-v">{fee}</td>
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
          Տերմինալը փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար նախատեսված սարք է: Տերմինալների միջոցով Դուք նաև կարող եք կատարել բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար տարբերակով:
        </p>
        <p className="dp-p">Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել Ձեր վճարումները հետևյալ տերմինալների միջոցով.</p>

        <Provider title="Telcell" logo={LOGO.telcell}>
          <p className="dp-p">Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ:</p>
          <p className="dp-p">Telcell համակարգը հասանելի է ինչպես Հայաստանի հանրապետության տարածքում, այնպես էլ Արցախի Հանրապետությունում: Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ <A>այստեղ</A>:</p>
          <p className="dp-p">Evocabank-ի մասնաճյուղերում տեղադրված TelCell տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված TelCell տերմինալով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝</p>
          <FeeTable rows={[
            ['Հաշվի համալրում', [[UP_TO_100, '300 ՀՀ դրամ']]],
            ['Քարտային հաշվի համալրում', [[UP_TO_100, '300 ՀՀ դրամ']]],
            ['Վարկի մարում', [[UP_TO_100, '300 ՀՀ դրամ']]],
          ]} />
        </Provider>

        <Provider title="uPay" logo={LOGO.upay}>
          <p className="dp-p">uPay -ի միջոցով վճարումներ կարող եք կատարել ինչպես uPay հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կենտրոններ:</p>
          <p className="dp-p">uPay-ում վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝</p>
          <FeeTable rows={[
            ['Վարկերի մարում և փոխանցում բանկային հաշիվներին', [
              ['Մինչև 35,000 ՀՀ դրամի դեպքում', '200 ՀՀ դրամ'],
              ['35,001-ից ավելի ՀՀ դրամի դեպքում', '0.6%, բայց ոչ ավել 1200 ՀՀ դրամ'],
            ]],
          ]} />
        </Provider>

        <Provider title="ՄոբիԴրամ" logo={LOGO.mobidram}>
          <p className="dp-p">Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ <A>այստեղ</A>:</p>
          <p className="dp-p">ՄոբիԴրամի տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝</p>
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
          <p className="dp-p">Idram հավելվածով կարող եք կատարել գործարքներ հետևյալ միջնորդավճարներով՝</p>
          <FeeTable rows={[
            ['Վարկի մարում', [
              ['մինչև 15,000 դրամի դեպքում', '100 ՀՀ դրամ'],
              ['15,001 - 50,000 դրամի դեպքում', '200 ՀՀ դրամ'],
              ['50,001 - 100,000 դրամի դեպքում', '300 ՀՀ դրամ'],
            ]],
          ]} />
        </Provider>

        <Provider title="EasyPay" logo={LOGO.easypay}>
          <p className="dp-p">2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող եք ծանոթանալ <A>այստեղ</A>:</p>
          <p className="dp-p">Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝</p>
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
