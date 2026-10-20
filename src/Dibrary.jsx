import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Список логотипов партнеров/ресурсов Dibrary (из твоего макета)
const DIBRARY_LOGOS = [
  { id: 1, name: 'EBSCO', img: 'https://www.evoca.am/file_manager/Dibrary/1_Ebso.jpg' },
  { id: 2, name: 'OpenStax', img: 'https://www.evoca.am/file_manager/Dibrary/Openstax.jpg' },
  { id: 3, name: 'OAPEN', img: 'https://www.evoca.am/file_manager/Dibrary/5_Logo_OAPEN.png' },
  { id: 4, name: 'Noravank', img: 'https://www.evoca.am/file_manager/Dibrary/N.jpg' },
  { id: 5, name: 'Springer', img: 'https://www.evoca.am/file_manager/Dibrary/2_Sp[1].jpg' },

  { id: 6, name: 'Polpred', img: 'https://www.evoca.am/file_manager/Dibrary/3_POlP.jpg' },
  { id: 7, name: 'Search', img: 'https://www.evoca.am/file_manager/Dibrary/431ea875.jpg' },
  { id: 8, name: 'The Royal Society', img: 'https://www.evoca.am/file_manager/Dibrary/RS.jpg' },
  { id: 9, name: 'eLibrary.ru', img: 'https://www.evoca.am/file_manager/Dibrary/Library.ru.jpg' },
  { id: 10, name: 'Open Textbook Library', img: 'https://www.evoca.am/file_manager/Dibrary/4_71691ad9.jpg' },

  { id: 11, name: 'DOAJ', img: 'https://www.evoca.am/file_manager/Dibrary/e6797964.jpg' },
  { id: 12, name: 'NLA', img: 'https://www.evoca.am/file_manager/Dibrary/NLA.jpg' },
  { id: 13, name: 'DOAB', img: 'https://www.evoca.am/file_manager/Dibrary/4_Doab.jpg' },
  { id: 14, name: 'OER Commons', img: 'https://www.evoca.am/file_manager/Dibrary/OpD.jpg' },
  { id: 15, name: 'OpenDOAR', img: 'https://www.evoca.am/file_manager/Dibrary/Duke.jpg' },

  { id: 16, name: 'Duke University Press', img: 'https://www.evoca.am/file_manager/Dibrary/5_JS[1].jpg' },
  { id: 17, name: 'JSTOR', img: 'https://www.evoca.am/file_manager/Dibrary/2_OBP.jpg' },
  { id: 18, name: 'Open Book Publishers', img: 'https://www.evoca.am/file_manager/Dibrary/Sage.jpg' },
  { id: 19, name: 'SAGE Journals', img: 'https://www.evoca.am/file_manager/Dibrary/3e144dee.jpg' },
  { id: 20, name: 'Bookboon', img: 'https://www.evoca.am/file_manager/Dibrary/6_Quest.jpg' },

  { id: 21, name: 'Journals for Free', img: 'https://www.evoca.am/file_manager/Dibrary/Logo_Journals4free.png' },
  { id: 22, name: 'ScienceDirect', img: 'https://www.evoca.am/file_manager/Dibrary/SD.jpg' },
  { id: 23, name: 'Open Knowledge Maps', img: 'https://www.evoca.am/file_manager/Dibrary/OKM.jpg' },
  { id: 24, name: 'B-OK', img: 'https://www.evoca.am/file_manager/Dibrary/dibrary-2.jpg' },
  { id: 25, name: 'Open Knowledge Repository', img: 'https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png' },

  { id: 26, name: 'Elgaronline', img: 'https://www.evoca.am/file_manager/Dibrary/Elg.jpg' },
  { id: 27, name: 'Search Engine', img: 'https://www.evoca.am/file_manager/Dibrary/Search.jpg' },
  { id: 28, name: 'BookBoon', img: 'https://www.evoca.am/file_manager/Dibrary/Logo_BookBoon.png' },
  { id: 29, name: 'IDEAS', img: 'https://www.evoca.am/file_manager/Dibrary/ideas.png' }
];

export default function Dibrary() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Хлебные крошки (Маршрут) */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-purple-700 transition-colors">🏠</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Dibrary</span>
        </nav>

        {/* Главный блок / Hero с закругленным фоном и фото */}
        <div className="bg-[#f4f5f8] rounded-3xl overflow-hidden flex flex-col lg:flex-row mb-12 shadow-sm">
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dibrary - Digital Library
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում՝ Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև Dibrary – digital library:
            </p>
          </div>
          <div className="flex-1 min-h-[300px] sm:min-h-[400px]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg"
              alt="Dibrary Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Контентная часть с боковыми соцсетями */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Левый сайдбар с соцсетями (как на макете Evoca) */}
          <div className="flex lg:flex-col gap-3 shrink-0">
            <a href="#fb" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-700 hover:text-white transition-colors">
              <FaFacebookF size={16} />
            </a>
            <a href="#in" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-700 hover:text-white transition-colors">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#ig" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-700 hover:text-white transition-colors">
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Основной текстовый блок и сетка логотипов */}
          <div className="flex-1">
            <div className="space-y-6 text-gray-800 text-base leading-relaxed mb-10">
              <p>
                <span className="text-purple-700 font-bold">#dibrary</span>-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝{' '}
                <span className="text-purple-700 font-semibold">e-Duke Journals Scholarly Collection</span>,{' '}
                <span className="text-purple-700 font-semibold">ASTM Compass</span>,{' '}
                <span className="text-purple-700 font-semibold">Edward Elgar Publishing Journals</span>,{' '}
                <span className="text-purple-700 font-semibold">Mathematical Sciences Publishers Journals</span>,{' '}
                <span className="text-purple-700 font-semibold">Royal Society Journals Collection</span>,{' '}
                <span className="text-purple-700 font-semibold">SAGE Premier</span> և այլն...
              </p>

              <p>
                <span className="text-purple-700 font-bold">#dibrary</span>-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսները: Բացի էլեկտրոնային նյութերից, <span className="text-purple-700 font-bold">#dibrary</span>-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելերները, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն:
              </p>

              <p>
                <span className="text-purple-700 font-bold">#dibrary</span>-ի բացման գործում մեզ աջակցել են <span className="text-purple-700 font-semibold">DLAA-ն՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia)</span>, <span className="text-purple-700 font-semibold">Ավետիք Իսահակյանի անվան գրադարանը</span> և <span className="text-purple-700 font-semibold">American Corner Yerevan-ը</span>: Նրանց աջակցության շնորհիվ <span className="text-purple-700 font-bold">#dibrary</span>-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի:
              </p>
            </div>

            {/* Сетка логотипов партнеров (5 колонок как на фото) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-[#f9fafc] p-6 rounded-2xl border border-gray-100 shadow-sm">
              {DIBRARY_LOGOS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200/60 rounded-xl p-3 flex items-center justify-center aspect-[16/9] shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}