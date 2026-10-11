import React from 'react';
import { PlainPage } from './SecurityParts';
import NewsBlock from './NewsBlock';
import './Trade.css';

export { List, Accordion, PH, Soon } from './SecurityParts';

const TRADE = { label: 'Առևտրի ֆինանսավորում', path: '/business/trade-finance' };

/* Обёртка страницы раздела «Առևտրի ֆինանսավորում»: хлебные крошки + блок новостей внизу */
export function TradePage({ title, updated, children }) {
  return (
    <PlainPage title={title} section={TRADE} updated={updated} after={<NewsBlock />}>
      {children}
    </PlainPage>
  );
}

/* Таблица «№ | параметр | значение». rows: [параметр, значение] — значение может быть JSX */
export function NumTable({ rows, head }) {
  return (
    <div className="dp-table-wrap dp-numwrap">
      <table className="dp-numtable">
        {head && (
          <thead>
            <tr><th colSpan={3}>{head}</th></tr>
          </thead>
        )}
        <tbody>
          {rows.map(([label, value], i) => (
            <tr key={i}>
              <td className="n">{i + 1}.</td>
              <td className="l">{label}</td>
              <td className={`v ${React.isValidElement(value) && value.type === 'table' ? 'sub' : ''}`}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Пункт-маркер фиолетовым цветом + карточка с описанием под ним */
export function GuaranteeItem({ name, en, children }) {
  return (
    <>
      <p className="dp-gt">{name}</p>
      <div className="dp-card">
        <i>({en})</i>
        {children}
      </div>
    </>
  );
}
