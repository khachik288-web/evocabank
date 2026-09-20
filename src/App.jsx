import { useState, useEffect, useRef } from 'react'
import './App.css'

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
                className={`relative px-4 py-3 text-gray-700 hover:text-purple-700 ${
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
            <a href="#" className="flex items-center gap-1 text-purple-700 hover:underline">
              Առցանց հայտեր
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#" className="flex items-center gap-1 text-purple-700 hover:underline">
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
                  className={i === 0 ? 'text-purple-700' : 'text-gray-800 hover:text-purple-700'}
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

function Slider() {
  const slides = [
    {
      bg: 'bg-purple-700',
      title: 'Evoca Աշխատավարձային Նախագիծ',
      text: 'Բեր աշխատավարձդ Evoca: Ստացիր շատ ավելին...',
      textColor: 'text-white',
      subTextColor: 'text-purple-100',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image:
        'https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png',
    },
    {
      bg: 'bg-gray-200',
      title: 'Evoca Travel Card',
      text: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
      textColor: 'text-gray-900',
      subTextColor: 'text-gray-600',
      buttonClass: 'bg-purple-700 text-white hover:bg-purple-800',
      image:
        'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
    },
    {
      bg: 'bg-black',
      title: 'Կարճ հեռախոսահամարով՝ 8444',
      text: 'Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...',
      textColor: 'text-white',
      subTextColor: 'text-gray-300',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image:
        'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
    },
    {
      bg: 'bg-gray-800',
      title: 'Visa Vision',
      text: 'Ձեռք բեր Visa Vision քարտը քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
      textColor: 'text-white',
      subTextColor: 'text-gray-300',
      buttonClass: 'bg-white text-purple-700 hover:bg-purple-50',
      image:
        'https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [flashKey, setFlashKey] = useState(0)

  const goTo = (index) => {
    const nextIndex = (index + slides.length) % slides.length
    setCurrent(nextIndex)
    setFlashKey((k) => k + 1)
  }

  const goNext = () => goTo(current + 1)
  const goPrev = () => goTo(current - 1)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  const slide = slides[current]

  return (
    <div className={`relative overflow-hidden transition-colors duration-500 ${slide.bg}`}>
      {/* white flash overlay on slide change */}
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

      {/* arrows + dots */}
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
  )
}

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
  )
}

function BiometricFaces() {
  const faces = [
    'https://www.evoca.am/img/temp/biometric/face1.png',
    'https://www.evoca.am/img/temp/biometric/face2.png',
    'https://www.evoca.am/img/temp/biometric/face3.png',
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % faces.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [faces.length])

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
  )
}

function Biometric() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-center md:gap-20">
        {/* Triangle + face */}
        <div className="relative h-[420px] w-[340px] shrink-0">
          {/* decorative dotted circle behind */}
          <div
            className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />

          {/* rounded purple triangle */}
          <svg
            viewBox="0 0 360 440"
            className="absolute inset-0 h-full w-full drop-shadow-lg"
          >
            <path
              d="M 70,30 L 290,30 Q 330,30 315.32,67.2 L 194.68,372.8 Q 180,410 165.32,372.8 L 44.68,67.2 Q 30,30 70,30 Z"
              className="fill-purple-700"
            />
          </svg>

          {/* crossfading face photos + animated biometric mask on top */}
          <BiometricFaces />
        </div>

        {/* Text + QR + CTA */}
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
            <button className="rounded-full bg-purple-700 px-6 py-3 font-semibold text-white hover:bg-purple-800">
              Իմանալ ավելին
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const CARDS_DATA = [
  { id: 1, name: 'Visa Classic', img: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png' },
  { id: 2, name: 'Mastercard Standard', img: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png' },
  { id: 3, name: 'Visa Digital', img: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png' },
  { id: 4, name: 'Arca Classic', img: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png' },
  { id: 5, name: 'Arca UnionPay Co-badge', img: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png' },
  { id: 6, name: 'Wilco Visa Infinite', img: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png' },
  { id: 7, name: 'Evoca Gift Card', img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' },
  { id: 8, name: 'Digital Gift Card', img: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png' }
];

// --- Компонент 3D Карты ---
function TiltCard({ card }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Вычисляем положение курсора от -1 до 1 относительно центра
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    // Умножаем на градусы (15 градусов максимум)
    const rotateX = y * -15; 
    const rotateY = x * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.96, 0.96, 0.96)`,
      transition: 'transform 0.1s ease-out' // Ускоряем анимацию при движении
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)' // Плавный возврат
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
          className="w-[415px] h-[261px] object-cover rounded-xl shadow-2xl" 
        />
      </div>
      
      {/* Мягкая тень под картой (остается на месте при наклоне карты) */}
      <div className="absolute -bottom-8 w-[80%] h-8 bg-black/10 blur-xl rounded-[100%] pointer-events-none"></div>
    </div>
  );
}




