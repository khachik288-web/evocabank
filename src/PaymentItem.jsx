import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PaymentHeader, PaymentFooter } from './WebPayment';
import { PAGES } from './PaymentCategory';

// Страница конкретной услуги: /web-payment/:slug/:item
export default function PaymentItem() {
  const { t } = useTranslation();
  const { slug, item: itemSlug } = useParams();
  const [value, setValue] = useState('');

  const page = PAGES[slug];
  const item = page?.items.find((i) => i.slug === itemSlug);
  if (!page || !item) return <Navigate to={page ? `/web-payment/${slug}` : '/web-payment'} replace />;

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: подключить API проверки/оплаты
  };

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'linear-gradient(180deg, #f4f3f6 0%, #f7f1ff 100%)' }}>
      <PaymentHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-6">
          <nav className="mb-6 flex flex-wrap items-center gap-3 text-sm sm:mb-10" aria-label="breadcrumb">
            <Link to="/web-payment" style={{ color: '#7000ff', textDecoration: 'none' }}>{t('Գլխավոր')}</Link>
            <span className="text-[#7000ff]">/</span>
            <Link to={`/web-payment/${slug}`} style={{ color: '#7000ff', textDecoration: 'none' }}>{t(page.title)}</Link>
            <span className="text-[#7000ff]">/</span>
            <span className="text-gray-500">{t(item.name)}</span>
          </nav>

          <h1
            className="text-center"
            style={{ margin: 'clamp(24px, 6vw, 64px) 0 clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#000', fontSize: 'clamp(1.5rem, 1.1rem + 1.6vw, 2.2rem)' }}
          >
            {t(item.name)}
          </h1>

          <form onSubmit={onSubmit} className="mx-auto w-full max-w-[400px]">
            <label htmlFor="payment-field" className="mb-2 block text-sm text-gray-800">
              {t(item.field)}
            </label>
            <input
              id="payment-field"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mb-5 block w-full rounded-md border border-gray-200 bg-white px-3 text-gray-900 outline-none focus:border-[#7000ff]"
              style={{ height: 42 }}
            />
            <button
              type="submit"
              className="block w-full rounded-md border-0 text-sm font-medium text-white hover:opacity-90"
              style={{ height: 43, background: '#6a00c8', cursor: 'pointer' }}
            >
              {t('Շարունակել')}
            </button>
          </form>
        </div>
      </main>

      <PaymentFooter />
    </div>
  );
}
