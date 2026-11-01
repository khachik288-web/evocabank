import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { NEWS } from './newsData';
import './AboutPages.css';

// Страницы раздела «Մեր մասին → Evoca-ի մասին»:
//   /about/partners, /about/awards, /about/csr, /about/financial-group
// Тексты — по-армянски (ключи i18n), переводы лежат в i18n.js.

/* ---------- общие куски ---------- */
function Crumbs({ current }) {
  const { t } = useTranslation();
  return (
    <nav className="ap-crumbs">
      <Link to="/" aria-label="Home"><Home size={14} /></Link>
      <ChevronRight size={11} />
      <Link to="/about">{t('Մեր մասին')}</Link>
      <ChevronRight size={11} />
      <Link to="/about">{t('Evoca-ի մասին')}</Link>
      <ChevronRight size={11} />
      <span>{t(current)}</span>
    </nav>
  );
}

function ShareRail() {
  const url = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  return (
    <aside className="ap-share">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={13} /></a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={15} /></a>
      <a href="https://www.instagram.com/evocabank/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={15} /></a>
    </aside>
  );
}

function Updated({ date }) {
  const { t } = useTranslation();
  return <div className="ap-updated">{t('Թարմացվել է՝')} {date}</div>;
}

function Rich({ text }) {
  return text.split('**').map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>));
}

/* =====================================================
   ԳՈՐԾԸՆԿԵՐՆԵՐ — сетка 3×3 с логотипами
   ===================================================== */
const PARTNER_IMG = (id) => `https://www.evoca.am/images-cache/partners/1/${id}/348x150_grayscale.png`;
const HAND = 'https://www.evoca.am/img/partners-hand.png';
const PARTNERS = [
  { name: 'Chip Store', img: PARTNER_IMG('17104032198171') },
  { name: 'Fab Lab Armenia', img: PARTNER_IMG('17077436606929') },
  { name: 'International Marketing Research', img: PARTNER_IMG('17107493820339') },
  { name: 'Dignisi', img: PARTNER_IMG('17072192942611') },
  { name: '', img: HAND, hand: true },
  { name: 'Wizzy Kids Business Club', img: PARTNER_IMG('17072192635138') },
  { name: 'Kamoblog', img: PARTNER_IMG('17072192435541') },
  { name: 'Dalma Garden Mall', img: PARTNER_IMG('16104577054001') },
  { name: 'Նոր Տուն', img: PARTNER_IMG('16104583322099') },
];

