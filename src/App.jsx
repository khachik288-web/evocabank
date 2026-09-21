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
          <nav className="hidden lg:flex items-center">
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

          <div className="flex items-center gap-5 text-gray-600 py-2 lg:py-0">
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
            <button aria-label="menu" className="hover:text-purple-700 lg:hidden">
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
            <nav className="hidden xl:flex items-center gap-7 font-medium">
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

          <button className="rounded-full bg-purple-700 px-6 py-2.5 font-semibold text-white hover:bg-purple-800 transition-colors">
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
        <div className="relative h-[420px] w-[340px] shrink-0">
          <div
            className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />

          <svg
            viewBox="0 0 360 440"
            className="absolute inset-0 h-full w-full drop-shadow-lg"
          >
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

function TiltCard({ card }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
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
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
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
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </section>
  );
}

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
              <div className="absolute top-1.5 max-[550px]:top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 max-[550px]:w-1 max-[550px]:h-1 bg-gray-600 rounded-full"></div>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 max-[550px]:w-6 h-3 max-[550px]:h-2 bg-[#1a1a1a] rounded-b-lg max-[550px]:rounded-b-md"></div>
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
          
          <div className="flex flex-col max-[550px]:flex-col sm:flex-row items-center sm:items-start gap-6 max-[550px]:gap-4 w-full justify-center lg:justify-start">
            <div className="bg-white p-1.5 rounded-lg shadow-md shrink-0 max-[550px]:hidden">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="Download App QR Code" 
                className="w-[85px] h-[85px] object-cover" 
              />
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-xs mb-3 font-medium text-[#e2d5f8]">Ներբեռնել հավելվածները՝</p>
              <div className="flex gap-3 max-[550px]:w-full max-[550px]:justify-center">
                <a 
                  href="https://apps.apple.com/am/app/evocatouch/id970309076" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-black border border-gray-700 hover:border-gray-500 text-white rounded-lg px-2.5 py-1.5 max-[550px]:flex-1 max-[550px]:justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 max-[550px]:w-4 max-[550px]:h-4 fill-white"><path d="M16.365 14.363c-.015-2.27 1.83-3.375 1.91-3.42-1.045-1.53-2.67-1.74-3.255-1.77-1.38-.135-2.685.81-3.39.81-.705 0-1.77-.78-2.91-.765-1.5.015-2.88.87-3.645 2.205-1.56 2.685-.39 6.66 1.125 8.85.735 1.065 1.62 2.25 2.76 2.205 1.095-.045 1.515-.72 2.835-.72 1.32 0 1.695.72 2.835.69 1.185-.015 1.95-1.08 2.685-2.145.855-1.245 1.2-2.46 1.215-2.52-.03-.015-2.145-.825-2.16-3.42zM15.015 9.123c.6-.735.99-1.755.885-2.775-.87.03-1.95.585-2.58 1.305-.54.615-1.005 1.65-.87 2.655.975.075 1.965-.45 2.565-1.185z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] max-[550px]:text-[8px] text-gray-300">Download on the</span>
                    <span className="text-[13px] max-[550px]:text-[11px] font-semibold -mt-0.5">App Store</span>
                  </div>
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-black border border-gray-700 hover:border-gray-500 text-white rounded-lg px-2.5 py-1.5 max-[550px]:flex-1 max-[550px]:justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 max-[550px]:w-4 max-[550px]:h-4"><path fill="#4caf50" d="M4 2v20l14-10z"/><path fill="#ffeb3b" d="M18 12l-5-3.5-3.5 3.5 3.5 3.5z"/><path fill="#f44336" d="M4 2l9.5 6.5-4 4z"/><path fill="#2196f3" d="M4 22l9.5-6.5-4-4z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] max-[550px]:text-[8px] text-gray-300">GET IT ON</span>
                    <span className="text-[13px] max-[550px]:text-[11px] font-semibold -mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- ИСПРАВЛЕННЫЙ И ВЫЛИЗАННЫЙ КОМПОНЕНТ ПАРТНЕРОВ ---
const PARTNERS_DATA = [
  { id: 1, name: 'Partner 1', logo: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png', url: '#' },
  { id: 2, name: 'Partner 2', logo: 'https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png', url: '#' },
  { id: 3, name: 'Partner 3', logo: 'https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png', url: '#' },
  { id: 4, name: 'Partner 4', logo: 'https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png', url: '#' },
  { id: 5, name: 'Partner 5', logo: 'https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png', url: '#' },
  { id: 6, name: 'Partner 6', logo: 'https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png', url: '#' },
  { id: 7, name: 'Partner 7', logo: 'https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png', url: '#' },
  { id: 8, name: 'Partner 8', logo: 'https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png', url: '#' },
  { id: 9, name: 'Partner 9', logo: 'https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png', url: '#' },
  { id: 10, name: 'Partner 10', logo: 'https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png', url: '#' },
  { id: 11, name: 'Partner 11', logo: 'https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png', url: '#' },
]

function DottedCircles() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none"
    >
      {[40, 58, 76, 94, 112, 130].map((r, ringIdx) => {
        const count = 16 + ringIdx * 8
        return Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * Math.PI * 2
          const cx = 150 + r * Math.cos(angle)
          const cy = 150 + r * Math.sin(angle)
          return <circle key={`${ringIdx}-${i}`} cx={cx} cy={cy} r="1.8" fill="#facc15" />
        })
      })}
    </svg>
  )
}

