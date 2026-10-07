import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Home, Search, Info, CreditCard, Globe } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FloatingActions } from './Loans';
import './Benefits.css';

const U = (id) => `https://www.evoca.am/images-cache/landing_benefits/1/${id}/304x140.png`;
const BANNER_IMG = 'https://www.evoca.am/img/temp/benefits/card-white_1.png';

// Партнёры: benefit — 'Զեղչ' | 'Cashback'
const PARTNERS = [
  { img: U('17883543964959'), discount: '10%', title: 'CEMI Café by Apicius Armenia', sector: 'Սրճարաններ', benefit: 'Զեղչ', socials: ['instagram'] },
  { img: U('17883546922591'), discount: '10%', title: 'ppls Dilijan', sector: 'Հանգիստ', benefit: 'Զեղչ', socials: ['facebook', 'instagram', 'globe'] },
  { img: U('17883548008353'), discount: '10%', title: 'Villa3 Community Hub', sector: 'Հանգիստ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737342206664'), discount: '15%', title: 'Chronograph', sector: 'Ակսեսուարներ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737344773161'), discount: '10%', title: 'Paul Armenia', sector: 'Սրճարաններ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('1773734536707'), discount: '10%', note: '10%-ից ավելի վերև', title: 'Swarovski', sector: 'Ակսեսուարներ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737343677733'), discount: '15%', title: 'Henderson', sector: 'Նորաոճություն', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737342611081'), discount: '5%', title: 'Pullman', sector: 'Ինտերիեր', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737344282891'), discount: '10%', title: 'Burmunk', sector: 'Ակսեսուարներ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737342267694'), discount: '20%', title: 'Seven Visions Resort & Places, The Dvin', sector: 'Սրճարաններ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737342096146'), discount: '20%', title: 'Body & Soul Fitness Center', sector: 'Սպորտ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737345099854'), discount: '10-15%', title: 'TIME', sector: 'Ակսեսուարներ', benefit: 'Զեղչ', socials: ['facebook', 'instagram'] },
  { img: U('17737345009308'), discount: '10-16%', cashback: true, title: 'Mayrig', sector: 'Սրճարաններ', benefit: 'Cashback', socials: ['facebook', 'instagram'] },
  { img: U('17737317337643'), discount: '10-20%', cashback: true, title: '4u.am', sector: 'Նվերներ', benefit: 'Cashback', socials: ['facebook', 'instagram', 'globe'] },
  { img: U('17737344859315'), discount: '3.5%', cashback: true, title: 'Ashley home', sector: 'Ինտերիեր', benefit: 'Cashback', socials: ['facebook', 'instagram', 'globe'] },
];

const INITIAL_COUNT = 9;

const FILTERS = [
  {
    key: 'cards', title: 'Քարտատեսակ',
    items: [['Visa Infinite', 115], ['Evoca Visa Platinum', 90], ['Evoca Travel Card', 105], ['Wilco Visa Infinite', 7], ['Visa Vision', 91], ['Mastercard Gold', 99], ['Visa Gold', 99], ['Mastercard Standard', 91], ['Visa Classic', 91], ['Mastercard World Digital', 91], ['Visa Digital', 91]],
  },
  {
    key: 'place', title: 'Վայր',
    items: [['Հայաստան', 115], ['Արտերկիր', 1]],
  },
  {
    key: 'benefit', title: 'Բենեֆիթ',
    items: [['Cashback', 12], ['Զեղչ', 99], ['Նվեր-քարտ', 3]],
  },
  {
    key: 'sector', title: 'Ոլորտ',
    items: [['Սրճարաններ', 29], ['Նվերներ', 4], ['Ինտերիեր', 11], ['Կենսակերպ', 7], ['Տեխնիկա', 1], ['Նորաոճություն', 20], ['Առողջություն', 5], ['Գեղեցկություն', 8], ['Սպորտ', 9], ['Ակսեսուարներ', 14], ['Հանգիստ', 8]],
  },
  {
    key: 'mode', title: 'Շարժական',
    items: [['Օնլայն', 10], ['Օֆլայն', 110]],
  },
];

