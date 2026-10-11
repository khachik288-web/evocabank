import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Avandner.css';
import './Accounts.css';
import './Securities.css';
import { Share } from './Accounts';

export { List, Accordion, Share, Hero } from './Accounts';

const SEC = { label: 'Արժեթղթերի շուկա', path: '/business/securities' };

/* Хлебные крошки: Բիզնես › <раздел> › <текущая> (по умолчанию раздел — Արժեթղթերի շուկա) */
export function SecCrumbs({ current, section = SEC }) {
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
  return (
    <div className="dp dp-v2">
      <div className="dp-wrap">
        <SecCrumbs current={current || title} section={section} />
        <div className="dp-body dp-plain">
          <Share />
          <article className="dp-content">
            <h1 className="dp-title">{title}</h1>
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
