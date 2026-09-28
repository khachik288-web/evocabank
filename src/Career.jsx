import React, { useState } from 'react';
import { EvocaFooter } from './App';

const Career = () => {
  const [activeTab, setActiveTab] = useState('Մշակույթ');

  const tabs = [
    'Մշակույթ',
    'Առավելություններ',
    'Հաճախ տրվող հարցեր',
    'Ինչպես ընդունվել աշխատանքի Evocabank-ում'
  ];

  // Данные видеороликов с обложками и названиями
  const videoData = [
    {
      id: "gowxeSi1iJs",
      title: "Evoca New Year Corporate Party 2022",
      cover: "https://img.youtube.com/vi/gowxeSi1iJs/hqdefault.jpg"
    },
    {
      id: "PF9JbEC-z-I",
      title: "EVOCAISLAND Evoca Summer Party 2022",
      cover: "https://img.youtube.com/vi/PF9JbEC-z-I/hqdefault.jpg"
    },
    {
      id: "PvDYyPGb3RU",
      title: "Attention!! You have never seen anything like this",
      cover: "https://img.youtube.com/vi/PvDYyPGb3RU/hqdefault.jpg"
    },
    {
      id: "VNVSaTULcBk",
      title: "Evocabank Life & Work Culture",
      cover: "https://img.youtube.com/vi/VNVSaTULcBk/hqdefault.jpg"
    },
    {
      id: "ygQS-e1-2I8",
      title: "Evocabank Team Building Event",
      cover: "https://img.youtube.com/vi/ygQS-e1-2I8/hqdefault.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // По умолчанию центральный элемент
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? videoData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === videoData.length - 1 ? 0 : prev + 1));
  };

  // Вычисление индексов для 3D-слайдера (Левый, Центральный, Правый)
  const getIndex = (offset) => {
    return (currentIndex + offset + videoData.length) % videoData.length;
  };

  const prevCard = videoData[getIndex(-1)];
  const currentCard = videoData[currentIndex];
  const nextCard = videoData[getIndex(1)];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* 1. Sub-navigation Menu */}
      <div className="bg-[#600bb8] flex justify-center items-center py-4 px-4 overflow-x-auto shadow-md sticky top-0 z-50">
        <div className="flex space-x-8 text-white font-semibold text-sm whitespace-nowrap">
          {tabs.map((tab) => (
            <span 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer transition-all duration-300 hover:text-purple-300 ${activeTab === tab ? 'text-white border-b-2 border-white pb-1' : 'text-purple-200'}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden group">
        <img 
          src="https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg" 
          alt="Evoca Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Floating White Card */}
        <div className="absolute bottom-10 left-10 md:left-32 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Մշակույթ</h1>
          <p className="text-gray-600 leading-relaxed">
            Evoca-ում աշխատելը հաճելի է։ Առօրյան լցված է նորարարություններով։ Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։
          </p>
        </div>
      </div>

      {/* 3. Why work at Evoca */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Ինչու՞ աշխատել Evoca-ում</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին։
        </p>
        <div className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-105">
          <img 
            src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
            alt="Girl on Beanbag" 
            className="w-full max-w-3xl object-cover rounded-xl"
          />
        </div>
      </div>

      {/* 4. Video Culture 3D Slider Section (КАК НА ФОТО) */}
      <div className="bg-[#600bb8] py-20 px-4 md:px-12 text-white text-center relative overflow-hidden select-none">
        
        {/* Плавающие 3D Декоративные фигуры (как на скриншоте) */}
        {/* Розовая зигзагообразная лестница слева */}
        <div className="absolute top-12 left-8 md:left-20 opacity-80 animate-bounce duration-[3000ms]">
          <svg className="w-10 h-10 text-pink-400 fill-current" viewBox="0 0 24 24">
            <path d="M3 3h4v4h4v4h4v4h4v4h-4v-4h-4v-4h-4V7H3V3z"/>
          </svg>
        </div>

        {/* Белый перевернутый треугольник слева */}
        <div className="absolute top-36 left-12 md:left-32 opacity-70">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-white/80"></div>
        </div>

        {/* Желтый треугольник сверху справа */}
        <div className="absolute top-10 right-12 md:right-32 opacity-90 rotate-12">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-yellow-400"></div>
        </div>

        {/* Розовое кольцо / торус справа */}
        <div className="absolute top-44 right-8 md:right-16 w-8 h-8 border-[6px] border-pink-400 rounded-full opacity-80 rotate-[35deg] transform"></div>

        {/* Желтая цилиндрическая таблетка снизу слева */}
        <div className="absolute bottom-10 left-16 md:left-28 w-10 h-4 bg-yellow-300 rounded-full opacity-90 -rotate-12"></div>

        {/* Светлый треугольник снизу справа */}
        <div className="absolute bottom-8 right-24 md:right-40 opacity-80 rotate-45">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-purple-200"></div>
        </div>

        {/* Заголовок и описание */}
        <h2 className="text-3xl font-bold mb-3 tracking-wide">Մշակույթ</h2>
        <p className="mb-14 max-w-3xl mx-auto text-purple-100 text-sm md:text-base leading-relaxed px-4">
          Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ: Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացեք մեզ!
        </p>

        {/* Главный контейнер 3D слайдера */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto min-h-[380px] md:min-h-[440px]">
          
          {/* Левая стрелка переключения (<-) */}
          <button 
            onClick={handlePrev} 
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/80 hover:text-white transition-transform hover:scale-125 focus:outline-none"
            aria-label="Previous"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Карточки слайдера */}
          <div className="flex items-center justify-center w-full relative">
            
            {/* 1. ЛЕВАЯ КАРТОЧКА (меньше размером, нажатие переключает) */}
            <div 
              onClick={handlePrev}
              className="hidden md:flex flex-col bg-white rounded-lg p-2.5 shadow-xl cursor-pointer transform -translate-x-8 scale-85 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out w-[280px] lg:w-[320px] shrink-0 z-10"
            >
              <div className="relative aspect-video bg-black rounded overflow-hidden group">
                <img src={prevCard.cover} alt={prevCard.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 font-bold text-xs mt-3 text-left px-1 truncate">
                {prevCard.title}
              </p>
            </div>

            {/* 2. ЦЕНТРАЛЬНАЯ КАРТОЧКА (активная, крупная) */}
            <div className="bg-white rounded-xl p-3 shadow-2xl transform scale-100 z-20 transition-all duration-500 ease-in-out w-[92%] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-inner">
                {!isPlaying ? (
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img 
                      src={currentCard.cover} 
                      alt={currentCard.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 bg-black/20 backdrop-blur-xs">
                        <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${currentCard.id}?autoplay=1`} 
                    title={currentCard.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
              <p className="text-gray-900 font-extrabold text-sm md:text-base mt-4 text-left px-2">
                {currentCard.title}
              </p>
            </div>

            {/* 3. ПРАВАЯ КАРТОЧКА (меньше размером, нажатие переключает) */}
            <div 
              onClick={handleNext}
              className="hidden md:flex flex-col bg-white rounded-lg p-2.5 shadow-xl cursor-pointer transform translate-x-8 scale-85 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out w-[280px] lg:w-[320px] shrink-0 z-10"
            >
              <div className="relative aspect-video bg-black rounded overflow-hidden group">
                <img src={nextCard.cover} alt={nextCard.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 font-bold text-xs mt-3 text-left px-1 truncate">
                {nextCard.title}
              </p>
            </div>

          </div>

          {/* Правая стрелка переключения (->) */}
          <button 
            onClick={handleNext} 
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/80 hover:text-white transition-transform hover:scale-125 focus:outline-none"
            aria-label="Next"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

        </div>
      </div>

      {/* 5. Team Quotes Section */}
      <div className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Quote Card 1 */}
          <div className="bg-purple-50 p-8 rounded-lg w-80 text-left relative shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-6xl text-[#600bb8] opacity-20">"</div>
            <h3 className="text-xl font-bold text-[#600bb8] mb-8 leading-snug">Թրենդային<br/>Պահանջված<br/>Ուրախ</h3>
            <p className="text-sm font-semibold">Հարություն Սահակյան</p>
            <p className="text-xs text-gray-500">Անվտանգության մասնագետ</p>
          </div>
          {/* Quote Card 2 */}
          <div className="bg-purple-50 p-8 rounded-lg w-80 text-left relative shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-6xl text-[#600bb8] opacity-20">"</div>
            <h3 className="text-xl font-bold text-[#600bb8] mb-8 leading-snug">Դինամիկ<br/>Պրպտող<br/>Զարգացող</h3>
            <p className="text-sm font-semibold">Լիլիթ Գաբոյան</p>
            <p className="text-xs text-gray-500">Գլխավոր ֆինանսական տնօրեն</p>
          </div>
          {/* Quote Card 3 */}
          <div className="bg-purple-50 p-8 rounded-lg w-80 text-left relative shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-6xl text-[#600bb8] opacity-20">"</div>
            <h3 className="text-xl font-bold text-[#600bb8] mb-8 leading-snug">Կրեատիվ<br/>Նորարար<br/>Մանուշակագույն</h3>
            <p className="text-sm font-semibold">Ալլա Զաքարյան</p>
            <p className="text-xs text-gray-500">Վճարային գործիքների մասնագետ</p>
          </div>
        </div>
      </div>

      {/* 6. Application Form */}
      <div className="max-w-3xl mx-auto py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#600bb8] mb-4">Դառնալ թիմի անդամ</h2>
          <p className="text-gray-600">
            Եթե ցանկանում ես միանալ <span className="font-bold text-[#600bb8]">EvocaTEAM</span>-ին,<br/>
            կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
          </p>
        </div>

        <form className="space-y-6 flex flex-col items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Անուն <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ազգանուն <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Հեռախոսահամար <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-4 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                 🇦🇲 +374
              </span>
              <input type="text" className="w-full border border-gray-300 rounded-r-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Էլ. հասցե</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook սոց. կայքում անձնական էջի հղում</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn սոց. կայքում անձնական էջի հղում</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ուղեկցող նամակ</label>
            <textarea rows="4" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#600bb8] transition-all"></textarea>
          </div>
          
          <div className="w-full border border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
             <span className="text-sm text-gray-600">Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span></span>
             <p className="text-xs mt-2 text-gray-400">Կցել ֆայլը / ֆայլերը</p>
          </div>

          <div className="w-full border border-gray-300 rounded-md p-4 w-fit mx-auto mt-4">
             <label className="block text-sm font-medium text-gray-700 mb-2">Ստուգման ծածկագիր <span className="text-red-500">*</span></label>
             <input type="text" placeholder="Մուտքագրեք ծածկագիրը" className="border border-gray-300 rounded-md p-2 w-full mb-2" />
             <div className="bg-gray-100 font-mono text-2xl tracking-widest text-center p-2 line-through font-bold border border-gray-200">
               4F7EVA
             </div>
          </div>

          <button type="button" className="bg-[#600bb8] hover:bg-[#4d0799] text-white font-bold py-4 px-12 rounded-full w-full md:w-auto mt-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>
        </form>
      </div>
      <EvocaFooter />
    </div>
  );
};

export default Career;