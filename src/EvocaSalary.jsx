import React, { useState } from 'react';
import { Home, ChevronRight, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import News from './News';
import CardsSocial from './CardsSocial';
import OnlineBanner from './OnlineBanner';

export default function EvocaSalary() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:"
    },
    {
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ոչ, ծառայությունից կարող եք օգտվել անկախ նրանից՝ փոխում եք գործատուն, թե շարունակում եք աշխատել նույն վայրում:"
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Այո, կարող եք դիմել և դառնալ Evocabank-ի հաճախորդ վայրկյանների ընթացքում:"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններից կսկսեք օգտվել քարտը ստանալուն և առաջին աշխատավարձային փոխանցումը կատարելուն պես:"
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո, հնարավոր է ստանալ հավելյալ քարտեր տարբեր արժույթներով:"
    },
    {
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: "Կարող եք լրացնել առցանց հայտ կամ այցելել Բանկի ցանկացած մասնաճյուղ:"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
        <Home className="w-4 h-4 text-gray-400" />
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span>Ահատ</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-purple-700 font-medium">EvocaSALARY</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-snug">
            EVOCA <br />
            ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ <br />
            ՆԱԽԱԳԻԾ
          </h1>
          <p className="text-gray-600 text-base lg:text-lg max-w-xl">
            Քո աշխատավարձը կարող է քեզ տալ շատ ավելին: <br />
            Պարզապես պետք է ընտրել Evocabank-ը:
          </p>
        </div>
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="bg-purple-900 rounded-3xl p-6 w-full max-w-lg shadow-xl flex items-center justify-center overflow-hidden">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
              alt="Evoca SALARY" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* Social Sidebar */}
        <div className="lg:col-span-1 hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
          <a href="#facebook" className="w-10 h-10 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 rounded-full flex items-center justify-center text-gray-600 transition-colors">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="#linkedin" className="w-10 h-10 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 rounded-full flex items-center justify-center text-gray-600 transition-colors">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a href="#instagram" className="w-10 h-10 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 rounded-full flex items-center justify-center text-gray-600 transition-colors">
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Content Body */}
        <div className="lg:col-span-11 space-y-8 text-gray-700 leading-relaxed text-base">
          <p>
            Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուից բացի, ցանկանում են նաև ստանալ <span className="text-purple-700 font-semibold cursor-pointer hover:underline">նոր հնարավորություններ ու առավելություններ</span>:
          </p>

          <div className="space-y-3">
            <h3 className="text-purple-700 font-bold text-lg cursor-pointer hover:underline">
              Բեր աշխատավարձ Evoca, Տար անվճար Mastercard Gold
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Պրեմիում դասի քարտ</li>
              <li>Հասանելի ամբողջ աշխարհում</li>
              <li>Գումարի անվտանգության բարձր մակարդակ</li>
              <li>Դրական մնացորդի նկատմամբ <span className="font-semibold text-purple-700">2% տարեկան տոկոսադրույք</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-purple-700 font-bold text-lg cursor-pointer hover:underline">
              Բեր աշխատավարձ Evoca, Տար 50% զեղչով Evoca Travel Card
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Մինչև <span className="font-semibold text-purple-700">1.5% cashback</span> արտասահմանում իրականացված վճարումների համար</li>
              <li>Անվճար <span className="font-semibold text-purple-700">6 մուտք</span> Lounge Key սրահներ քեզ և հյուրերիդ համար</li>
              <li>Անվճար <span className="font-semibold text-purple-700">6 անգամ</span> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</li>
              <li>Այլ ճամփորդական առավելություններ</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-purple-700 font-bold text-lg cursor-pointer hover:underline">
              Բեր աշխատավարձ Evoca, Տար մի շարք Բենեֆիթներ
            </h3>
            <p>
              Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <span className="text-purple-700 font-semibold cursor-pointer hover:underline">Evoca Benefits</span> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Մինչև <span className="font-semibold text-purple-700">25% զեղչ</span></li>
              <li>Մինչև <span className="font-semibold text-purple-700">25% cashback</span></li>
              <li>Նվեր քարտեր</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-purple-700 font-bold text-lg cursor-pointer hover:underline">
              Բեր աշխատավարձ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
            </h3>
            <div className="mt-4 p-5 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-2">
              <h4 className="text-purple-800 font-bold cursor-pointer hover:underline">Անշարժ գույքի գրավով սպառողական վարկ</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><span className="font-semibold text-purple-700">0.5%-ով</span> ցածր տոկոսադրույք</li>
                <li>Մինչև <span className="font-semibold text-purple-700">100 մլն դրամ</span> գումար</li>
                <li>Մինչև <span className="font-semibold text-purple-700">120 ամիս</span> մարման ժամկետ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-gray-50/70 py-16 mt-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Վերջին նորությունները</h2>
            <button className="px-6 py-2.5 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors flex items-center gap-2">
              Բոլոր նորությունները <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <News />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Հաճախ տրվող հարցեր</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                openFaq === index ? 'border-purple-600 shadow-md bg-purple-50/20' : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-gray-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm lg:text-base leading-relaxed border-t border-purple-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner & Reviews */}
      <OnlineBanner />
    </div>
  );
}