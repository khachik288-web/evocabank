import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DepositsPage.css';
import './DepositDetailPage.css';
import { Header } from './App';
import { DEPOSITS, getDepositById } from './depositsData';

// Одна страница для всех вкладов: меняются только картинка, заголовок
// (и краткие показатели) выбранной карточки. Остальной текст общий.
export default function DepositDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const deposit = getDepositById(id);

  if (!deposit) {
    return (
      <div className="evoca-container">
        <Header />
        <main className="evoca-main-content">
          <h1 className="page-title">{t('Էջը չի գտնվել։')}</h1>
          <button className="deposit-card-btn" onClick={() => navigate('/deposits')}>
            {t('← Վերադառնալ')}
          </button>
        </main>
      </div>
    );
  }

  const others = DEPOSITS.filter((d) => d.id !== deposit.id);

  const conditions = [
    'Ավանդը կարող է ներդրվել Բանկի գրասենյակներում կամ EvocaTOUCH և EvocaONLINE համակարգերով:',
    'Ավանդի ներդրման համար անհրաժեշտ է անձը հաստատող փաստաթուղթ և սոցիալական քարտ:',
    'Տոկոսագումարները հաշվարկվում են օրական կտրվածքով և վճարվում են պայմանագրով սահմանված կարգով:',
    'Ֆիզիկական անձանց ավանդները երաշխավորվում են համաձայն ՀՀ օրենքի:',
    'Ավանդի գումարի վերադարձը կատարվում է Ավանդային պայմանագրի վերջին օրը:',
  ];

  return (
    <div className="evoca-container">
      <Header />

      <div className="sub-purple-bar">
        <div className="tabs-wrapper">
          <button className="tab-btn active" onClick={() => navigate('/deposits')}>
            {t('Ավանդներ')}
          </button>
        </div>
      </div>

      <div className="breadcrumbs">
        <span>🏠</span> &rsaquo; <span>{t('Անհատ')}</span> &rsaquo;{' '}
        <span onClick={() => navigate('/deposits')}>{t('Ավանդներ')}</span> &rsaquo;
        <span className="current"> {t(deposit.title)}</span>
      </div>

      <main className="evoca-main-content deposit-detail">
        <button className="deposit-back-btn" onClick={() => navigate('/deposits')}>
          ‹ {t('Վերադառնալ')}
        </button>

        {/* Hero: картинка + заголовок выбранной карточки */}
        <section className="deposit-hero">
          <div className="deposit-hero-image">
            <img src={deposit.image} alt={t(deposit.title)} />
          </div>
          <div className="deposit-hero-info">
            <h1 className="deposit-hero-title">{t(deposit.title)}</h1>
            <p className="deposit-hero-desc">{t(deposit.description)}</p>

            <div className="deposit-card-stats">
              {deposit.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-label">{t(stat.label)}</span>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-sub">{t(stat.sub)}</span>
                </div>
              ))}
            </div>

            <button className="deposit-card-btn deposit-apply-btn">
              {t('Ձևակերպել ավանդ')}
            </button>
          </div>
        </section>

        {/* Общий блок для всех вкладов */}
        <section className="deposit-section">
          <h2 className="deposit-section-title">{t('Ավանդի մասին')}</h2>
          <p className="deposit-section-text">
            {t('Ավանդը հուսալի և շահավետ միջոց է Ձեր խնայողությունները պահպանելու և ավելացնելու համար: Ընտրեք Ձեզ հարմար գումարը և ժամկետը, և Բանկը կապահովի կայուն եկամտաբերություն ամբողջ ժամանակահատվածում:')}
          </p>
          <p className="deposit-section-text">
            {t('Ավանդը կարող եք ձևակերպել Բանկի ցանկացած մասնաճյուղում կամ EvocaTOUCH հավելվածի միջոցով՝ առանց ավելորդ թղթաբանության:')}
          </p>
        </section>

        <section className="deposit-section">
          <h2 className="deposit-section-title">{t('Ավանդի պայմաններ')}</h2>
          <ol className="info-list">
            {conditions.map((c, i) => (
              <li key={i}>{t(c)}</li>
            ))}
          </ol>
        </section>

        <section className="deposit-section deposit-contact">
          <p>{t('Լրացուցիչ տեղեկությունների համար զանգահարեք կարճ համարով՝ **8444**, կամ այցելեք Բանկի ցանկացած մասնաճյուղ:').replace(/\*\*/g, '')}</p>
        </section>

        {/* Другие вклады */}
        <section className="deposit-section">
          <h2 className="deposit-section-title">{t('Այլ ավանդներ')}</h2>
          <div className="deposit-others">
            {others.map((d) => (
              <div
                key={d.id}
                className="deposit-other-card"
                onClick={() => {
                  navigate(`/deposits/${d.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img src={d.image} alt={t(d.title)} />
                <span>{t(d.title)}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
