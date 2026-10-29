import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';
import { FloatingActions } from './Loans';
import { CARDS } from './cardsData';
import './Cards.css';

// Фильтры: текстовые + логотипы платёжных систем
const FILTERS = [
  { key: 'all', label: 'Բոլորը' },
  { key: 'premium', label: 'Պրեմիում' },
  { key: 'gift', label: 'Նվեր քարտեր' },
  { key: 'digital', label: 'Թվային քարտեր' },
  { key: 'arca', logo: 'arca' },
  { key: 'visa', logo: 'visa' },
  { key: 'mastercard', logo: 'mc' },
  { key: 'unionpay', logo: 'up' },
];

function FilterLogo({ type }) {
  if (type === 'arca') return <span className="logo-arca">arc<b>a</b></span>;
  if (type === 'visa') return <span className="logo-visa">VISA</span>;
  if (type === 'mc') return <span className="logo-mc"><i /><i /></span>;
  return <span className="logo-up"><i /><i /><i /></span>;
}

function Stat({ pre, value, label, note }) {
  const { t } = useTranslation();
  return (
    <div className="card-stat">
      <div className="card-stat-pre">{pre && t(pre)}</div>
      <div className="card-stat-value">{t(value)}</div>
      <div className="card-stat-label">
        {t(label)}
        {note && <><br />{t(note)}</>}
      </div>
    </div>
  );
}

function CardRow({ card }) {
  const { t } = useTranslation();
  return (
    <article className={`card-row${card.stats.length ? '' : ' no-stats'}`}>
      <div className="card-img-box">
        <img src={card.img} alt={card.title} loading="lazy" />
      </div>
      <div className="card-info">
        <h2 className="card-name">{card.title}</h2>
        <p className="card-desc">{t(card.text)}</p>
        {card.stats.length > 0 && (
          <div className="card-stats">
            {card.stats.map((s, i) => <Stat key={i} {...s} />)}
          </div>
        )}
        {/* у каждой карты своя страница /cards/:id (общий шаблон CardDetail) */}
        <Link to={card.to || `/cards/${card.id}`} className="card-more">
          {t('Մանրամասն')} <ChevronRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function Cards() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? CARDS : CARDS.filter((c) => c.cats.includes(filter));

  return (
    <main className="cards-page">
      <div className="cards-wrap">
        {/* Breadcrumbs: Անհատ → Քարտեր → Քարտեր */}
        <nav className="cards-crumbs">
          <Link to="/" aria-label="Home"><Home size={16} /></Link>
          <ChevronRight size={12} />
          <Link to="/">{t('Անհատ')}</Link>
          <ChevronRight size={12} />
          <Link to="/cards">{t('Քարտեր')}</Link>
          <ChevronRight size={12} />
          <span>{t('Քարտեր')}</span>
        </nav>

        <h1 className="cards-title">{t('Քարտեր')}</h1>

        <div className="cards-filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`cards-chip${f.logo ? ' is-logo' : ''}${filter === f.key ? ' is-active' : ''}`}
              aria-label={f.label || f.logo}
            >
              {f.logo ? <FilterLogo type={f.logo} /> : t(f.label)}
            </button>
          ))}
        </div>

        <section>
          {list.map((c) => <CardRow key={c.id} card={c} />)}
          {list.length === 0 && <div className="cards-empty">—</div>}
        </section>
      </div>

      <FloatingActions />
    </main>
  );
}