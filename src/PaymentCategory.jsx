import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wifi, Tv, MonitorPlay, Radio, Globe, Smartphone, Phone, Zap, Droplets, Wrench,
  Camera, Gauge, Landmark, Building2, Coins, Wallet, CreditCard, PiggyBank, Flag, Network,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PaymentHeader, PaymentFooter } from './WebPayment';

// Страницы-продолжения для плиток на /web-payment (маршрут /web-payment/:slug)
// icon — иконка lucide-react; чтобы поставить свою картинку, добавьте поле image: 'https://...'
export const PAGES = {
  'internet-tv': {
    title: 'Ինտերնետ և TV',
    items: [
      { name: 'HyperNet', slug: 'hypernet', field: 'Բաժանորդի համար', icon: Network },
      { name: 'Team ինտերնետ', slug: 'team-internet', field: 'Բաժանորդի համար', icon: Wifi },
      { name: 'VivaCell MTS Internet', slug: 'vivacell-mts-internet', field: 'Բաժանորդի համար', icon: Globe },
      { name: 'Rostelekom', slug: 'rostelekom', field: 'Բաժանորդի համար', icon: Radio },
      { name: 'Interactive TV', slug: 'interactive-tv', field: 'Բաժանորդի համար', icon: MonitorPlay },
      { name: 'CTV', slug: 'ctv', field: 'Բաժանորդի համար', icon: Tv },
      { name: 'YOURnet', slug: 'yournet', field: 'Բաժանորդի համար', icon: Wifi },
      { name: 'Arpinet', slug: 'arpinet', field: 'Բաժանորդի համար', icon: Network },
    ],
  },
  'traffic-fines': {
    title: 'ՃՈ վճարներ',
    items: [{ name: 'Արագաչափեր և տեսախցիկներ', slug: 'speed-cameras', field: 'Որոշման համար', icon: Camera }],
  },
  'loan-organizations': {
    title: 'Վարկային կազմակերպություններ',
    items: [
      { name: 'ԲԼԵՍՍ ՈՒՎԿ', slug: 'bless', field: 'Պայմանագրի համար', icon: Landmark },
      { name: 'Պրեմիում Կրեդիտ ՈՒՎԿ', slug: 'premium-credit', field: 'Պայմանագրի համար', icon: Building2 },
      { name: 'ՖԻՆԿԱ ՈՒՎԿ', slug: 'finca', field: 'Պայմանագրի համար', icon: Coins },
      { name: 'Միկրո Կապիտալ ՈՒՎԿ', slug: 'micro-capital', field: 'Պայմանագրի համար', icon: PiggyBank },
    ],
  },
  events: {
    title: 'Միջոցառումներ',
    items: [],
  },
  evocabank: {
    title: 'EVOCABANK',
    accent: true,
    items: [
      { name: 'Վարկի մարում', slug: 'loan-repayment', field: 'Վարկի համար', icon: Coins },
      { name: 'Հաշվի համալրում', slug: 'account-topup', field: 'Հաշվեհամար', icon: Wallet },
      { name: 'Քարտի համալրում', slug: 'card-topup', field: 'Քարտի համար', icon: CreditCard },
    ],
  },
  'international-operators': {
    title: 'Միջազգային բջջային օպերատորներ',
    items: [
      { name: 'Goodline', slug: 'goodline', field: 'Հեռախոսահամար', icon: Smartphone },
      { name: 'Yota', slug: 'yota', field: 'Հեռախոսահամար', icon: Smartphone },
      { name: 'Վրացական', slug: 'georgian', field: 'Հեռախոսահամար', icon: Flag },
      { name: 'Ռուսական', slug: 'russian', field: 'Հեռախոսահամար', icon: Flag },
    ],
  },
  utilities: {
    title: 'Կոմունալ վճարումներ',
    items: [
      { name: 'Հեռախոս', slug: 'phone', field: 'Հեռախոսահամար', icon: Phone },
      { name: 'Լույս', slug: 'electricity', field: 'Բաժանորդի համար', icon: Zap },
      { name: 'Ջուր', slug: 'water', field: 'Բաժանորդի համար', icon: Droplets },
      { name: 'Գազի սպառում', slug: 'gas-usage', field: 'Բաժանորդի համար', icon: Gauge },
      { name: 'Գազի սպասարկում', slug: 'gas-service', field: 'Բաժանորդի համար', icon: Wrench },
    ],
  },
};

export default function PaymentCategory() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const page = PAGES[slug];
  if (!page) return <Navigate to="/web-payment" replace />;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <PaymentHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-6">
          {/* Хлебные крошки */}
          <nav className="mb-6 flex items-center gap-3 text-sm sm:mb-10" aria-label="breadcrumb">
            <Link to="/web-payment" style={{ color: '#7000ff', textDecoration: 'none' }}>{t('Գլխավոր')}</Link>
            <span className="text-[#7000ff]">/</span>
            <span className="text-gray-500">{t(page.title)}</span>
          </nav>

          <h1
            className="text-center"
            style={{ marginBottom: 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: page.accent ? '#7000ff' : '#111', fontSize: 'clamp(1.5rem, 1.1rem + 1.6vw, 2.2rem)' }}
          >
            {t(page.title)}
          </h1>

          {page.items.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-[30px]">
              {page.items.map(({ name, slug: itemSlug, icon: Icon, image }) => (
                <Link
                  key={name}
                  to={`/web-payment/${slug}/${itemSlug}`}
                  className="flex w-[calc(50%-8px)] flex-col items-center gap-5 rounded-2xl border-0 bg-white px-3 py-8 text-center no-underline shadow-sm transition-shadow hover:no-underline hover:shadow-md sm:w-[270px] sm:px-6 sm:py-10"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50" style={{ color: '#7000ff' }}>
                    {image ? <img src={image} alt={t(name)} className="h-14 w-14 object-contain" /> : <Icon size={40} strokeWidth={1.6} />}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{t(name)}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <PaymentFooter />
    </div>
  );
}
