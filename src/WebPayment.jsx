import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

// --- Header специально для страницы онлайн-оплаты (без общего Header сайта) ---
function PaymentHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800 no-underline hover:no-underline">
            evoc<span className="text-purple-700">a</span>
          </Link>
          <span className="hidden sm:inline text-gray-400 text-base">Online payment</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+37410605555" className="text-gray-800 text-sm no-underline hover:no-underline hover:text-purple-700">
            +374 10 605555
          </a>
          <button aria-label="language" className="text-gray-500 hover:text-purple-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
            </svg>
          </button>
          <button className="rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-800">
            Պատմություն
          </button>
        </div>
      </div>
    </header>
  );
}

// --- Footer специально для страницы онлайн-оплаты (без общего Footer сайта) ---
function PaymentFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-bold" style={{ color: '#7000ff' }}>
              evoca<span className="font-normal text-gray-800">BANK</span>
            </h3>
            <p className="mt-3 text-xs text-gray-500">
              Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Copyright &copy; 1990-2026 Evocabank
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-0">ք. Երևան, 0010,</p>
            <p>Հանրապետության 44/2</p>
          </div>

          <div className="text-sm">
            <a href="mailto:hello@evoca.am" className="block text-purple-700 no-underline hover:underline">
              hello@evoca.am
            </a>
            <a href="tel:+37410605555" className="block text-gray-700 no-underline hover:underline">
              +374 10 605555
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://evoca.am"
              alt="QR code"
              className="h-[90px] w-[90px]"
            />
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-3">
              <a href="#fb" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-700 hover:text-white">
                <FaFacebookF size={14} />
              </a>
              <a href="#ig" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-700 hover:text-white">
                <FaInstagram size={14} />
              </a>
              <a href="#yt" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-700 hover:text-white">
                <FaYoutube size={14} />
              </a>
              <a href="#li" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-700 hover:text-white">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#pin" aria-label="Pinterest" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-700 hover:text-white">
                <FaPinterestP size={14} />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-9" />
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-9" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Данные категорий оплаты ---
const PAYMENT_CATEGORIES = [
  {
    title: 'EVOCABANK',
    image: 'https://resource.evoca.am/images/WebPayment/evoca.png',
  },
  {
    title: 'Միջազգային բջջային օպերատորներ',
    image: 'https://resource.evoca.am/images/WebPayment/international.png',
  },
  {
    title: 'Կոմունալ վճարումներ',
    image: 'https://resource.evoca.am/images/WebPayment/utility.png',
  },
  {
    title: 'Ինտերնետ և TV',
    image: 'https://resource.evoca.am/images/WebPayment/internettv.png',
  },
  {
    title: 'ՃՈ վճարներ',
    image: 'https://resource.evoca.am/images/WebPayment/roadpolice.png',
  },
  {
    title: 'Վարկային կազմակերպություններ',
    image: 'https://resource.evoca.am/images/WebPayment/loan.png',
  },
  {
    title: 'Միջոցառումներ',
    image: 'https://resource.evoca.am/images/WebPayment/event.png',
  },
];

// --- Основная страница "Անընդհատ ֆինանսավորումներ" (онлайн-оплата) ---
function WebPayment() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PaymentHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="mb-10 text-center text-3xl font-bold text-gray-900">Գլխավոր</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-[70px]">
            {PAYMENT_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                type="button"
                className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-white px-6 py-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <img src={cat.image} alt={cat.title} className="h-20 w-20 object-contain" />
                <span className="text-sm font-medium text-gray-800">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <PaymentFooter />
    </div>
  );
}

export default WebPayment;
