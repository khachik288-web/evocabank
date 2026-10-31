import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './NewsBlock.css';

const BASE = 'https://www.evoca.am/images-cache/news/1';
const NEWS = [
  { id: 1, slug: 'fincomm', tag: 'Կենսակերպ', title: 'Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր', date: '08.10.2026', image: `${BASE}/17915391966329/439x320.png` },
  { id: 2, slug: 'trf', tag: 'Կենսակերպ', title: 'Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր', date: '06.10.2026', image: `${BASE}/17912685600228/439x320.png` },
  { id: 3, slug: 'ukforum', tag: 'Կենսակերպ', title: 'Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր', date: '06.10.2026', image: `${BASE}/17913736819959/439x320.jpg` },
];

/* Блок «Վերջին նորությունները» — вставляется внизу страниц перед футером.
   Кнопка и карточки ведут на внутреннюю страницу /news. */
export default function NewsBlock() {
  const { t } = useTranslation();
  return (
    <section className="nb">
      <div className="nb-wrap">
        <div className="nb-head">
          <h2 className="nb-title">{t('Վերջին նորությունները')}</h2>
          <Link to="/news" className="nb-all">{t('Բոլոր նորությունները ›')} <ChevronRight size={16} /></Link>
        </div>
        <div className="nb-grid">
          {NEWS.map((n) => (
            <Link key={n.id} to={`/news/${n.slug}`} className="nb-card">
              <span className="nb-img"><img src={n.image} alt={n.title} loading="lazy" /></span>
              <span className="nb-body">
                <span className="nb-tag">{t(n.tag)}</span>
                <span className="nb-name">{t(n.title)}</span>
                <span className="nb-date">{n.date}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