export function Partners() {
  const { t } = useTranslation();
  return (
    <main className="ap-page">
      <div className="ap-wrap">
        <Crumbs current="Գործընկերներ" />
        <h1 className="ap-title">{t('Գործընկերներ')}</h1>
        <div className="ap-partners">
          {PARTNERS.map((p, i) => (
            <div key={i} className={`ap-partner${p.hand ? ' is-hand' : ''}`}>
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* =====================================================
   ՄՐՑԱՆԱԿՆԵՐ — карточки наград
   ===================================================== */
const AWARD_IMG = (id, ext = 'png') => `https://www.evoca.am/images-cache/awards/1/${id}/140x65.${ext}`;
const AWARDS = [
  { year: 2026, title: 'Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման', org: 'AMX', logo: AWARD_IMG('17823898849383') },
  { year: 2026, title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', org: 'The Digital Banker', logo: AWARD_IMG('17793449348871') },
  { year: 2026, title: 'Excellence in Travel Segment Innovation', org: 'Mastercard', logo: AWARD_IMG('17793444931672') },
  { year: 2025, title: 'Best AI-Powered Mobile App', org: 'The Digital Banker', logo: AWARD_IMG('17701876298505') },
  { year: 2025, title: 'Highest Cashless Achievement', org: 'Visa International', logo: AWARD_IMG('17696923392309') },
  { year: 2025, title: 'Լավագույն թվային բանկը Հայաստանում 2025', org: 'Global Finance', logo: AWARD_IMG('17635322442852') },
  { year: 2025, title: 'Ամենանորարար ՓՄՁ վարկավորման գործընկերը ՀՀ-ում', org: 'International Finance Magazine', logo: AWARD_IMG('17574258664115', 'jpg') },
  { year: 2025, title: 'Լավագույն Բանկը Հայաստանում 2025', org: 'International Investor Magazine', logo: AWARD_IMG('17383050368673') },
  { year: 2025, title: 'Best Mobile Banking in Armenia', org: 'Global Business & Finance Magazine', logo: AWARD_IMG('1751877049822') },
  { year: 2025, title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', org: 'The Digital Banker', logo: AWARD_IMG('17518766542368', 'jpg') },
];

export function Awards() {
  const { t, i18n } = useTranslation();
  const yearLabel = (y) => (i18n.language === 'hy' ? `${y} թ.` : i18n.language === 'ru' ? `${y} г.` : `${y}`);
  return (
    <main className="ap-page ap-page--awards">
      <div className="ap-wrap">
        <Crumbs current="Մրցանակներ" />
        <h1 className="ap-title">{t('Մրցանակներ')}</h1>
      </div>
      <section className="ap-awards">
        <i className="ap-deco ap-deco-wreath" aria-hidden="true" />
        <i className="ap-deco ap-deco-tri" aria-hidden="true" />
        <i className="ap-deco ap-deco-zig" aria-hidden="true" />
        <i className="ap-deco ap-deco-dot" aria-hidden="true" />
        <div className="ap-awards-grid">
          {AWARDS.map((a, i) => (
            <article key={i} className="ap-award">
              <div className="ap-award-year">{yearLabel(a.year)}</div>
              <h3 className="ap-award-title">{t(a.title)}</h3>
              <div className="ap-award-foot">
                <span>{a.org}</span>
                <img src={a.logo} alt={a.org} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   CSR
   ===================================================== */
const CSR_IMG = 'https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png';
const CSR_LIST = [
  'Նորագույն տեխնոլոգիաների զարգացում,',
  'Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,',
  'Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,',
  'Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:',
];
// CSR-новости берутся из newsData.js (csrchess, csrcanal, csrmusic) — клик ведёт на /news/<id>.
// ВНИМАНИЕ: картинки этих трёх новостей в newsData.js временные — замени на реальные.
const CSR_IDS = ['csrchess', 'csrcanal', 'csrmusic'];
const CSR_NEWS = CSR_IDS.map((id) => ({ id, ...NEWS[id] }));

export function Csr() {
  const { t } = useTranslation();
  return (
    <main className="ap-page">
      <div className="ap-wrap">
        <Crumbs current="CSR" />

        <section className="ap-hero">
          <div className="ap-hero-text">
            <h1>{t('Կորպորատիվ Սոցիալական Պատասխանատվություն')}</h1>
            <p>{t('Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:')}</p>
          </div>
          <div className="ap-hero-img"><img src={CSR_IMG} alt={t('Կորպորատիվ Սոցիալական Պատասխանատվություն')} /></div>
        </section>

        <div className="ap-article">
          <ShareRail />
          <div className="ap-text">
            <p><Rich text={t('**Evocabank**-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում: Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում`')} /></p>
            <ul className="ap-bullets">
              {CSR_LIST.map((x) => <li key={x}>{t(x)}</li>)}
            </ul>
            <p>{t('Մեր բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվության ուղղված յուրաքանչյուր փոքրիկ քայլ վկայում է աշխարհն ավելի լուսավոր ու գեղեցիկ դարձնելու կարողության մասին:')}</p>
          </div>
        </div>
      </div>

      <section className="ap-latest">
        <div className="ap-wrap">
          <div className="ap-latest-head">
            <h2>{t('Վերջին նորությունները')}</h2>
            <Link to="/news" className="ap-pill">{t('Բոլոր նորությունները')} <ChevronRight size={14} /></Link>
          </div>
          <div className="ap-latest-grid">
            {CSR_NEWS.map((n) => (
              <Link to={`/news/${n.id}`} key={n.id} className="ap-news">
                <img src={n.img} alt={t(n.title)} loading="lazy" />
                <div className="ap-news-body">
                  <div className="ap-news-cat"><i />CSR</div>
                  <h3>{t(n.title)}</h3>
                  <time>{n.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Updated date="18/08/2026 10:20" />
    </main>
  );
}

/* =====================================================
   ԷՎՈԿԱ ՖԻՆԱՆՍԱԿԱՆ ԽՈՒՄԲ
   ===================================================== */
const GROUP_IMG = 'https://www.evoca.am/file_manager/Evoca%20financial%20group/%C2%AB%D4%B7%D5%8E%D5%88%D4%BF%D4%B1%C2%BB%20%D6%86%D5%AB%D5%B6%D5%A1%D5%B6%D5%BD%D5%A1%D5%AF%D5%A1%D5%B6%20%D5%AD%D5%B8%D6%82%D5%B4%D5%A2%20Armenian.png';

export function FinancialGroup() {
  const { t } = useTranslation();
  return (
    <main className="ap-page">
      <div className="ap-wrap">
        <Crumbs current="Էվոկա ֆինանսական խումբ" />
        <h1 className="ap-title ap-title--soft">{t('Էվոկա ֆինանսական խումբ')}</h1>

        <div className="ap-article">
          <ShareRail />
          <div className="ap-text">
            <p><Rich text={t('ՀՀ կենտրոնական բանկի խորհրդի 30.06.2025թ. թիվ 05 ԲԳ Ա որոշմամբ **Evocabank**-ը («ԷՎՈԿԱԲԱՆԿ» ԲԲԸ) և **Wilco**-ն («Վիլկո» ՍՊԸ) միավորվում են դառնալով մեկ ֆինանսական խումբ՝ **Evoca** անվամբ:')} /></p>
            <p><Rich text={t('**Evocabank**-ը նշանակվել է **Evoca** ֆինանսական խմբի պատասխանատու անձ:')} /></p>
            <p>
              <Rich text={t('**Wilco** կապիտալի կառավարման ընկերության մասին ամբողջական տեղեկատվությունը՝')} />{' '}
              <a href="https://wilco.am" target="_blank" rel="noreferrer" className="ap-link"><b>{t('այստեղ')}</b></a>:
            </p>
          </div>
        </div>

        <div className="ap-group-img">
          <img src={GROUP_IMG} alt={t('Էվոկա ֆինանսական խումբ')} loading="lazy" />
        </div>
      </div>
      <Updated date="07/09/2026 14:43" />
    </main>
  );
}