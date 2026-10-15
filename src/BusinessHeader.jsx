import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, HelpCircle, Globe, Search, Menu, X } from 'lucide-react';
import './BusinessHeader.css';

const TOP = [['Անհատ', '/'], ['Բիզնես', '/business'], ['Ակնթարթային վճարումներ', '/web-payment'], ['Մեր մասին', '/about'], ['Նորություններ', '/news'], ['Բլոգ', '/blog'], ['Կարիերա', '/career']];
// [название, путь] — путь '#' пока заглушка
const MAIN = [['Վարկեր', '/business'], ['Քարտեր', '/cards'], ['Հաշիվներ', '/business/accounts'], ['Ավանդներ', '/business/deposits'], ['Արժեթղթերի շուկա', '/business/securities'], ['Առևտրի ֆինանսավորում', '/business/trade-finance'], ['Դիջիթալ', '/business/digital'], ['Այլ', '/business/other']];
// Заголовок фиолетовой полосы по маршруту
const SUB = { '/business': 'Բիզնես վարկեր', '/business/deposits': 'Դասական ավանդ' };
// Вкладки фиолетовой полосы для раздела «Առևտրի ֆինանսավորում»
const TRADE_TABS = [['Երաշխիք', '/business/trade-finance'], ['Ֆակտորինգային ֆինանսավորում', '/business/trade-finance/factoring'], ['Ակրեդիտիվ', '/business/trade-finance/letter-of-credit'], ['Ինկասո', '/business/trade-finance/collection']];
// Вкладки фиолетовой полосы для раздела «Արժեթղթերի շուկա»
const SECURITIES_TABS = [['Ներդրումային ծառայություններ', '/business/securities'], ['Պարտատոմսեր', '/business/securities/bonds'], ['ՀԿԴ ծառայություններ', '/business/securities/hkd'], ['Ռեպո/Հակադարձ ռեպո գործարքներ', '/business/securities/repo'], ['EvocaINVEST', '/business/securities/evocainvest']];
// Вкладки фиолетовой полосы для раздела «Հաշիվներ»
const ACCOUNT_TABS = [['Հաշիվների բացում և սպասարկում', '/business/accounts'], ['Առարկայազուրկ մետաղական հաշիվներ', '/business/accounts/metal']];

// Вкладки фиолетовой полосы для раздела «Դիջիթալ»
const DIGITAL_TABS = [['V-POS Տերմինալ', '/business/digital'], ['POS Տերմինալ', '/business/digital/pos'], ['Սակագներ', '/business/digital/tariffs'], ['Տերմինալի տեղադրման հայտ', '/business/digital/request'], ['Evoca Mobile POS mPOS', '/business/digital/mpos']];

// ayl vkladken 
const OTHER_TABS = [['Պահատուփեր', '/business/other'], ['Փոխանցումներ', '/business/other/transfers']];

export default function BusinessHeader({ sub }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  const title = sub || SUB[pathname] || 'Բիզնես վարկեր';
  const isAccounts = pathname.startsWith('/business/accounts');
  const isSecurities = pathname.startsWith('/business/securities');
  const isTrade = pathname.startsWith('/business/trade-finance');
  const isDigital = pathname.startsWith('/business/digital');
  const isOther = pathname.startsWith('/business/other');
  const tabs = isOther ? OTHER_TABS : isDigital ? DIGITAL_TABS : isAccounts ? ACCOUNT_TABS : isSecurities ? SECURITIES_TABS : isTrade ? TRADE_TABS : null;
  const isActive = (p) => p !== '#' && (p === '/business/other' ? isOther : p === '/business/accounts' ? isAccounts : p === '/business/securities' ? isSecurities : p === '/business/trade-finance' ? isTrade : pathname === p);
  return (
    <header className={`bh ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="bh-top">
        <div className="bh-wrap bh-top-in">
          <nav>{TOP.map(([l, p]) => <Link key={l} to={p} className={l === 'Բիզնես' ? 'on' : ''}>{l}</Link>)}</nav>
          <div className="bh-top-r">
            <a href="#" className="bh-link">Առցանց հայտեր <ChevronDown size={13} /></a>
            <a href="#" className="bh-link">Հետադարձ կապ <ChevronDown size={13} /></a>
            <span className="bh-icons">
              <button aria-label="location"><MapPin size={14} fill="currentColor" /></button>
              <button aria-label="help"><HelpCircle size={14} fill="currentColor" stroke="#fff" /></button>
              <button aria-label="language"><Globe size={14} /></button>
              <button aria-label="search"><Search size={14} /></button>
              <button aria-label="menu"><Menu size={18} /></button>
            </span>
          </div>
        </div>
      </div>

      <div className="bh-main">
        <div className="bh-wrap bh-main-in">
          <Link to="/" className="bh-brand" aria-label="evoca">
            <span className="bh-logo">e<b>v</b>oca</span>
            <svg className="bh-mark" viewBox="0 0 48 48"><path d="M2 4h13l9 24 9-24h13L30 44H18z" fill="#6a00dc" /></svg>
          </Link>
          <nav className={`bh-nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
            {MAIN.map(([l, p]) => <Link key={l} to={p} className={isActive(p) ? 'on' : ''}>{l}</Link>)}
          </nav>
          <a href="#" className="bh-pill">EvocaONLINE</a>
          <button className="bh-burger" aria-label="menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>

      <div className="bh-sub"><div className="bh-wrap">
        {tabs
          ? tabs.map(([l, p]) => <Link key={l} to={p} className={pathname === p ? 'on' : ''}>{l}</Link>)
          : <span>{title}</span>}
      </div></div>
    </header>
  );
}