const FAQ = [
  { q: 'Ի՞նչ է Evoca Benefits-ը:', a: 'Evoca Benefits-ը նոր նախագիծ է, որի շրջանակում Evoca բոլոր քարտապանները ստանում են բենեֆիթներ՝ զեղչեր, քեշբեքներ կամ այլ առավելություններ 100-ից ավել գործընկերների մոտ պարզապես վճարելով իրենց Evoca քարտերով:' },
  { q: 'Ի՞նչ բենեֆիթներից կարող եմ օգտվել Բանկի քարտապանները:' },
  { q: 'Ի՞նչպես օգտվել բենեֆիթներից:' },
  { q: 'Ո՞վքեր կարող են օգտվել Evoca բենեֆիթներից:' },
  { q: 'Եթե ունեմ գործընկերների մոտ առանձին գործող զեղչեր, Evoca բենեֆիթները կգործո՞ւմ:' },
  { q: 'Evocabank-ի ո՞ր քարտերով ունեմ բենեֆիթներ:' },
  { q: 'Ի՞նչպե՞ս պատվիրել Evoca քարտ:' },
  { q: 'Ի՞նչպե՞ս կարող եմ իմ բիզնեսը միանալ Evoca Benefits ծրագրին:' },
];

function Socials({ items }) {
  return (
    <span className="ben-card-socials">
      {items.includes('facebook') && <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><FaFacebookF size={14} /></a>}
      {items.includes('instagram') && <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><FaInstagram size={15} /></a>}
      {items.includes('globe') && <a href="#" aria-label="Website" onClick={(e) => e.preventDefault()}><Globe size={15} /></a>}
    </span>
  );
}

