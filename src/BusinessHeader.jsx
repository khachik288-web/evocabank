import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, HelpCircle, Globe, Search, Menu, X } from 'lucide-react';
import './BusinessHeader.css';

const TOP = [['Անհատ', '/'], ['Բիզնես', '/business'], ['Ակնթարթային վճարումներ', '/web-payment'], ['Մեր մասին', '/about'], ['Նորություններ', '/news'], ['Բլոգ', '/blog'], ['Կարիերա', '/career']];
// [название, путь] — путь '#' пока заглушка
const MAIN = [['Վարկեր', '/business'], ['Քարտեր', '/cards'], ['Հաշիվներ', '/business/accounts'], ['Ավանդներ', '/business/deposits'], ['Արժեթղթերի շուկա', '#'], ['Առևտրի ֆինանսավորում', '#'], ['Դիջիթալ', '#'], ['Այլ', '#']];
// Заголовок фиолетовой полосы по маршруту
const SUB = { '/business': 'Բիզնես վարկեր', '/business/deposits': 'Դասական ավանդ' };
// Вкладки фиолетовой полосы для раздела «Հաշիվներ»
const ACCOUNT_TABS = [['Հաշիվների բացում և սպասարկում', '/business/accounts'], ['Առարկայազուրկ մետաղական հաշիվներ', '/business/accounts/metal']];

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
  const isActive = (p) => p !== '#' && (p === '/business/accounts' ? isAccounts : pathname === p);

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
        {isAccounts
          ? ACCOUNT_TABS.map(([l, p]) => <Link key={p} to={p} className={pathname === p ? 'on' : ''}>{l}</Link>)
          : <span>{title}</span>}
      </div></div>
    </header>
  );
}