// --- 3d kartshkeq ---
function CardsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUp = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : CARDS_DATA.length - 1));
  const handleDown = () => setActiveIndex((prev) => (prev < CARDS_DATA.length - 1 ? prev + 1 : 0));

  return (
    <section className="bg-[#f3f6fa] py-20 px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* 1. Вертикальный слайдер (Левая часть) */}
        <div className="flex flex-col items-center shrink-0 w-[200px]">
          <button onClick={handleUp} className="text-purple-700 hover:text-purple-900 transition mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Контейнер слайдера */}
          <div className="h-[420px] overflow-hidden relative w-full mask-image-vertical">
            {/* Лента карточек */}
            <div 
              className="flex flex-col gap-6 absolute w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(calc(210px - 60px - ${activeIndex * 144}px))` }} 
              // 210px - половина высоты контейнера. 60px - половина высоты карточки с маргинами. 144px - шаг (высота + gap).
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

        {/* 2. 3D Карта (Центр) */}
        <div className="flex-1 flex justify-center perspective-1000">
           <TiltCard card={CARDS_DATA[activeIndex]} />
        </div>

        {/* 3. Описание и кнопка (Правая часть) */}
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



function App() {
  return (
    <>
      <Header />
      <Slider />
      <Biometric />
      <BestFromEvoca />
      <CardsShowcase />
    </>
  )
}

function DotRing() {
  // approximates the site's 9-layer pulsing dot-ring animation with generated dots
  const rings = [46, 39, 32, 25, 18]
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
      {rings.map((r, ringIndex) => {
        const count = 22 + ringIndex * 4
        return Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * Math.PI * 2
          const radius = r * 4
          const cx = 200 + radius * Math.cos(angle)
          const cy = 200 + radius * Math.sin(angle)
          return (
            <circle
              key={`${ringIndex}-${i}`}
              cx={cx}
              cy={cy}
              r="2"
              fill="#56CCF2"
              opacity="0.4"
              className="dotring-pulse"
              style={{ animationDelay: `${(ringIndex * 0.3 + i * 0.03).toFixed(2)}s` }}
            />
          )
        })
      })}
    </svg>
  )
}

function StatueIllustration() {
  // stylized placeholder silhouette (bust + orb) since no real statue asset was provided
  return (
    <svg viewBox="0 0 240 320" className="relative z-10 h-full w-full drop-shadow-2xl">
      <defs>
        <linearGradient id="statueGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f4f6" />
          <stop offset="100%" stopColor="#c9cdd6" />
        </linearGradient>
      </defs>
      {/* head */}
      <ellipse cx="120" cy="55" rx="34" ry="40" fill="url(#statueGrad)" />
      {/* hair/crown shape */}
      <path d="M86 40 Q120 5 154 40 L150 55 Q120 30 90 55 Z" fill="url(#statueGrad)" />
      {/* neck + shoulders + drapery */}
      <path
        d="M95 90 L145 90 L170 140 Q180 220 165 300 L75 300 Q60 220 70 140 Z"
        fill="url(#statueGrad)"
      />
      {/* draped fold lines */}
      <path d="M95 120 Q120 160 100 300" stroke="#9aa0ab" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M145 120 Q120 170 140 300" stroke="#9aa0ab" strokeWidth="2" fill="none" opacity="0.5" />
      {/* arms holding orb */}
      <path d="M75 170 Q55 190 60 230 Q65 250 90 250" fill="url(#statueGrad)" />
      <path d="M165 170 Q185 190 180 230 Q175 250 150 250" fill="url(#statueGrad)" />
      {/* orb */}
      <circle cx="120" cy="245" r="34" fill="url(#statueGrad)" stroke="#9aa0ab" strokeWidth="1" />
      <circle cx="108" cy="233" r="8" fill="#ffffff" opacity="0.6" />
    </svg>
  )
}

function BestFromEvoca() {
  const cards = [
    {
      tag: 'Թվային քարտեր',
      title: 'Evoca Digital քարտ',
      desc: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։',
    },
    {
      tag: 'Նվեր քարտեր',
      title: 'Evoca Gift Card',
      desc: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:',
    },
    {
      tag: 'Նոր հավելված',
      title: 'EvocaTOUCH 2',
      desc: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։',
    },
    {
      tag: 'Օնլայն վճարումներ',
      title: 'Արագ online վճարումներ',
      desc: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:',
    },
  ]

  // decorative low-poly triangles scattered around the section
  const triangles = [
    { className: 'left-[8%] top-[8%] h-10 w-10 -rotate-12', color: '#ffffff33' },
    { className: 'right-[10%] top-[4%] h-8 w-8 rotate-45', color: '#facc15' },
    { className: 'right-[4%] top-[45%] h-6 w-6 rotate-12', color: '#a78bfa' },
    { className: 'left-[4%] bottom-[20%] h-7 w-7 -rotate-45', color: '#ffffff33' },
    { className: 'left-[14%] bottom-[6%] h-5 w-5 rotate-90', color: '#facc15' },
    { className: 'right-[16%] bottom-[10%] h-9 w-9 rotate-6', color: '#a78bfa' },
  ]

  return (
    <section className="relative overflow-hidden bg-purple-700 py-20">
      {/* decorative triangles */}
      {triangles.map((t, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute ${t.className}`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: t.color,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* statue + dot ring */}
          <div className="relative h-[320px] w-[280px] shrink-0">
            <DotRing />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[85%] w-[65%]">
                <StatueIllustration />
              </div>
            </div>
          </div>

          {/* title + cards */}
          <div className="flex-1">
            <h2 className="mb-8 text-2xl font-bold text-white md:text-4xl">
              Լավագույնը Evocabank-ից
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href="#"
                  className="block rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="mb-3 inline-block rounded bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
                    {c.tag}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{c.title}</h3>
                  <p className="text-sm text-gray-500">{c.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating contact button */}
      <button
        aria-label="contact"
        className="fixed bottom-20 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white text-purple-700 shadow-xl transition hover:scale-105"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </button>

      {/* bottom contact bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-purple-900/90 py-2 text-center text-sm text-white backdrop-blur">
        Գրեք մեզ, մենք online ենք​ !
      </div>
    </section>
  )
}

export default App