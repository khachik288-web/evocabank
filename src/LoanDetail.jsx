import React, { useState } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LOANS_DATA } from './busines';
import OnlineBanner from './OnlineBanner';
import './CardDetail.css';

// Общий шаблон страницы бизнес-продукта /business/loans/:id (те же стили, что у CardDetail).
// 3 варианта текста — выбирается по номеру карточки; {{title}} подставляется автоматически.
const VARIANTS = [
  [
    '**{{title}}** վարկատեսակը մշակված է Evocabank-ի բիզնես հաճախորդների համար՝ նպաստելու Ձեր բիզնեսի կայուն զարգացմանը և ընթացիկ ու ներդրումային նպատակների իրականացմանը:',
    'Վարկը տրամադրվում է ճկուն պայմաններով, թափանցիկ սակագներով և արագ քննարկման ժամկետներով: Վարկի գումարը, ժամկետը և տոկոսադրույքը որոշվում են՝ հաշվի առնելով Ձեր բիզնեսի առանձնահատկությունները:',
  ],
  [
    'Evocabank-ի **{{title}}** ծրագիրը Ձեզ հնարավորություն է տալիս արագ ստանալ անհրաժեշտ ֆինանսավորում՝ առանց ավելորդ բյուրոկրատիայի:',
    'Մեր մասնագետները կօգնեն ընտրել Ձեր բիզնեսին առավել հարմար պայմանները և կուղեկցեն դիմումի ձևակերպման բոլոր փուլերում:',
  ],
  [
    'Ընտրելով **{{title}}**՝ Դուք ստանում եք հուսալի գործընկեր և մատչելի պայմաններ՝ բիզնեսը զարգացնելու, շրջանառու միջոցները համալրելու կամ նոր սարքավորումներ ձեռք բերելու համար:',
    'Դիմումը կարող եք ներկայացնել Բանկի ցանկացած մասնաճյուղում կամ թողնել հայտ մեր կայքում:',
  ],
];
const CLOSING = 'Լրացուցիչ տեղեկությունների համար զանգահարեք կարճ համարով՝ **8444**, կամ այցելեք Բանկի ցանկացած մասնաճյուղ:';

function Rich({ text }) {
  return text.split('**').map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>));
}

export default function LoanDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('about');
  const [i, setI] = useState(0);
  const loan = DEFAULT_LOANS_DATA.find((l) => l.id === id);
  if (!loan) return <Navigate to="/business" replace />;

  const stats = loan.stats || [];
  const hasStats = stats.length > 0;
  const paragraphs = [loan.description, ...VARIANTS[(Number(id) || 0) % VARIANTS.length], CLOSING];
  const others = DEFAULT_LOANS_DATA.filter((l) => l.id !== id);
  const visible = 4;
  const max = Math.max(0, others.length - visible);

  return (
    <main className="cd-page">
      <section className="cd-hero">
        <div className="cd-wrap cd-hero-in">
          <div className="cd-hero-text">
            <h1>{t(loan.title)}</h1>
            <p>{t(loan.description)}</p>
          </div>
          <div className="cd-hero-img">
            <img src={loan.image} alt={t(loan.title)} />
            <i className="cd-shadow" />
          </div>
        </div>
      </section>

      <div className="cd-wrap">
        <div className="cd-toolbar">
          <button type="button" className="cd-back" onClick={() => navigate('/business')}>
            <ArrowLeft size={18} /> {t('Վերադառնալ')}
          </button>
          <nav className="cd-crumbs">
            <Link to="/business" aria-label="Home"><Home size={14} /></Link>
            <ChevronRight size={11} />
            <Link to="/business">{t('Բիզնես')}</Link>
            <ChevronRight size={11} />
            <Link to="/business">{t('Բիզնես վարկեր')}</Link>
            <ChevronRight size={11} />
            <span className="last">{t(loan.title)}</span>
          </nav>
        </div>

        <div className="cd-tabs">
          <button type="button" className={tab === 'about' ? 'on' : ''} onClick={() => setTab('about')}>{t('Վարկի մասին')}</button>
          <button type="button" className={tab === 'tariffs' ? 'on' : ''} onClick={() => setTab('tariffs')}>{t('Սակագներ և դրույքներ')}</button>
        </div>

        <div className={`cd-body${hasStats ? '' : ' cd-body--single'}`}>
          <div className="cd-text">
            {tab === 'about' ? (
              paragraphs.map((p, k) => <p key={k}><Rich text={t(p, { title: t(loan.title) })} /></p>)
            ) : (
              <p>{t(hasStats ? 'Սակագները և դրույքները ներկայացված են աջ կողմի աղյուսակում:' : 'Սակագների և դրույքների մասին մանրամասն տեղեկությունը կարող եք ստանալ կարճ համարով՝ 8444:')}</p>
            )}
          </div>

          {hasStats && (
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
          )}
        </div>
      </div>

      <section className="cd-other">
        <div className="cd-wrap">
          <h2>{t('Այլ վարկեր')}</h2>
          <div className="cd-other-row">
            <button type="button" aria-label="prev" onClick={() => setI((v) => (v <= 0 ? max : v - 1))}><ChevronLeft size={22} /></button>
            <div className="cd-other-viewport">
              <div className="cd-other-track" style={{ transform: `translateX(-${i * (100 / visible)}%)` }}>
                {others.map((l) => (
                  <Link to={`/business/loans/${l.id}`} key={l.id} className="cd-other-item" style={{ flex: `0 0 ${100 / visible}%` }}>
                    <img src={l.image} alt={t(l.title)} />
                    <span>{t(l.title)}</span>
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
