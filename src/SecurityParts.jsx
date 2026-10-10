import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Avandner.css';
import './Accounts.css';
import './Securities.css';
import { Share } from './Accounts';

export { List, Accordion, Share, Hero } from './Accounts';

/* Хлебные крошки: Բիզնես › Արժեթղթերի շուկա › <текущая> */
export function SecCrumbs({ current }) {
  return (
    <div className="dp-crumbs">
      <Home size={15} /><ChevronRight size={11} />
      <Link to="/business">Բիզնես</Link><ChevronRight size={11} />
      <Link to="/business/securities">Արժեթղթերի շուկա</Link><ChevronRight size={11} />
      <span>{current}</span>
    </div>
  );
}

/* Страница без hero-картинки: заголовок в колонке контента + боковая панель соцсетей */
export function PlainPage({ title, current, updated, children }) {
  return (
    <div className="dp">
      <div className="dp-wrap">
        <SecCrumbs current={current || title} />
        <div className="dp-body dp-plain">
          <Share />
          <article className="dp-content">
            <h1 className="dp-title">{title}</h1>
            {children}
          </article>
        </div>
      </div>
      {updated && <p className="dp-updated">Թարմացվել է՝ {updated}</p>}
    </div>
  );
}

/* Фиолетовый подзаголовок внутри текста */
export const PH = ({ children }) => <h3 className="dp-ph">{children}</h3>;

/* Пустой аккордеон, пока нет текста */
export const Soon = () => <p className="dp-muted">Բովանդակությունը շուտով կհրապարակվի:</p>;
