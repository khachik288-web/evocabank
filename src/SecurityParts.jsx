import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Avandner.css';
import './Accounts.css';
import './Securities.css';
import { Share, Hero } from './Accounts';

export { List, Accordion, Share, Hero } from './Accounts';

const SEC = { label: 'Արժեթղթերի շուկա', path: '/business/securities' };

/* Хлебные крошки: Բիզնես › <раздел> › <текущая> (по умолчанию раздел — Արժեթղթերի շուկա) */
const PERSONAL_SEC = { label: 'Արժեթղթեր', path: '/securities' };
const HERO_IMG = 'https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg';

/* Тексты hero для личного раздела (/securities/*) */
const HEROES = {
  '/securities': ['Ներդրումային ծառայություններ', 'Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:'],
  '/securities/bonds': ['Պարտատոմսեր', 'Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը:'],
  '/securities/hkd': ['Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ)', 'Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:'],
  '/securities/repo': ['Ռեպո/Հակադարձ Ռեպո գործարքներ', 'Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ: Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում:'],
};

export const useIsPersonal = () => useLocation().pathname.startsWith('/securities');

export function SecCrumbs({ current, section = SEC }) {
  if (useIsPersonal()) {
    return (
      <div className="dp-crumbs">
        <Link to="/" aria-label="home"><Home size={15} /></Link><ChevronRight size={11} />
        <Link to="/">Անհատ</Link><ChevronRight size={11} />
        <Link to={PERSONAL_SEC.path}>{PERSONAL_SEC.label}</Link><ChevronRight size={11} />
        <span>{current}</span>
      </div>
    );
  }
  return (
    <div className="dp-crumbs">
      <Home size={15} /><ChevronRight size={11} />
      <Link to="/business">Բիզնես</Link><ChevronRight size={11} />
      <Link to={section.path}>{section.label}</Link><ChevronRight size={11} />
      <span>{current}</span>
    </div>
  );
}

/* Страница без hero-картинки: заголовок в колонке контента + боковая панель соцсетей */
export function PlainPage({ title, current, updated, section, after, children }) {
  const { pathname } = useLocation();
  const hero = HEROES[pathname]; // есть только у личного раздела
  return (
    <div className="dp dp-v2">
      <div className="dp-wrap">
        <SecCrumbs current={current || title} section={section} />
        {hero && <Hero title={hero[0]} text={hero[1]} img={HERO_IMG} />}
        <div className={`dp-body${hero ? '' : ' dp-plain'}`}>
          <Share />
          <article className="dp-content">
            {!hero && <h1 className="dp-title">{title}</h1>}
            {children}
          </article>
        </div>
      </div>
      {after}
      {updated && <p className="dp-updated">Թարմացվել է՝ {updated}</p>}
    </div>
  );
}

/* Фиолетовый подзаголовок внутри текста */
export const PH = ({ children }) => <h3 className="dp-ph">{children}</h3>;

/* Пустой аккордеон, пока нет текста */
export const Soon = () => <p className="dp-muted">Բովանդակությունը շուտով կհրապարակվի:</p>;
