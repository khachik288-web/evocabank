import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LOANS } from './Loans';
import { CARDS } from './cardsData';
import { DEPOSITS } from './depositsData';

// Статические страницы сайта. Чтобы добавить новую — просто допиши строку.
// kw — доп. ключевые слова (рус/англ), по которым тоже можно найти страницу.
const PAGES = [
  { label: 'Անհատ', path: '/', kw: 'главная home personal' },
  { label: 'Բիզնես', path: '/business', kw: 'бизнес business' },
  { label: 'Ակնթարթային վճարումներ', path: '/web-payment', kw: 'платежи payments' },
  { label: 'Մեր մասին', path: '/about', kw: 'о нас about' },
  { label: 'Նորություններ', path: '/news', kw: 'новости news' },
  { label: 'Բլոգ', path: '/blog', kw: 'блог blog' },
  { label: 'Կարիերա', path: '/career', kw: 'карьера вакансии career jobs' },
  { label: 'Վարկեր', path: '/loans', kw: 'кредиты займы loans' },
  { label: 'Քարտեր', path: '/cards', kw: 'карты cards' },
  { label: 'Ավանդներ', path: '/deposits', kw: 'вклады депозиты deposits' },
  { label: 'Հաշիվներ', path: '/accounts', kw: 'счета accounts' },
  { label: 'Փոխանցումներ', path: '/transfers', kw: 'переводы transfers' },
  { label: 'Արժեթղթեր', path: '/securities', kw: 'ценные бумаги securities' },
  { label: 'EvocaSALARY', path: '/evocasalary', kw: 'зарплатный salary' },
  { label: 'EvocaTOUCH', path: '/evocatouch', kw: 'touch' },
  { label: 'Մասնաճյուղեր', path: '/branches', kw: 'филиалы отделения банкоматы branches atm' },
  { label: 'Հաճախ տրվող հարցեր', path: '/faq', kw: 'вопросы faq help помощь' },
  { label: 'Իրավական ակտեր', path: '/about/legal-acts', kw: 'legal документы' },
  { label: 'Հայտարարություններ', path: '/about/announcements', kw: 'объявления announcements' },
  { label: 'Աուդիտորական եզրակացություն', path: '/about/reports/audit', kw: 'аудит отчеты audit reports' },
  { label: 'Բաժնետերեր', path: '/about/shareholders', kw: 'акционеры shareholders' },
  { label: 'Ղեկավարություն', path: '/about/management', kw: 'руководство management' },
  { label: 'Սակագներ', path: '/about/tariffs/archive', kw: 'тарифы tariffs' },
  { label: 'Վարկային պատմություն և սքոր', path: '/loans/history', kw: 'кредитная история скор' },
  { label: 'Պարտատոմսեր', path: '/securities/bonds', kw: 'облигации bonds' },
  { label: 'EvocaINVEST', path: '/securities/evocainvest', kw: 'invest инвестиции' },
  { label: 'Անվտանգության պահարաններ', path: '/safe-deposit-boxes', kw: 'сейф ячейки safe box' },
  { label: 'Գաղտնիության քաղաքականություն', path: '/privacy-policy', kw: 'конфиденциальность privacy' },
  { label: 'Հաճախորդների իրավունքներ', path: '/customer-rights', kw: 'права клиентов rights' },
  { label: 'Ֆինանսական միջնորդ', path: '/financial-mediator', kw: 'омбудсмен mediator' },
  { label: 'EvocaONLINE', path: '/evoca-online', kw: 'online интернет-банк мобильный банк' },
];

const norm = (s) => (s || '').toString().toLowerCase().trim();

export default function SearchModal({ open, onClose }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);

  // Полный индекс: страницы + кредиты + карты + вклады
  const index = useMemo(() => {
    const items = [];
    PAGES.forEach((p) => items.push({ ...p, group: 'Էջեր' }));
    LOANS.forEach((l) => items.push({ label: l.title, path: `/loans/${l.id}`, group: 'Վարկեր', kw: l.text }));
    CARDS.forEach((c) => items.push({ label: c.title, path: `/cards/${c.id}`, group: 'Քարտեր', kw: c.text }));
    DEPOSITS.forEach((d) => items.push({ label: d.title, path: `/deposits/${d.id}`, group: 'Ավանդներ', kw: d.description }));
    return items;
  }, []);

  const results = useMemo(() => {
    const s = norm(q);
    if (!s) return [];
    const words = s.split(/\s+/);
    return index
      .map((it) => {
        const label = norm(it.label);
        const translated = norm(t(it.label)); // перевод на текущий язык (ru/en)
        const kw = norm(it.kw);
        const hay = `${label} ${translated} ${kw}`;
        if (!words.every((w) => hay.includes(w))) return null;
        // чем в заголовке — тем выше в выдаче
        const inTitle = words.every((w) => label.includes(w) || translated.includes(w));
        const starts = label.startsWith(s) || translated.startsWith(s);
        return { it, score: (starts ? 0 : inTitle ? 1 : 2) };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .slice(0, 12)
      .map((r) => r.it);
  }, [q, index, t]);

  useEffect(() => setActive(0), [q]);

  useEffect(() => {
    if (!open) return;
    setQ('');
    const id = setTimeout(() => inputRef.current?.focus(), 30);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(id);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const go = (it) => {
    if (!it) return;
    onClose();
    navigate(it.path);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') go(results[active]);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-start justify-center bg-black/50 px-4 pt-[10vh]"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
          <svg className="h-5 w-5 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t('Որոնել կայքում...')}
            className="w-full border-0 bg-transparent text-base text-gray-900 outline-none"
          />
          <button onClick={onClose} aria-label="close" className="text-2xl leading-none text-gray-400 hover:text-purple-700">
            ×
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          {!q.trim() ? (
            <p className="px-4 py-6 text-center text-gray-400">{t('Սկսեք մուտքագրել…')}</p>
          ) : results.length === 0 ? (
            <p className="px-4 py-6 text-center text-gray-500">{t('Ոչինչ չի գտնվել')}</p>
          ) : (
            <ul className="m-0 list-none p-0">
              {results.map((it, i) => (
                <li key={it.path + it.label}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(it)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left ${
                      i === active ? 'bg-purple-50 text-purple-700' : 'text-gray-800'
                    }`}
                  >
                    <span className="truncate font-medium">{t(it.label)}</span>
                    <span className="shrink-0 text-xs text-gray-400">{t(it.group)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
