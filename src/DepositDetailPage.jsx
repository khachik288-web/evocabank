import React, { useState } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DEPOSITS } from './depositsData';
import OnlineBanner from './OnlineBanner';
import './CardDetail.css';

// Общий шаблон страницы вклада: /deposits/:id.
// Та же схема и те же стили (cd-*), что у LoanDetail / CardDetail.
// Меняются только картинка, заголовок, описание и показатели выбранной карточки.
const TEXT = [
  'Ավանդը հուսալի և շահավետ միջոց է Ձեր խնայողությունները պահպանելու և ավելացնելու համար: Ընտրեք Ձեզ հարմար գումարը և ժամկետը, և Բանկը կապահովի կայուն եկամտաբերություն ամբողջ ժամանակահատվածում:',
  'Ավանդը կարող եք ձևակերպել Բանկի ցանկացած մասնաճյուղում կամ EvocaTOUCH հավելվածի միջոցով՝ առանց ավելորդ թղթաբանության:',
  'Ֆիզիկական անձանց ավանդները երաշխավորվում են համաձայն ՀՀ օրենքի:',
];
const CLOSING = 'Լրացուցիչ տեղեկությունների համար զանգահարեք կարճ համարով՝ **8444**, կամ այցելեք Բանկի ցանկացած մասնաճյուղ:';

const BASE = '/deposits';
const CRUMBS = [['Անհատ', '/'], ['Ավանդներ', BASE]];

function Rich({ text }) {
  return text.split('**').map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>));
}

export default function DepositDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('about');
  const [i, setI] = useState(0);

  const deposit = DEPOSITS.find((d) => d.id === id);
  if (!deposit) return <Navigate to={BASE} replace />;

  // {label:'Սկսած', value, sub:'Գումար'} → маленькая подпись сверху + значение + название
  const stats = (deposit.stats || []).map((s) => ({ sublabel: s.label, value: s.value, label: s.sub }));
  const paragraphs = [deposit.description, ...TEXT, CLOSING];
  const others = DEPOSITS.filter((d) => d.id !== id);
  const visible = 4;
  const max = Math.max(0, others.length - visible);

  return (
    <main className="cd-page">
      <section className="cd-hero">
        <div className="cd-wrap cd-hero-in">
          <div className="cd-hero-text">
            <h1>{t(deposit.title)}</h1>
            <p>{t(deposit.description)}</p>
          </div>
          <div className="cd-hero-img">
            <img src={deposit.image} alt={t(deposit.title)} />
            <i className="cd-shadow" />
          </div>
        </div>
      </section>

      <div className="cd-wrap">
        <div className="cd-toolbar">
          <button type="button" className="cd-back" onClick={() => navigate(BASE)}>
            <ArrowLeft size={18} /> {t('Վերադառնալ')}
          </button>
          <nav className="cd-crumbs">
            <Link to="/" aria-label="Home"><Home size={14} /></Link>
            {CRUMBS.map(([label, to], k) => (
              <React.Fragment key={k}>
                <ChevronRight size={11} />
                <Link to={to}>{t(label)}</Link>
              </React.Fragment>
            ))}
            <ChevronRight size={11} />
            <span className="last">{t(deposit.title)}</span>
          </nav>
        </div>

        <div className="cd-tabs">
          <button type="button" className={tab === 'about' ? 'on' : ''} onClick={() => setTab('about')}>{t('Ավանդի մասին')}</button>
          <button type="button" className={tab === 'tariffs' ? 'on' : ''} onClick={() => setTab('tariffs')}>{t('Սակագներ և դրույքներ')}</button>
        </div>

        <div className="cd-body">
          <div className="cd-text">
            {tab === 'about' ? (
              paragraphs.map((p, k) => <p key={k}><Rich text={t(p)} /></p>)
            ) : (
              <p>{t('Սակագները և դրույքները ներկայացված են աջ կողմի աղյուսակում:')}</p>
            )}
          </div>

          <aside className="cd-stats">
            {stats.map((s, k) => (
              <div className="cd-stat" key={k}>
                <div className="cd-stat-v">
                  {s.sublabel && <small>{t(s.sublabel)}</small>}
                  <b>{t(s.value)}</b>
                </div>
                <div className="cd-stat-l">{t(s.label)}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <section className="cd-other">
        <div className="cd-wrap">
          <h2>{t('Այլ ավանդներ')}</h2>
          <div className="cd-other-row">
            <button type="button" aria-label="prev" onClick={() => setI((v) => (v <= 0 ? max : v - 1))}><ChevronLeft size={22} /></button>
            <div className="cd-other-viewport">
              <div className="cd-other-track" style={{ transform: `translateX(-${i * (100 / visible)}%)` }}>
                {others.map((d) => (
                  <Link to={`${BASE}/${d.id}`} key={d.id} className="cd-other-item" style={{ flex: `0 0 ${100 / visible}%` }}>
                    <img src={d.image} alt={t(d.title)} />
                    <span>{t(d.title)}</span>
                  </Link>
                ))}
              </div>
            </div>
            <button type="button" aria-label="next" onClick={() => setI((v) => (v >= max ? 0 : v + 1))}><ChevronRight size={22} /></button>
          </div>
        </div>
      </section>

      <OnlineBanner />
    </main>
  );
}