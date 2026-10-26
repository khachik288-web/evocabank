import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wifi, Tv, MonitorPlay, Radio, Globe, Smartphone, Phone, Zap, Droplets, Wrench,
  Camera, Gauge, Landmark, Building2, Coins, Wallet, CreditCard, PiggyBank, Flag, Network,
} from 'lucide-react';
import { PaymentHeader, PaymentFooter } from './WebPayment';

// Страницы-продолжения для плиток на /web-payment (маршрут /web-payment/:slug)
// icon — иконка lucide-react; чтобы поставить свою картинку, добавьте поле image: 'https://...'
const PAGES = {
  'internet-tv': {
    title: 'Ինտերնետ և TV',
    items: [
      { name: 'HyperNet', icon: Network },
      { name: 'Team ինտերնետ', icon: Wifi },
      { name: 'VivaCell MTS Internet', icon: Globe },
      { name: 'Rostelekom', icon: Radio },
      { name: 'Interactive TV', icon: MonitorPlay },
      { name: 'CTV', icon: Tv },
      { name: 'YOURnet', icon: Wifi },
      { name: 'Arpinet', icon: Network },
    ],
  },
  'traffic-fines': {
    title: 'ՃՈ վճարներ',
    items: [{ name: 'Արագաչափեր և տեսախցիկներ', icon: Camera }],
  },
  'loan-organizations': {
    title: 'Վարկային կազմակերպություններ',
    items: [
      { name: 'ԲԼԵՍՍ ՈՒՎԿ', icon: Landmark },
      { name: 'Պրեմիում Կրեդիտ ՈՒՎԿ', icon: Building2 },
      { name: 'ՖԻՆԿԱ ՈՒՎԿ', icon: Coins },
      { name: 'Միկրո Կապիտալ ՈՒՎԿ', icon: PiggyBank },
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
      { name: 'Վարկի մարում', icon: Coins },
      { name: 'Հաշվի համալրում', icon: Wallet },
      { name: 'Քարտի համալրում', icon: CreditCard },
    ],
  },
  'international-operators': {
    title: 'Միջազգային բջջային օպերատորներ',
    items: [
      { name: 'Goodline', icon: Smartphone },
      { name: 'Yota', icon: Smartphone },
      { name: 'Վրացական', icon: Flag },
      { name: 'Ռուսական', icon: Flag },
    ],
  },
  utilities: {
    title: 'Կոմունալ վճարումներ',
    items: [
      { name: 'Հեռախոս', icon: Phone },
      { name: 'Լույս', icon: Zap },
      { name: 'Ջուր', icon: Droplets },
      { name: 'Գազի սպառում', icon: Gauge },
      { name: 'Գազի սպասարկում', icon: Wrench },
    ],
  },
};

export default function PaymentCategory() {
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
            <Link to="/web-payment" style={{ color: '#7000ff', textDecoration: 'none' }}>Գլխավոր</Link>
            <span className="text-[#7000ff]">/</span>
            <span className="text-gray-500">{page.title}</span>
          </nav>

          <h1
            className="text-center"
            style={{ marginBottom: 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: page.accent ? '#7000ff' : '#111', fontSize: 'clamp(1.5rem, 1.1rem + 1.6vw, 2.2rem)' }}
          >
            {page.title}
          </h1>

          {page.items.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-[30px]">
              {page.items.map(({ name, icon: Icon, image }) => (
                <button
                  key={name}
                  type="button"
                  className="flex w-[calc(50%-8px)] flex-col items-center gap-5 rounded-2xl border-0 bg-white px-3 py-8 text-center shadow-sm transition-shadow hover:shadow-md sm:w-[270px] sm:px-6 sm:py-10"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50" style={{ color: '#7000ff' }}>
                    {image ? <img src={image} alt={name} className="h-14 w-14 object-contain" /> : <Icon size={40} strokeWidth={1.6} />}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <PaymentFooter />
    </div>
  );
}
