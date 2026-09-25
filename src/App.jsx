import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './App.css';



// --- 1. HEADER ---
function Header() {
  const topLinks = [
    'Անձնական',
    'Բիզնես',
    'Անընդհատ ֆինանսավորումներ',
    'Մեր մասին',
    'Նորություններ',
    'Բլոգ',
    'Կարիերա',
  ]
 
  const mainLinks = [
    'Վարկեր',
    'Քարտեր',
    'Ավանդներ',
    'Հաշիվներ',
    'Փոխանցումներ',
    'Արժեթղթեր',
    'EvocaSALARY',
    'EvocaTOUCH',
  ]
 
  return (
    <header className="w-full text-sm">
      {/* Top thin bar */}
      <div className="border-b border-gray-200 px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex items-center">
            {topLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`relative px-4 py-3 text-gray-700 no-underline hover:text-purple-700 no-underline hover:no-underline ${
                  i === 0
                    ? 'text-purple-700 after:absolute after:left-0 after:right-0 after:-bottom-px after:h-0.5 after:bg-purple-700'
                    : ''
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
 
          <div className="flex items-center gap-5 text-gray-600">
            <a href="#" className="flex items-center gap-1 text-purple-700 no-underline hover:no-underline">
              Առցանց հայտեր
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#" className="flex items-center gap-1 text-purple-700 no-underline no-underline hover:no-underline">
              Հետադարձ կապ
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
 
            <button aria-label="location" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
              </svg>
            </button>
            <button aria-label="help" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.5 9a2.5 2.5 0 115 .5c0 1.5-2.5 1.5-2.5 3" />
                <line x1="12" y1="17" x2="12" y2="17" />
              </svg>
            </button>
            <button aria-label="language" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
              </svg>
            </button>
            <button aria-label="search" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button aria-label="menu" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
 
      {/* Main bar */}
      <div className="px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-bold tracking-tight text-gray-800">
              evoc<span className="text-purple-700">a</span>
            </span>
            <nav className="flex items-center gap-7 font-medium">
              {mainLinks.map((link, i) => (
                <a
                  key={link}
                  href="#"
                  className={`no-underline hover:no-underline ${
                    i === 0 ? 'text-purple-700' : 'text-gray-800 hover:text-purple-700'
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
 
          <button className="rounded-full bg-purple-700 px-6 py-2.5 font-semibold text-white hover:bg-purple-800">
            EvocaONLINE
          </button>
        </div>
      </div>
    </header>
  )
}

// --- 2. SLIDER ---
function Slider() {
  const slides = [
    {
      bg: 'bg-purple-700',
      title: 'Evoca Աշխատավարձային Նախագիծ',
      text: 'Բեր աշխատավարձդ Evoca: Ստացիր շատ ավելին...',
      textColor: 'text-white',
      subTextColor: 'text-purple-100',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image: 'https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png',
    },
    {
      bg: 'bg-gray-200',
      title: 'Evoca Travel Card',
      text: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
      textColor: 'text-gray-900',
      subTextColor: 'text-gray-600',
      buttonClass: 'bg-purple-700 text-white hover:bg-purple-800',
      image: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
    },
    {
      bg: 'bg-black',
      title: 'Կարճ հեռախոսահամարով՝ 8444',
      text: 'Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...',
      textColor: 'text-white',
      subTextColor: 'text-gray-300',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image: 'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
    },
    {
      bg: 'bg-gray-800',
      title: 'Visa Vision',
      text: 'Ձեռք բեր Visa Vision քարտը քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
      textColor: 'text-white',
      subTextColor: 'text-gray-300',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image: 'https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [flashKey, setFlashKey] = useState(0);

  const goTo = (index) => {
    const nextIndex = (index + slides.length) % slides.length;
    setCurrent(nextIndex);
    setFlashKey((k) => k + 1);
  };

  const goNext = () => goTo(current + 1);
  const goPrev = () => goTo(current - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div className={`relative overflow-hidden transition-colors duration-500 ${slide.bg}`}>
      <div key={flashKey} className="pointer-events-none absolute inset-0 z-20 bg-white animate-flash" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className={`mb-4 text-3xl font-semibold md:text-4xl ${slide.textColor}`}>
            {slide.title}
          </h1>
          <p className={`mb-8 text-base ${slide.subTextColor}`}>{slide.text}</p>
          <button className={`rounded-full px-6 py-3 font-semibold transition-colors ${slide.buttonClass}`}>
            Իմանալ ավելին
          </button>
        </div>

        <div className="w-full max-w-md">
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-5 pb-8">
        <button
          aria-label="previous slide"
          onClick={goPrev}
          className="flex h-9 w-9 items-center justify-center text-white transition hover:opacity-70"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          aria-label="next slide"
          onClick={goNext}
          className="flex h-9 w-9 items-center justify-center text-white transition hover:opacity-70"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// --- 3. BIOMETRIC ---
function BiometricFaceMask() {
  return (
    <svg
      viewBox="0 0 203 274"
      className="facemask-pulse pointer-events-none absolute left-1/2 top-[6%] h-[88%] w-auto -translate-x-1/2"
    >
      <path
        d="M57.8514 4L25.7432 29.954M57.8514 4H96.4257M57.8514 4L68.8677 36.5M135 4L169.338 29.954M135 4L134.743 38.8637M135 4H96.4257M169.338 29.954L198.324 81.7496M169.338 29.954L159.527 65.2334M198.324 81.7496L201 132.792M198.324 81.7496L159.527 65.2334M198.324 81.7496L179.149 119.917M201 132.792L183.743 203.576M201 132.792L179.149 119.917M201 132.792L170.453 167.881M183.743 203.576L159.527 248.877M183.743 203.576L119.838 176.206M183.743 203.576L144.321 221.036M183.743 203.576L170.453 167.881M159.527 248.877L130.541 269.641M159.527 248.877L144.321 221.036M130.541 269.641L82.2297 272M130.541 269.641L144.321 221.036M130.541 269.641L97.0946 244.63M82.2297 272L43.5676 244.63M82.2297 272L57.8514 221.036M82.2297 272L97.0946 244.63M43.5676 244.63L22.5135 210.654M43.5676 244.63L57.8514 221.036M22.5135 210.654L15.4865 167.24M22.5135 210.654L57.8514 221.036M22.5135 210.654L78.7973 176.206M15.4865 167.24L3 132.792M15.4865 167.24L48.0405 132.186M15.4865 167.24L78.7973 176.206M3 132.792V78.4463M3 132.792L21.7297 118.029M3 78.4463L25.7432 29.954M3 78.4463L39.5676 65.2334M3 78.4463L21.7297 118.029M25.7432 29.954L81.4865 73.7274M25.7432 29.954L39.5676 65.2334M81.4865 73.7274H114.486M81.4865 73.7274L39.5676 65.2334M81.4865 73.7274L89.0676 109.535M81.4865 73.7274L68.8677 36.5M114.486 73.7274L159.527 65.2334M114.486 73.7274L110.919 109.535M114.486 73.7274L134.743 38.8637M159.527 65.2334L134.743 38.8637M179.149 119.917L150.162 132.186M150.162 132.186L119.838 176.206M150.162 132.186L110.919 109.535M150.162 132.186L170.453 167.881M119.838 176.206L144.321 221.036M119.838 176.206L100.095 161.106M119.838 176.206L115.378 139.871M119.838 176.206L170.453 167.881M144.321 221.036L97.0946 244.63M97.0946 244.63L57.8514 221.036M89.0676 109.535L48.0405 132.186M89.0676 109.535H110.919M89.0676 109.535L84.9324 139.871M78.7973 176.206L57.8514 221.036M78.7973 176.206L48.0405 132.186M78.7973 176.206L100.095 161.106M78.7973 176.206L84.9324 139.871M21.7297 118.029L48.0405 132.186M110.919 109.535L115.378 139.871M100.095 161.106L84.9324 139.871M100.095 161.106L115.378 139.871M134.743 38.8637L96.4257 4M96.4257 4L68.8677 36.5"
        stroke="white"
        strokeWidth="0.7"
      />
      {[
        [57, 4], [69, 36], [39, 65], [96, 3], [135, 38], [134, 4], [169, 30],
        [160, 65], [114, 73], [198, 82], [150, 132], [100, 161], [78, 176],
        [120, 176], [48, 131], [3, 133], [21, 117], [16, 167], [23, 211],
        [58, 221], [144, 222], [183, 203], [200, 133], [179, 119], [170, 168],
        [159, 249], [131, 269], [82, 271], [44, 244], [97, 245], [85, 140],
        [115, 141], [81, 73], [26, 30], [3, 79], [89, 110], [111, 110],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="white" />
      ))}
    </svg>
  );
}

function BiometricFaces() {
  const faces = [
    'https://www.evoca.am/img/temp/biometric/face1.png',
    'https://www.evoca.am/img/temp/biometric/face2.png',
    'https://www.evoca.am/img/temp/biometric/face3.png',
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % faces.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [faces.length]);

  return (
    <>
      {faces.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Face scan ${i + 1}`}
          className={`absolute left-1/2 top-[6%] h-[88%] w-auto -translate-x-1/2 object-contain transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <BiometricFaceMask />
    </>
  );
}

function Biometric() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-center md:gap-20">
        <div className="relative h-[420px] w-[340px] shrink-0">
          <div
            className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />

          <svg viewBox="0 0 360 440" className="absolute inset-0 h-full w-full drop-shadow-lg">
            <path
              d="M 70,30 L 290,30 Q 330,30 315.32,67.2 L 194.68,372.8 Q 180,410 165.32,372.8 L 44.68,67.2 Q 30,30 70,30 Z"
              className="fill-purple-700"
            />
          </svg>

          <BiometricFaces />
        </div>

        <div className="max-w-md text-center md:text-left">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="mb-6 text-base text-gray-600">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center md:items-start">
            <img
              src="https://www.evoca.am/img/biometric-section-QR-Code.png"
              alt="QR code"
              className="h-32 w-32 object-contain"
            />
            <button className="rounded-full bg-purple-700 px-6 py-3 font-semibold text-white hover:bg-purple-800 transition-colors">
              Իմանալ ավելին
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. CARDS SHOWCASE ---
const CARDS_DATA = [
  { id: 1, name: 'Visa Classic', img: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png' },
  { id: 2, name: 'Mastercard Standard', img: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png' },
  { id: 3, name: 'Visa Digital', img: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png' },
  { id: 4, name: 'Arca Classic', img: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png' },
  { id: 5, name: 'Arca UnionPay Co-badge', img: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png' },
  { id: 6, name: 'Wilco Visa Infinite', img: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png' },
  { id: 7, name: 'Evoca Gift Card', img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' },
  { id: 8, name: 'Digital Gift Card', img: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png' },
];

function TiltCard({ card }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    const rotateX = y * -15;
    const rotateY = x * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.96, 0.96, 0.96)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    });
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-[450px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="cursor-pointer z-10"
      >
        <img
          src={card.img}
          alt={card.name}
          className="w-[415px] max-w-full h-auto object-cover rounded-xl shadow-2xl"
        />
      </div>
      <div className="absolute -bottom-8 w-[80%] h-8 bg-black/10 blur-xl rounded-[100%] pointer-events-none"></div>
    </div>
  );
}

function CardsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUp = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : CARDS_DATA.length - 1));
  const handleDown = () => setActiveIndex((prev) => (prev < CARDS_DATA.length - 1 ? prev + 1 : 0));

  return (
    <section className="bg-[#f3f6fa] py-20 px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex flex-col items-center shrink-0 w-[200px]">
          <button onClick={handleUp} className="text-purple-700 hover:text-purple-900 transition mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <div className="h-[420px] overflow-hidden relative w-full mask-image-vertical">
            <div
              className="flex flex-col gap-6 absolute w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(calc(210px - 60px - ${activeIndex * 144}px))` }}
            >
              {CARDS_DATA.map((card, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveIndex(index)}
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-95 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-[140px] h-auto object-cover rounded-md shadow-sm"
                    />
                    <span className="text-xs font-semibold text-gray-800 mt-3 text-center">
                      {card.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <button onClick={handleDown} className="text-purple-700 hover:text-purple-900 transition mt-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex justify-center perspective-1000 w-full">
          <TiltCard card={CARDS_DATA[activeIndex]} />
        </div>

        <div className="w-full max-w-sm text-center md:text-left shrink-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 transition-all duration-300">
            {CARDS_DATA[activeIndex].name}
          </h2>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md">
            Մանրամասն
          </button>
        </div>
      </div>
    </section>
  );
}

// --- 5. CALCULATOR ---
const formatMoney = (num, minDecimals = 0, maxDecimals = 2) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
  }).format(num);
};

function RangeInput({ label, value, min, max, unit, onChange, step = 1 }) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3 bg-white shadow-sm">
        <span className="text-gray-700 text-sm">{label}</span>
        <div className="flex items-center gap-1 font-bold text-gray-900 text-lg">
          <input
            type="text"
            className="w-24 text-right outline-none bg-transparent"
            value={formatMoney(value)}
            onChange={(e) => {
              const val = Number(e.target.value.replace(/,/g, ''));
              if (!isNaN(val)) onChange(Math.min(Math.max(val, min), max));
            }}
          />
          {unit && <span>{unit}</span>}
        </div>
      </div>

      <div className="relative w-full h-1 mt-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-purple-700 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-purple-700 pointer-events-none -translate-x-1/2"
          style={{ left: `${percent}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>{formatMoney(min)} {unit && unit.replace('%', '')}</span>
        <span>{formatMoney(max)} {unit && unit.replace('%', '')}</span>
      </div>
    </div>
  );
}

function Calculator() {
  const [activeTab, setActiveTab] = useState('loan');
  const [showModal, setShowModal] = useState(false);

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanRate, setLoanRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(24);
  const [loanType, setLoanType] = useState('differentiated');

  const [depositAmount, setDepositAmount] = useState(100000);
  const [depositRate, setDepositRate] = useState(12);
  const [depositTerm, setDepositTerm] = useState(91);

  const dailyInterest = (depositAmount * (depositRate / 100)) / 365;
  const totalGrossInterest = dailyInterest * depositTerm;
  const netInterest = totalGrossInterest * 0.9;

  const generateLoanSchedule = () => {
    let schedule = [];
    let totalInterestPaid = 0;
    let principalRemaining = loanAmount;
    let monthlyRate = loanRate / 100 / 12;

    if (loanType === 'annuity') {
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
      for (let i = 1; i <= loanTerm; i++) {
        let interest = principalRemaining * monthlyRate;
        let principal = monthlyPayment - interest;
        principalRemaining -= principal;
        totalInterestPaid += interest;
        schedule.push({ month: i, interest, principal, total: monthlyPayment });
      }
    } else {
      const monthlyPrincipal = loanAmount / loanTerm;
      for (let i = 1; i <= loanTerm; i++) {
        let interest = principalRemaining * monthlyRate;
        principalRemaining -= monthlyPrincipal;
        totalInterestPaid += interest;
        schedule.push({ month: i, interest, principal: monthlyPrincipal, total: monthlyPrincipal + interest });
      }
    }

    return { schedule, totalInterestPaid, totalPayment: loanAmount + totalInterestPaid };
  };

  const loanData = generateLoanSchedule();

  return (
    <section className="bg-[#f8f9fc] py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Հաշվիչներ</h2>

        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('loan')}
            className={`px-8 py-3 rounded-t-xl font-semibold transition-colors ${activeTab === 'loan' ? 'bg-white text-gray-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] relative z-10' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Վարկ
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`px-8 py-3 rounded-t-xl font-semibold transition-colors ${activeTab === 'deposit' ? 'bg-white text-gray-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] relative z-10' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Ավանդ
          </button>
        </div>

        <div className="bg-white rounded-2xl rounded-tl-none shadow-xl p-6 sm:p-8 relative z-20">
          {activeTab === 'loan' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <RangeInput label="Վարկի գումար" value={loanAmount} min={0} max={50000000} onChange={setLoanAmount} step={10000} />
                <RangeInput label="Ժամկետ" value={loanTerm} min={1} max={1200} unit=" ամիս" onChange={setLoanTerm} />
                <RangeInput label="Տարեկան տոկոսադրույք" value={loanRate} min={1} max={36} unit=" %" onChange={setLoanRate} />

                <div className="mb-6">
                  <span className="text-gray-400 text-sm block mb-3">Մարման ձև</span>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${loanType === 'differentiated' ? 'border-purple-700' : 'border-gray-300'}`}>
                        {loanType === 'differentiated' && <div className="w-2.5 h-2.5 bg-purple-700 rounded-full"></div>}
                      </div>
                      <input type="radio" className="hidden" checked={loanType === 'differentiated'} onChange={() => setLoanType('differentiated')} />
                      <span className="text-gray-800 font-medium">Զսպանակաձև</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${loanType === 'annuity' ? 'border-purple-700' : 'border-gray-300'}`}>
                        {loanType === 'annuity' && <div className="w-2.5 h-2.5 bg-purple-700 rounded-full"></div>}
                      </div>
                      <input type="radio" className="hidden" checked={loanType === 'annuity'} onChange={() => setLoanType('annuity')} />
                      <span className="text-gray-800 font-medium">Անուիտետ</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-100 pt-6">
                <p className="text-gray-400 text-xs text-center md:text-left mb-4 md:mb-0 max-w-sm">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#5c00b3] hover:bg-purple-800 text-white font-semibold py-3 px-10 rounded-full transition-colors w-full md:w-auto"
                >
                  Հաշվել
                </button>
              </div>
            </div>
          )}

          {activeTab === 'deposit' && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <RangeInput label="Ներդրվող գումար" value={depositAmount} min={0} max={50000000} onChange={setDepositAmount} step={10000} />
                <RangeInput label="Տարեկան տոկոսադրույք" value={depositRate} min={1} max={36} unit=" %" onChange={setDepositRate} />
                <RangeInput label="Ավանդի ժամկետ" value={depositTerm} min={91} max={1095} unit=" օր" onChange={setDepositTerm} />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700 text-sm max-w-[200px]">Օրական կտրվածքով հաշվարկվող տոկոսագումար *</span>
                  <span className="font-bold text-gray-900">{formatMoney(dailyInterest, 2)}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700 text-sm max-w-[200px]">Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ</span>
                  <span className="font-bold text-gray-900">{formatMoney(totalGrossInterest, 2)}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700 text-sm max-w-[200px]">Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ</span>
                  <span className="font-bold text-gray-900">{formatMoney(netInterest, 2)}</span>
                </div>
                <div className="mt-4 flex items-start gap-2 text-gray-400 text-xs">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներն հարկվում են 10% եկամտային հարկի չափով</p>
                </div>
              </div>

              <div className="md:col-span-2 pt-6 border-t border-gray-100 mt-[-10px]">
                <p className="text-gray-400 text-xs">Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative animate-fade-in-up">
            <button onClick={() => setShowModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-6 sm:p-8 pb-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Վարկային հաշվիչի արդյունքներ</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#f3f4f6] rounded-xl overflow-hidden mb-6">
                <div className="p-4 border-r border-b sm:border-b-0 border-white">
                  <span className="text-xs text-gray-500 block mb-1">Գումար</span>
                  <span className="font-bold text-gray-900">{formatMoney(loanAmount)}</span>
                </div>
                <div className="p-4 border-r border-b sm:border-b-0 border-white">
                  <span className="text-xs text-gray-500 block mb-1">Տարեկան տոկոսադրույք</span>
                  <span className="font-bold text-gray-900">{loanRate}%</span>
                </div>
                <div className="p-4 border-r border-white">
                  <span className="text-xs text-gray-500 block mb-1">Վարկի ժամկետը</span>
                  <span className="font-bold text-gray-900">{loanTerm}</span>
                </div>
                <div className="p-4 bg-[#eceef1]">
                  <span className="text-xs text-gray-500 block mb-1">Ողջ վճարումը</span>
                  <span className="font-bold text-gray-900">{formatMoney(loanData.totalPayment, 2)}</span>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto px-6 sm:px-8 flex-1 mb-6 custom-scrollbar">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="sticky top-0 bg-white shadow-[0_4px_2px_-2px_rgba(0,0,0,0.05)] z-10">
                  <tr>
                    <th className="py-4 font-medium text-gray-600 border-b border-gray-200">Ամիս</th>
                    <th className="py-4 font-medium text-gray-600 border-b border-gray-200">Տոկոսագումար</th>
                    <th className="py-4 font-medium text-gray-600 border-b border-gray-200">Մասնակի մարում</th>
                    <th className="py-4 font-medium text-gray-600 border-b border-gray-200">Ամսական վճար</th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.schedule.map((row) => (
                    <tr key={row.month} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 font-semibold text-gray-800">{row.month}</td>
                      <td className="py-4 text-gray-800">{formatMoney(row.interest, 2)}</td>
                      <td className="py-4 text-gray-800">{formatMoney(row.principal, 2)}</td>
                      <td className="py-4 font-bold text-gray-900">{formatMoney(row.total, 2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 sm:p-8 pt-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex font-bold text-gray-900 text-sm">
                <div className="w-1/4">Ընդամենը</div>
                <div className="w-1/4 text-blue-900">{formatMoney(loanData.totalInterestPaid, 2)}</div>
                <div className="w-1/4">{formatMoney(loanAmount)}</div>
                <div className="w-1/4 text-blue-900">{formatMoney(loanData.totalPayment, 2)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// --- 6. ONLINE BANKING BANNER ---
function OnlineBankingBanner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative w-full bg-[#5c00b3] p-10 max-[550px]:p-5 max-[550px]:pt-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 max-[550px]:gap-6 overflow-hidden">
        <div className="absolute top-10 left-10 max-[550px]:left-2 max-[550px]:top-4 w-8 h-8 max-[550px]:w-5 max-[550px]:h-5 border-[6px] max-[550px]:border-[4px] border-[#ff47d6] rounded-full opacity-80 z-0"></div>
        <div className="absolute top-20 right-10 max-[550px]:right-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] max-[550px]:border-l-[8px] max-[550px]:border-r-[8px] max-[550px]:border-b-[14px] border-transparent border-b-[#facc15] opacity-80 z-0 rotate-12"></div>
        <div className="absolute bottom-10 right-20 max-[550px]:right-4 max-[550px]:bottom-4 w-8 h-8 opacity-80 z-0 text-[#ff47d6]">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 12 L20 12 M12 4 L12 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
        </div>

        <div className="relative flex flex-col md:flex-row items-end justify-center w-full lg:w-1/2 gap-4 max-[550px]:gap-2 z-10 mt-4">
          <div className="relative w-full max-w-[480px] max-[550px]:max-w-[320px]">
            <div className="relative bg-black rounded-t-2xl max-[550px]:rounded-t-xl p-2 pb-5 max-[550px]:p-1.5 max-[550px]:pb-3 border-[3px] border-[#222] shadow-2xl z-10">
              <div className="relative aspect-video bg-gray-900 rounded-[4px] overflow-hidden group">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg"
                      alt="EvocaTOUCH Video Cover"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <svg viewBox="0 0 68 48" className="w-16 h-16 max-[550px]:w-10 max-[550px]:h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                        <path className="fill-[#ff0000] opacity-90 group-hover:opacity-100 transition-opacity" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.1 34 .1 34 .1s-21.79 0-27.1.15C3.97 2.33 2.26 4.81 1.48 7.74.1 13.06.1 24 .1 24s0 10.94 1.38 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.9 34 47.9 34 47.9s21.79 0 27.1-.15c2.93-.78 4.64-3.26 5.42-6.19C67.9 34.94 67.9 24 67.9 24s0-10.94-1.38-16.26z"/>
                        <path className="fill-white" d="M27 36l18-12-18-12v24z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <iframe
                    id="video-KwAgMHEx8ys"
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1&enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="EvocaTOUCH"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="relative h-4 max-[550px]:h-3 bg-[#b5b7ba] rounded-b-xl shadow-lg flex justify-center z-20 mx-[-4px]">
              <div className="w-24 max-[550px]:w-16 h-[6px] max-[550px]:h-[4px] bg-[#939598] rounded-b-md"></div>
            </div>
            <div className="h-1 bg-[#838588] rounded-b-3xl mx-1 shadow-2xl"></div>
          </div>

          <div className="relative w-[120px] max-[550px]:w-[85px] shrink-0 transform md:-translate-x-12 translate-y-6 max-[550px]:translate-y-2 md:translate-y-0 z-30">
            <div className="border-[5px] max-[550px]:border-[3px] border-[#1a1a1a] rounded-[24px] max-[550px]:rounded-[16px] overflow-hidden bg-black shadow-2xl relative">
              <img
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                alt="Evoca Mobile App"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 text-white z-10 flex flex-col items-center text-center lg:items-start lg:text-left mt-8 max-[550px]:mt-6 lg:mt-0 px-4 lg:px-10">
          <h2 className="text-3xl max-[550px]:text-2xl font-bold mb-4 max-[550px]:mb-2 tracking-wide text-[#f4f4f4]">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          <p className="text-[15px] max-[550px]:text-[13px] leading-relaxed mb-8 max-[550px]:mb-6 text-[#e2d5f8] max-w-md font-light">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
          </p>

          <button className="bg-white text-[#5c00b3] px-8 max-[550px]:px-6 py-3.5 max-[550px]:py-3 rounded-full font-bold max-[550px]:text-sm shadow-lg hover:bg-gray-100 transition-colors mb-10 max-[550px]:mb-8 w-max max-[550px]:w-full">
            Դառնալ հաճախորդ
          </button>
        </div>
      </div>
    </section>
  );
}

// --- 7. PARTNERS ---
const PARTNERS_DATA = [
  { id: 1, name: 'Partner 1', logo: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png', url: '#' },
  { id: 2, name: 'Partner 2', logo: 'https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png', url: '#' },
  { id: 3, name: 'Partner 3', logo: 'https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png', url: '#' },
  { id: 4, name: 'Partner 4', logo: 'https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png', url: '#' },
  { id: 5, name: 'Partner 5', logo: 'https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png', url: '#' },
  { id: 6, name: 'Partner 6', logo: 'https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png', url: '#' },
];

function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else if (window.innerWidth < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, PARTNERS_DATA.length - visibleCount);

  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full">
        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Գործընկերներ
          </h2>
          <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed mb-6 lg:mb-8">
            Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն:
          </p>
        </div>

        <div className="relative min-w-0 flex-1 w-full bg-[#f8f9fc] rounded-2xl py-8 px-3 sm:px-6 flex items-center shadow-sm">
          <div className="flex items-center w-full gap-3 z-20 min-w-0">
            <button onClick={handlePrev} className="text-purple-700 p-2">‹</button>
            <div className="overflow-hidden flex-1 min-w-0">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {PARTNERS_DATA.map((partner) => (
                  <div
                    key={partner.id}
                    className="shrink-0 px-4 flex items-center justify-center"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <img src={partner.logo} alt={partner.name} className="max-h-12 object-contain" />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} className="text-purple-700 p-2">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 8. BEST FROM EVOCA ---
function BestFromEvoca() {
  const cards = [
    { tag: 'Թվային քարտեր', title: 'Evoca Digital քարտ', desc: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով։' },
    { tag: 'Նվեր քարտեր', title: 'Evoca Gift Card', desc: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:' },
    { tag: 'Նոր հավելված', title: 'EvocaTOUCH 2', desc: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ։' },
    { tag: 'Օնլայն վճարումներ', title: 'Արագ online վճարումներ', desc: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով։' },
  ];

  return (
    <section className="relative overflow-hidden bg-purple-700 py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-white md:text-4xl text-center md:text-left">
          Լավագույնը Evocabank-ից
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6 shadow-lg">
              <span className="mb-3 inline-block rounded bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
                {c.tag}
              </span>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 9. NEWS SECTION ---
const NEWS_DATA = [
  { id: 1, tag: 'Կենսակերպ', title: 'Դիլիջան, մենք գալիս ենք', date: '11.09.2026', image: 'https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png' },
  { id: 2, tag: 'Կենսակերպ', title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր', date: '03.09.2026', image: 'https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png' },
  { id: 3, tag: 'Պրոդուկտներ', title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով', date: '21.08.2026', image: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png' },
];

function NewsSection() {
  return (
    <section className="bg-[#eef2fb] py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">Վերջին նորությունները</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_DATA.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-sm p-4">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover rounded-xl mb-4" />
              <span className="text-xs font-semibold text-purple-700">{item.tag}</span>
              <h3 className="text-lg font-bold my-2 text-gray-900">{item.title}</h3>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EVOCA_REVIEWS_DATA = [
  {
    id: 1,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով",
    author: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
  },
  {
    id: 2,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
    author: "Սուսաննա Վանյան",
    role: "Հաճախորդ"
  },
  {
    id: 3,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման",
    author: "Նունե Գևորգյան",
    role: "Հաճախորդ"
  },
  {
    id: 4,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի",
    author: "Արամ Ագարյան",
    role: "Indigo Branding-ի հիմնադիր"
  },
  {
    id: 5,
    text: "Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:",
    author: "Էլեն Վարդանյան",
    role: "Հաճախորդ"
  }
];

function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автопереключение слайдов каждые 5 секунд
  useEffect(() => {
    if (!EVOCA_REVIEWS_DATA.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EVOCA_REVIEWS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const review = EVOCA_REVIEWS_DATA[currentIndex];

  if (!review) return null;

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Левый декоративный элемент */}
      <div className="position-absolute start-0 top-50 translate-middle-y d-none d-lg-block ps-5 opacity-75">
        <div className="d-flex align-items-center gap-3">
          <div style={{ fontSize: '80px', lineHeight: 1 }}>👌</div>
          <div style={{ fontSize: '40px', color: '#7000ff', fontWeight: 'bold' }}>&#8221;</div>
        </div>
        <div style={{ width: '40px', height: '10px', borderBottom: '3px dashed #7000ff', marginTop: '10px' }}></div>
      </div>

      {/* Правый декоративный элемент (плавающий палец вверх) */}
      <div className="position-absolute end-0 top-50 translate-middle-y d-none d-lg-block pe-5">
        <div className="d-flex align-items-center gap-3">
          <div style={{ fontSize: '40px', color: '#7000ff', fontWeight: 'bold' }}>&#8222;</div>
          <div className="review__bg-item animate-box review__bg-item--2 pa floating-hand">
            <img 
              src="https://www.evoca.am/img/reviews/hand1.png" 
              alt="Hand thumbs up" 
              style={{ maxHeight: '120px', objectFit: 'contain' }}
            />
          </div>
        </div>
        <div style={{ width: '50px', height: '10px', borderBottom: '3px solid #ff007f', marginTop: '10px', transform: 'rotate(-10deg)' }}></div>
      </div>

      {/* Основной контент отзыва */}
      <div className="container position-relative z-1 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {/* Звезды */}
            <div className="d-flex justify-content-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ffcc00', fontSize: '24px' }}>★</span>
              ))}
            </div>

            {/* Текст отзыва с анимацией плавности */}
            <div style={{ minHeight: '120px', transition: 'all 0.4s ease-in-out' }}>
              <p className="fs-5 fw-medium text-dark lh-base mb-4">
                {review.text.includes('Evocabank') ? (
                  <>
                    {review.text.split('Evocabank')[0]}
                    <span style={{ color: '#7000ff', fontWeight: 'bold' }}>Evocabank</span>
                    {review.text.split('Evocabank')[1]}
                  </>
                ) : (
                  review.text
                )}
              </p>
              <h6 className="fw-bold mb-1" style={{ color: '#222', fontSize: '18px' }}>
                {review.author}
              </h6>
              <p className="text-muted small mb-0">{review.role}</p>
            </div>

            {/* Точки пагинации */}
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
              {EVOCA_REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="border-0 rounded-circle p-0 transition-all"
                  style={{
                    width: idx === currentIndex ? '10px' : '8px',
                    height: idx === currentIndex ? '10px' : '8px',
                    backgroundColor: idx === currentIndex ? '#7000ff' : '#ccc',
                    cursor: 'pointer'
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Стили для анимации плавающей руки */}
      <style>{`
        @keyframes floatHand {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .floating-hand {
          animation: floatHand 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}





const REVIEWS = [
  {
    id: 1,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով",
    author: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
  },
  {
    id: 2,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
    author: "Սուսաննա Վանյան",
    role: "Հաճախորդ"
  },
  {
    id: 3,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման",
    author: "Նունե Գևորգյան",
    role: "Հաճախորդ"
  },
  {
    id: 4,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի",
    author: "Արամ Ագարյան",
    role: "Indigo Branding-ի հիմնադիր"
  },
  {
    id: 5,
    text: "Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:",
    author: "Էլեն Վարդանյան",
    role: "Հաճախորդ"
  }
];









function EvocaFooter() {
  return (
    <footer className="w-100 bg-white border-top text-dark pt-5">
      <Container>
        <Row className="g-4 pb-5">
          {/* Колонках 1: Логотип, адрес и регулятор */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h3 className="fw-bold" style={{ color: '#7000ff', letterSpacing: '-1px' }}>
                evoca<span className="fw-normal text-dark">BANK</span>
              </h3>
            </div>
            <p className="text-muted small mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-muted small mb-4" style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <strong>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
            </p>
            <p className="text-muted extra-small" style={{ fontSize: '11px' }}>
              1990 - 2026, ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </Col>

          {/* Колонках 2: Բանկի մասին */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: '15px' }}>Բանկի մասին</h6>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-2" style={{ fontSize: '13px' }}>
              <li><a href="#about" className="text-reset text-decoration-none hover-purple">Մեր մասին</a></li>
              <li><a href="#management" className="text-reset text-decoration-none hover-purple">Ղեկավարություն</a></li>
              <li><a href="#shareholders" className="text-reset text-decoration-none hover-purple">Բաժնետերեր</a></li>
              <li><a href="#reports" className="text-reset text-decoration-none hover-purple">Հաշվետվություններ</a></li>
              <li><a href="#acts" className="text-reset text-decoration-none hover-purple">Իրավական ակտեր</a></li>
              <li><a href="#tariffs" className="text-reset text-decoration-none hover-purple">Սակագներ</a></li>
              <li><a href="#property" className="text-reset text-decoration-none hover-purple">Օտարվող գույք</a></li>
              <li><a href="#builders" className="text-reset text-decoration-none hover-purple">Կառուցապատողներ</a></li>
              <li><a href="#partners" className="text-reset text-decoration-none hover-purple">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#archive" className="text-reset text-decoration-none hover-purple">Սակագների արխիվ</a></li>
            </ul>
          </Col>

          {/* Колонках 3: Օգտակար հղումներ */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: '15px' }}>Օգտակար հղումներ</h6>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-2" style={{ fontSize: '13px' }}>
              <li><a href="#rights" className="text-reset text-decoration-none hover-purple">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#residency" className="text-reset text-decoration-none hover-purple">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#reg" className="text-reset text-decoration-none hover-purple">Կարգավորում</a></li>
              <li><a href="#privacy" className="text-reset text-decoration-none hover-purple">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#mediator" className="text-reset text-decoration-none hover-purple">Ֆին. հաշտարար</a></li>
              <li><a href="#crime" className="text-reset text-decoration-none hover-purple">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#cardholders" className="text-reset text-decoration-none hover-purple">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </Col>

          {/* Колонках 4: Այլ հղումներ, Соцсети и Приложения */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: '15px' }}>Այլ հղումներ</h6>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-2 mb-4" style={{ fontSize: '13px' }}>
              <li><a href="#online" className="text-reset text-decoration-none hover-purple">EvocaONLINE</a></li>
              <li><a href="#boxes" className="text-reset text-decoration-none hover-purple">Պահատուփեր</a></li>
              <li><a href="#faq" className="text-reset text-decoration-none hover-purple">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#announcements" className="text-reset text-decoration-none hover-purple">Հայտարարություններ</a></li>
              <li><a href="#dibrary" className="text-reset text-decoration-none hover-purple">Dibrary</a></li>
              <li><a href="#contact" className="text-reset text-decoration-none hover-purple">Հետադարձ կապ</a></li>
            </ul>

            {/* Иконки соцсетей */}
            <div className="d-flex gap-3 text-muted mb-3">
              <a href="#fb" className="text-reset"><FaFacebookF /></a>
              <a href="#ig" className="text-reset"><FaInstagram /></a>
              <a href="#pin" className="text-reset"><FaPinterestP /></a>
              <a href="#yt" className="text-reset"><FaYoutube /></a>
              <a href="#in" className="text-reset"><FaLinkedinIn /></a>
            </div>

            {/* Кнопки App Store и Google Play */}
            <div className="d-flex gap-2 mb-4">
              <span className="badge bg-dark p-2 text-wrap" style={{ cursor: 'pointer' }}>App Store</span>
              <span className="badge bg-dark p-2 text-wrap" style={{ cursor: 'pointer' }}>Google Play</span>
            </div>

            {/* Контакты */}
            <div className="small">
              <a href="#branches" className="d-block text-purple fw-bold mb-2 text-decoration-none" style={{ color: '#7000ff' }}>
                Բանկի հասցեները և աշխատաժամերը
              </a>
              <a href="#contact" className="d-block text-purple fw-bold mb-3 text-decoration-none" style={{ color: '#7000ff' }}>
                Կապ մեզ հետ
              </a>
              <div className="fw-bold text-dark">+374 10 605555</div>
              <div className="fw-bold text-dark fs-5">8444</div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Нижняя полоса с диclaimer-ом, партнерами и плавающим чатом */}
      <div className="py-3 bg-light border-top position-relative">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-muted extra-small mb-0" style={{ fontSize: '10px', maxWidth: '700px' }}>
            Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>

          <div className="d-flex align-items-center gap-3 opacity-75">
            <span className="fw-bold fs-6 text-secondary">fininfo</span>
            <span className="fw-bold fs-6 text-secondary">arca</span>
          </div>
        </Container>

        {/* Фиксированный плавающий онлайн-чат внизу справа */}
        <div 
          className="position-fixed bottom-0 end-0 m-4 p-3 rounded-4 shadow-lg text-white d-flex align-items-center gap-2"
          style={{ backgroundColor: '#7000ff', zIndex: 9999, cursor: 'pointer' }}
        >
          <span>💬</span>
          <span className="fw-bold small">Գրեք մեզ, մենք օնլայն ենք !</span>
        </div>
      </div>
    </footer>
  );
}


const CURRENCY_RATES = {
  cash: {
    USD: { buy: 383.0, sell: 387.5, buyTrend: 'down', sellTrend: 'up' },
    EUR: { buy: 410.0, sell: 421.0, buyTrend: 'down', sellTrend: 'up' },
    RUB: { buy: 4.24, sell: 4.43, buyTrend: 'down', sellTrend: 'up' },
  },
  nonCash: {
    USD: { buy: 361.0, sell: 365.5, buyTrend: 'down', sellTrend: 'up' },
    EUR: { buy: 410.0, sell: 421.0, buyTrend: 'down', sellTrend: 'up' },
    RUB: { buy: 4.24, sell: 4.43, buyTrend: 'down', sellTrend: 'up' },
  },
  gold: [
    { type: 'Ոսկու ստանդարտացված ձուլակտոր (1գ)', buy: '32,500', sell: '35,000' },
  ],
  rubleFee: [
    { currency: 'RUB', rate: '10%' },
  ]
};

// Круглые флаги SVG
function FlagUSD() {
  return (
    <svg className="w-5 h-5 rounded-full shrink-0 shadow-sm" viewBox="0 0 32 32">
      <clipPath id="circle-us"><circle cx="16" cy="16" r="16"/></clipPath>
      <g clipPath="url(#circle-us)">
        <path fill="#bd10e0" d="M0 0h32v32H0z"/>
        <path fill="#e02020" d="M0 0h32v32H0z"/>
        <path stroke="#fff" strokeWidth="2.5" d="M0 2.5h32M0 7.5h32M0 12.5h32M0 17.5h32M0 22.5h32M0 27.5h32"/>
        <path fill="#00205b" d="M0 0h16v16H0z"/>
        <circle cx="4" cy="4" r="1" fill="#fff"/>
        <circle cx="12" cy="4" r="1" fill="#fff"/>
        <circle cx="8" cy="8" r="1" fill="#fff"/>
        <circle cx="4" cy="12" r="1" fill="#fff"/>
        <circle cx="12" cy="12" r="1" fill="#fff"/>
      </g>
    </svg>
  );
}

function FlagEUR() {
  return (
    <svg className="w-5 h-5 rounded-full shrink-0 shadow-sm" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#003399"/>
      <circle cx="16" cy="6" r="1" fill="#ffcc00"/>
      <circle cx="21" cy="7.5" r="1" fill="#ffcc00"/>
      <circle cx="24.5" cy="11" r="1" fill="#ffcc00"/>
      <circle cx="26" cy="16" r="1" fill="#ffcc00"/>
      <circle cx="24.5" cy="21" r="1" fill="#ffcc00"/>
      <circle cx="21" cy="24.5" r="1" fill="#ffcc00"/>
      <circle cx="16" cy="26" r="1" fill="#ffcc00"/>
      <circle cx="11" cy="24.5" r="1" fill="#ffcc00"/>
      <circle cx="7.5" cy="21" r="1" fill="#ffcc00"/>
      <circle cx="6" cy="16" r="1" fill="#ffcc00"/>
      <circle cx="7.5" cy="11" r="1" fill="#ffcc00"/>
      <circle cx="11" cy="7.5" r="1" fill="#ffcc00"/>
    </svg>
  );
}

function FlagRUB() {
  return (
    <svg className="w-5 h-5 rounded-full shrink-0 shadow-sm" viewBox="0 0 32 32">
      <clipPath id="circle-ru"><circle cx="16" cy="16" r="16"/></clipPath>
      <g clipPath="url(#circle-ru)">
        <path fill="#fff" d="M0 0h32v10.67H0z"/>
        <path fill="#0039a6" d="M0 10.67h32v10.66H0z"/>
        <path fill="#d52b1e" d="M0 21.33h32V32H0z"/>
      </g>
    </svg>
  );
}

function CurrencyExchange() {
  const [activeTab, setActiveTab] = useState('nonCash'); // 'cash' | 'nonCash' | 'gold' | 'ruble'
  
  // Состояния для калькулятора валют
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurr, setFromCurr] = useState('AMD');
  const [toCurr, setToCurr] = useState('USD');

  const rates = activeTab === 'cash' ? CURRENCY_RATES.cash : CURRENCY_RATES.nonCash;

  // Расчет конвертации
  const calculateResult = () => {
    const amount = parseFloat(fromAmount);
    if (isNaN(amount) || amount <= 0) return '0';

    if (fromCurr === toCurr) return amount.toString();

    // AMD в валюту
    if (fromCurr === 'AMD' && rates[toCurr]) {
      return (amount / rates[toCurr].sell).toFixed(2);
    }
    // Валюта в AMD
    if (toCurr === 'AMD' && rates[fromCurr]) {
      return (amount * rates[fromCurr].buy).toFixed(2);
    }
    // Кросс-курс (например USD -> EUR)
    if (rates[fromCurr] && rates[toCurr]) {
      const amdValue = amount * rates[fromCurr].buy;
      return (amdValue / rates[toCurr].sell).toFixed(2);
    }

    return '0';
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 w-full font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* ЛЕВАЯ ЧАСТЬ: Дисклеймер, Вкладки и Курсы */}
        <div className="flex-1 w-full">
          {/* Дисклеймер */}
          <p className="text-gray-800 text-sm sm:text-[15px] leading-relaxed font-medium mb-8 max-w-3xl">
            20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
          </p>

          {/* Навигация Табов */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100">
            <button
              onClick={() => setActiveTab('cash')}
              className={`px-5 py-3 text-sm font-semibold rounded-t-2xl transition-all ${
                activeTab === 'cash'
                  ? 'bg-white text-gray-900 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-gray-100 relative z-10'
                  : 'text-gray-400 hover:text-purple-700 bg-transparent'
              }`}
            >
              Կանխիկ
            </button>
            <button
              onClick={() => setActiveTab('nonCash')}
              className={`px-5 py-3 text-sm font-semibold rounded-t-2xl transition-all ${
                activeTab === 'nonCash'
                  ? 'bg-white text-gray-900 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-gray-100 relative z-10'
                  : 'text-gray-400 hover:text-purple-700 bg-transparent'
              }`}
            >
              Անկանխիկ
            </button>
            <button
              onClick={() => setActiveTab('gold')}
              className={`px-5 py-3 text-sm font-semibold rounded-t-2xl transition-all ${
                activeTab === 'gold'
                  ? 'bg-white text-gray-900 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-gray-100 relative z-10'
                  : 'text-gray-400 hover:text-purple-700 bg-transparent'
              }`}
            >
              Ոսկու փոխարժեք
            </button>
            <button
              onClick={() => setActiveTab('ruble')}
              className={`px-5 py-3 text-sm font-semibold rounded-t-2xl transition-all ${
                activeTab === 'ruble'
                  ? 'bg-white text-gray-900 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] border-t border-x border-gray-100 relative z-10'
                  : 'text-gray-400 hover:text-purple-700 bg-transparent'
              }`}
            >
              Ռուբլու կանխիկ մուտք
            </button>
          </div>

          {/* Карточка с курсами и калькулятором */}
          <div className="bg-white rounded-2xl rounded-tl-none border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8">
            
            {/* РЕЖИМ 1 И 2: КАНХИК И АНКАНХИК */}
            {(activeTab === 'cash' || activeTab === 'nonCash') && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Таблица курсов */}
                <div className="md:col-span-6 border-r-0 md:border-r border-gray-100 pr-0 md:pr-6">
                  <div className="grid grid-cols-3 text-xs text-gray-400 font-medium pb-3 border-b border-gray-100">
                    <div>Արժույթ</div>
                    <div className="text-center">Առք</div>
                    <div className="text-center">Վաճառք</div>
                  </div>

                  {/* USD */}
                  <div className="grid grid-cols-3 items-center py-3.5 border-b border-gray-50 text-sm">
                    <div className="flex items-center gap-2.5 font-bold text-gray-800">
                      <FlagUSD />
                      <span>USD</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-red-500 text-xs">▼</span>
                      <span>{rates.USD.buy}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-emerald-500 text-xs">▲</span>
                      <span>{rates.USD.sell}</span>
                    </div>
                  </div>

                  {/* EUR */}
                  <div className="grid grid-cols-3 items-center py-3.5 border-b border-gray-50 text-sm">
                    <div className="flex items-center gap-2.5 font-bold text-gray-800">
                      <FlagEUR />
                      <span>EUR</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-red-500 text-xs">▼</span>
                      <span>{rates.EUR.buy}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-emerald-500 text-xs">▲</span>
                      <span>{rates.EUR.sell}</span>
                    </div>
                  </div>

                  {/* RUB */}
                  <div className="grid grid-cols-3 items-center py-3.5 border-b border-gray-50 text-sm">
                    <div className="flex items-center gap-2.5 font-bold text-gray-800">
                      <FlagRUB />
                      <span>RUB</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-red-500 text-xs">▼</span>
                      <span>{rates.RUB.buy}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                      <span className="text-emerald-500 text-xs">▲</span>
                      <span>{rates.RUB.sell}</span>
                    </div>
                  </div>
                </div>

                {/* Калькулятор конвертации */}
                <div className="md:col-span-6 flex flex-col gap-4">
                  {/* Поле "У меня есть" */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400">Ունեմ</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus-within:border-purple-600 transition-colors">
                      <input
                        type="number"
                        className="w-full outline-none font-bold text-gray-900 text-base bg-transparent"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                      />
                      <select
                        value={fromCurr}
                        onChange={(e) => setFromCurr(e.target.value)}
                        className="bg-transparent font-bold text-purple-700 text-sm outline-none cursor-pointer pl-2"
                      >
                        <option value="AMD">AMD</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="RUB">RUB</option>
                      </select>
                    </div>
                  </div>

                  {/* Поле "Я получу" */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400">Կստանամ</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-2.5 bg-white">
                      <input
                        type="text"
                        readOnly
                        className="w-full outline-none font-bold text-gray-900 text-base bg-transparent"
                        value={calculateResult()}
                      />
                      <select
                        value={toCurr}
                        onChange={(e) => setToCurr(e.target.value)}
                        className="bg-transparent font-bold text-purple-700 text-sm outline-none cursor-pointer pl-2"
                      >
                        <option value="USD">USD</option>
                        <option value="AMD">AMD</option>
                        <option value="EUR">EUR</option>
                        <option value="RUB">RUB</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* РЕЖИМ 3: РՈՒԲԼՈՒ ԿԱՆԽԻԿ ՄՈՒՏՔ */}
            {activeTab === 'ruble' && (
              <div className="py-2">
                <div className="grid grid-cols-2 text-xs text-gray-400 font-medium pb-3 border-b border-gray-100">
                  <div>Արժույթ</div>
                  <div>Սակագին</div>
                </div>
                <div className="grid grid-cols-2 items-center py-4 border-b border-gray-50 text-base">
                  <div className="font-bold text-gray-900">RUB</div>
                  <div className="font-bold text-gray-900">10%</div>
                </div>
              </div>
            )}

            {/* РЕЖИМ 4: ՈՍԿՈՒ ՓՈԽԱՐԺԵՔ */}
            {activeTab === 'gold' && (
              <div className="py-2">
                <div className="grid grid-cols-3 text-xs text-gray-400 font-medium pb-3 border-b border-gray-100">
                  <div>Տեսակ</div>
                  <div className="text-center">Առք</div>
                  <div className="text-center">Վաճառք</div>
                </div>
                {CURRENCY_RATES.gold.map((g, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-center py-4 border-b border-gray-50 text-sm">
                    <div className="font-bold text-gray-800">{g.type}</div>
                    <div className="text-center font-bold text-gray-900">{g.buy} ֏</div>
                    <div className="text-center font-bold text-gray-900">{g.sell} ֏</div>
                  </div>
                ))}
              </div>
            )}

            {/* Подвал карточки */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-100 text-xs">
              <span className="text-gray-400">
                Թարմացվել է` {activeTab === 'ruble' ? '10.07.26' : '23.09.26'}
              </span>
              {(activeTab === 'cash' || activeTab === 'nonCash') && (
                <button className="text-purple-700 font-bold hover:underline">
                  Այլ արտարժույթներ
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Наша локация / Адреса */}
        <div className="w-full lg:w-80 shrink-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Մեր հասցեները</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-6">
            Բանկի հասցեները, աշխատաժամերը, բանկոմատները
          </p>

          {/* Графика карты с маркером */}
          <div className="relative w-full flex justify-center items-center py-4 mb-6">
            {/* Иллюстрация сложенной карты */}
            <div>
              <img src="https://www.evoca.am/img/addresses.png" alt="" />

              {/* Фиолетовый пин Evocabank */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="w-12 h-12 bg-purple-700 rounded-full rounded-bl-none rotate-45 flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-white font-black text-lg -rotate-45 transform">v</span>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка "Смотреть на карте" */}
          <button className="w-full bg-[#f3ebfc] hover:bg-[#e9d8fa] text-purple-700 font-bold py-3.5 px-6 rounded-full transition-colors text-sm flex items-center justify-center gap-2">
            <span>Դիտել քարտեզը</span>
            <span className="text-base">›</span>
          </button>
        </div>

      </div>
    </section>
  );
}


// --- 11. HOMEPAGE КОМПОНЕНТ (ГЛАВНАЯ СТРАНИЦА) ---
function HomePage() {
  return (
    <>
      <Slider />
      <Biometric />
      <CardsShowcase />
      <Calculator />
      <OnlineBankingBanner />
      <Partners />
      <BestFromEvoca />
      <NewsSection />
      <CurrencyExchange />
      <ReviewsSlider />

    </>
  );
}

// --- 12. АДАПТИВНЫЕ СТИЛИ (superski @media) ---
function ResponsiveStyles() {
  return (
    <style>{`
      /* ====== Базовая типографика, тянется вместе с шириной экрана ====== */
      .evoca-app h1 { font-size: clamp(1.75rem, 1.1rem + 2.6vw, 3.25rem); }
      .evoca-app h2 { font-size: clamp(1.4rem, 1rem + 1.6vw, 2.25rem); }
      .evoca-app h3 { font-size: clamp(1.1rem, 0.95rem + 0.7vw, 1.5rem); }

      /* ====== ≥1536px — большие мониторы: чуть больше воздуха ====== */
      @media (min-width: 1536px) {
        .evoca-app .max-w-7xl { max-width: 88rem; }
      }

      /* ====== 1024–1279px — маленькие ноутбуки: правим верхнее меню ====== */
      @media (max-width: 1279px) and (min-width: 1024px) {
        .evoca-app header nav.xl\\:flex { gap: 1.1rem !important; font-size: 0.9rem; }
      }

      /* ====== 768–1023px — планшеты ====== */
      @media (max-width: 1023px) {
        .evoca-app header .px-6 { padding-left: 1rem; padding-right: 1rem; }
        .evoca-app section { padding-top: 2.5rem; padding-bottom: 2.5rem; }
      }

      /* ====== 576–767px — большие телефоны ====== */
      @media (max-width: 767px) {
        .evoca-app .grid.sm\\:grid-cols-2 { gap: 1rem; }
        .evoca-app button { font-size: 0.9rem; }
        .evoca-app .card-body { padding: 1rem !important; }
      }

      /* ====== 480–575px — телефоны поменьше ====== */
      @media (max-width: 575px) {
        .evoca-app header .py-4 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .evoca-app header span.text-2xl { font-size: 1.4rem; }
        .evoca-app .rounded-full.bg-purple-700 { padding: 0.5rem 1rem; font-size: 0.85rem; }
        .evoca-app .d-flex.gap-4 { gap: 0.75rem !important; }
      }

      /* ====== ≤380px — самые узкие экраны ====== */
      @media (max-width: 380px) {
        .evoca-app .max-w-7xl { padding-left: 0.75rem; padding-right: 0.75rem; }
        .evoca-app .input-group { flex-direction: column; }
        .evoca-app .input-group > * { width: 100% !important; }
      }

      /* ====== Ландшафтная ориентация на телефонах — уменьшаем вертикальные отступы ====== */
      @media (max-height: 480px) and (orientation: landscape) {
        .evoca-app section { padding-top: 1.25rem; padding-bottom: 1.25rem; }
      }

      /* ====== Печать — на всякий случай ====== */
      @media print {
        .evoca-app header, .evoca-app footer { display: none !important; }
      }
    `}</style>
  );
}

// --- 13. ГЛАВНЫЙ КОМПОНЕНТ С МАРШРУТИЗАЦИЕЙ ---
function App() {
  return (
    <Router>
      <div className="evoca-app">
        <ResponsiveStyles />

        {/* Хедер виден всегда на всех страницах */}
        <Header />

        {/* Маршрутизация по страницам */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Футер виден всегда на всех страницах */}
        <EvocaFooter />
      </div>
    </Router>
  );
}

export default App;