function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

  // Идеально просчитанные адаптивные брекпоинты
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else if (window.innerWidth < 1280) setVisibleCount(3)
      else setVisibleCount(4)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, PARTNERS_DATA.length - visibleCount)

  // Защита от вылета индекса за пределы при изменчивости visibleCount
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [visibleCount, maxIndex, currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full">
        
        {/* Левая часть: Текст и Кнопка */}
        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Գործընկերներ
          </h2>
          <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed mb-6 lg:mb-8">
            Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ` Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#f0e6fb] hover:bg-[#e4d3f8] text-purple-800 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors shadow-sm"
          >
            Բոլոր գործընկերները
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Правая часть: min-w-0 здесь КРИТИЧЕСКИ ВАЖЕН для защиты Flexbox от переполнения */}
        <div className="relative min-w-0 flex-1 w-full bg-[#f8f9fc] rounded-2xl py-8 px-3 sm:px-6 flex items-center shadow-sm">
          
          {/* Декоративный круг из точек и рука */}
          <div className="absolute -left-8 xl:-left-12 top-1/2 -translate-y-1/2 w-56 xl:w-64 h-56 xl:h-64 hidden md:block pointer-events-none z-10">
            <DottedCircles />
            <img
              src="https://www.evoca.am/img/hand.png"
              alt="Evoca Hand"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] xl:h-[340px] max-w-none object-contain z-20 filter drop-shadow-md"
            />
          </div>

          {/* Контейнер карусели со стрелками */}
          <div className="flex items-center w-full pl-0 md:pl-20 xl:pl-28 pr-1 sm:pr-2 gap-1 sm:gap-3 z-20 min-w-0">
            
            {/* Стрелка Влево */}
            <button
              onClick={handlePrev}
              className="text-purple-700 hover:text-purple-900 hover:bg-purple-100/50 rounded-full transition p-2 shrink-0 focus:outline-none"
              aria-label="Previous partners"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Вьюпорт слайдера */}
            <div className="overflow-hidden flex-1 min-w-0">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {PARTNERS_DATA.map((partner) => (
                  <div
                    key={partner.id}
                    className="shrink-0 px-2 sm:px-4 flex items-center justify-center border-r border-gray-200/80 last:border-r-0"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <a
                      href={partner.url}
                      className="group flex items-center justify-center h-16 sm:h-20 w-full hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-10 sm:max-h-12 max-w-[100px] sm:max-w-[130px] object-contain transition-all duration-300 group-hover:brightness-90"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Стрелка Вправо */}
            <button
              onClick={handleNext}
              className="text-purple-700 hover:text-purple-900 hover:bg-purple-100/50 rounded-full transition p-2 shrink-0 focus:outline-none"
              aria-label="Next partners"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

function DotRing() {
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
  return (
    <svg viewBox="0 0 240 320" className="relative z-10 h-full w-full drop-shadow-2xl">
      <defs>
        <linearGradient id="statueGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f4f6" />
          <stop offset="100%" stopColor="#c9cdd6" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="55" rx="34" ry="40" fill="url(#statueGrad)" />
      <path d="M86 40 Q120 5 154 40 L150 55 Q120 30 90 55 Z" fill="url(#statueGrad)" />
      <path
        d="M95 90 L145 90 L170 140 Q180 220 165 300 L75 300 Q60 220 70 140 Z"
        fill="url(#statueGrad)"
      />
      <path d="M95 120 Q120 160 100 300" stroke="#9aa0ab" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M145 120 Q120 170 140 300" stroke="#9aa0ab" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M75 170 Q55 190 60 230 Q65 250 90 250" fill="url(#statueGrad)" />
      <path d="M165 170 Q185 190 180 230 Q175 250 150 250" fill="url(#statueGrad)" />
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
          <div className="relative h-[320px] w-[280px] shrink-0">
            <DotRing />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[85%] w-[65%]">
                <StatueIllustration />
              </div>
            </div>
          </div>

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

      <button
        aria-label="contact"
        className="fixed bottom-20 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white text-purple-700 shadow-xl transition hover:scale-105"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </button>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-purple-900/90 py-2 text-center text-sm text-white backdrop-blur">
        Գրեք մեզ, մենք online ենք​ !
      </div>
    </section>
  )
}

const NEWS_DATA = [
  {
    id: 1,
    tag: 'Կենսակերպ',
    tagColor: '#8bd34a',
    title: 'Դիլիջան, մենք գալիս ենք',
    date: '11.09.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png',
  },
  {
    id: 2,
    tag: 'Կենսակերպ',
    tagColor: '#8bd34a',
    title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր',
    date: '03.09.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png',
  },
  {
    id: 3,
    tag: 'Պրոդուկտներ',
    tagColor: '#e6007e',
    title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
    date: '21.08.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png',
  },
]

function NewsSection() {
  return (
    <section className="bg-[#eef2fb] py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Վերջին նորությունները
          </h2>
          <a
            href="#"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4d3f8] px-6 py-3 font-semibold text-purple-800 transition-colors hover:bg-[#d8bff5] sm:inline-flex"
          >
            Բոլոր նորությունները
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_DATA.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[439/320] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-4 w-[3px] rounded-full"
                    style={{ backgroundColor: item.tagColor }}
                  />
                  <span className="text-sm font-medium text-gray-500">{item.tag}</span>
                </div>

                <h3 className="mb-4 text-lg font-bold leading-snug text-gray-900">
                  {item.title}
                </h3>

                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#e4d3f8] px-6 py-3 font-semibold text-purple-800 transition-colors hover:bg-[#d8bff5]"
          >
            Բոլոր նորությունները
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Biometric />
      <BestFromEvoca />
      <CardsShowcase />
      <Calculator />
      <OnlineBankingBanner />
      <Partners />
      <NewsSection />
    </>
  )
}

export default App