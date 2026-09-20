import { useState, useEffect } from 'react'
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

          {/* face image on top */}
          <img
            src="https://www.evoca.am/img/temp/biometric/face2.png"
            alt="Face ID biometric scan"
            className="absolute left-1/2 top-[6%] h-[88%] w-auto -translate-x-1/2 object-contain"
          />
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

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Biometric />
    </>
  )
}

export default App