function PartnerCard({ p }) {
  return (
    <article className="ben-card">
      <div className="ben-card-img">
        <img src={p.img} alt={p.title} loading="lazy" />
        <span className="ben-card-shine" />
      </div>
      <div className="ben-card-body">
        <h3 className="ben-card-title">{p.discount} {p.title}</h3>
        <div className="ben-card-meta">
          {p.cashback
            ? <span className="ben-card-cashback">Cashback <Info size={12} /></span>
            : <span className="ben-card-off">Զեղչ <Info size={12} /></span>}
          {p.note && <span className="ben-card-note">{p.note}</span>}
        </div>
        <div className="ben-card-foot">
          <span className="ben-card-tag">{p.sector}</span>
          <span className="ben-card-actions">
            <button type="button" className="ben-card-btn"><CreditCard size={14} /> Արտոնություններ</button>
            <Socials items={p.socials} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Benefits() {
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(INITIAL_COUNT);
  const [openFaq, setOpenFaq] = useState(0);
  const [checked, setChecked] = useState({}); // { groupKey: Set(labels) }

  const toggle = (group, label) => {
    setChecked((prev) => {
      const set = new Set(prev[group] || []);
      set.has(label) ? set.delete(label) : set.add(label);
      return { ...prev, [group]: set };
    });
  };

  const list = useMemo(() => {
    const sectors = checked.sector || new Set();
    const benefits = checked.benefit || new Set();
    const q = query.trim().toLowerCase();
    return PARTNERS.filter((p) => {
      if (sectors.size && !sectors.has(p.sector)) return false;
      if (benefits.size && !benefits.has(p.benefit)) return false;
      if (q && !p.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [checked, query]);

  return (
    <main className="ben-page">
      {/* Мини-хедер страницы Benefits */}
      <div className="ben-topbar">
        <div className="ben-topbar-in">
          <span className="ben-logo">evoc<span>a</span>BENEFITS</span>
          <span className="ben-topbar-right">
            <button type="button" className="ben-order-btn">Պատվիրել քարտ</button>
            <button type="button" className="ben-globe" aria-label="Language"><Globe size={18} /></button>
          </span>
        </div>
      </div>

      <div className="ben-wrap">
        {/* Breadcrumbs */}
        <nav className="ben-crumbs">
          <Link to="/" aria-label="Home"><Home size={16} /></Link>
          <ChevronRight size={12} />
          <Link to="/">Անհատ</Link>
          <ChevronRight size={12} />
          <Link to="/cards">Քարտեր</Link>
          <ChevronRight size={12} />
          <span>Evoca Benefits</span>
        </nav>

        <h1 className="ben-title">Բացահայտիր Evoca քարտերի բենեֆիթները</h1>

        {/* Логотипы платёжных систем */}
        <div className="ben-systems">
          <span className="ben-sys ben-sys-visa">VISA</span>
          <span className="ben-sys ben-sys-mc"><i /><i /></span>
          <span className="ben-sys ben-sys-arca">arc<b>a</b></span>
          <span className="ben-sys ben-sys-up"><i /><i /><i /></span>
        </div>

        {/* Поиск */}
        <div className="ben-search">
          <Search size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShown(INITIAL_COUNT); }}
            placeholder="Որոնել"
            aria-label="Որոնել"
          />
        </div>

        <div className="ben-layout">
          {/* Сайдбар фильтров */}
          <aside className="ben-filters">
            <div className="ben-filters-head">
              Ֆիլտրեր
              <select className="ben-sort" aria-label="Դասավորել" defaultValue="">
                <option value="" disabled>Դասավորել</option>
                <option value="az">Ա-Ֆ</option>
                <option value="desc">Զեղչ՝ նվազագույնից</option>
              </select>
            </div>
            {FILTERS.map((g) => (
              <section className="ben-fgroup" key={g.key}>
                <h4 className="ben-fgroup-title">{g.title}</h4>
                <ul>
                  {g.items.map(([label, count]) => {
                    const isOn = (checked[g.key] || new Set()).has(label);
                    return (
                      <li key={label}>
                        <label className={`ben-fitem${isOn ? ' is-on' : ''}`}>
                          <input type="checkbox" checked={isOn} onChange={() => toggle(g.key, label)} />
                          <span className="ben-fbox"><ChevronRight size={11} /></span>
                          <span className="ben-flabel">{label}</span>
                          <span className="ben-fcount">{count}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </aside>

          {/* Сетка карточек */}
          <section className="ben-grid-wrap">
            <div className="ben-grid">
              {list.slice(0, shown).map((p) => <PartnerCard key={p.title} p={p} />)}
              {list.length === 0 && <div className="ben-empty">Ոչինչ չի գտնվել</div>}
            </div>

            {/* Баннер */}
            <div className="ben-banner">
              <div className="ben-banner-text">
                <h3>EVOCA<br />BENEFITS</h3>
                <p>Մեկ քարտ, անսահմանափակ բենեֆիթներ: Պատվիրիր քո Evoca քարտը հիմա:</p>
              </div>
              <img src={BANNER_IMG} alt="Evoca card" loading="lazy" />
            </div>

            {shown < list.length && (
              <button type="button" className="ben-loadmore" onClick={() => setShown(list.length)}>
                Բեռնել ավելին <ChevronDown size={16} />
              </button>
            )}
          </section>
        </div>

        {/* FAQ */}
        <section className="ben-faq">
          <h2>Հաճախ տրվող հարցեր</h2>
          {FAQ.map((f, i) => (
            <div className={`ben-faq-item${openFaq === i ? ' is-open' : ''}`} key={f.q}>
              <button type="button" className="ben-faq-head" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                <ChevronDown size={17} className="ben-faq-chev" />
                <span>{f.q}</span>
              </button>
              <div className="ben-faq-panel">
                <div>
                  {f.a
                    ? <p className="ben-faq-a">{f.a}</p>
                    : <p className="ben-faq-soon">Տեղեկատվությունը շուտով կհրապարակվի:</p>}
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="ben-bottom" />
      </div>

      <FloatingActions />
    </main>
  );
}