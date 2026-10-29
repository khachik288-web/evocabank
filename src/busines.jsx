import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BusinessHeader from './BusinessHeader';
import OnlineBanner from './OnlineBanner';

import {
  ChevronRight,
  Plus,
  Edit3,
  Trash2,
  Sparkles,
  Layers,
  X
} from 'lucide-react';

export const DEFAULT_LOANS_DATA = [
  {
    id: '1',
    image: 'https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png',
    title: 'Արագ բիզնես վարկ/վարկային գիծ',
    subtitle: 'Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:',
    description: 'Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Արագ բիզնես վարկ/վարկային գիծ'],
    paragraphs: [
      ['Evocabank-ի Արագ բիզնես վարկ/վարկային գիծը այն բիզնեսների համար է, որոնք ցանկանում են արագ ներդրումներ՝ առանց ավելորդ փաստաթղթաշրջանառության և բարդ ընթացակարգերի:'],
      [['b', 'Արագ բիզնես վարկը, վարկային գիծը հարմար է`']],
      ['• շրջանառու միջոցների համալրման,'],
      ['• հիմնական միջոցների ձեռքբերման,'],
      ['• ընթացիկ ծախսերի ֆինանսավորման,'],
      ['• կրեդիտորական պարտքերի մարման,'],
      ['• և այլ բիզնես նպատակների համար:'],
      ['Վարկ/վարկային գիծը տրամադրվում է`'],
      [['b', '• ԱՌԱՆՑ ֆինանսական վերլուծության,']],
      [['b', '• ԱՌԱՆՑ գրավի,']],
      [['b', '• ԱՌԱՆՑ հայտի ուսումնասիրության վճարի,']],
      [['b', '• ՄԻԱՅՆ երաշխավորությամբ']]
    ],
    stats: [
      { sublabel: 'մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { sublabel: 'մինչև', value: '30 մլն ֏', label: 'Սահմանաչափ կամ համարժեք արտարժույթ' },
      { sublabel: '', value: '9.22%-17.89%', label: 'Տարեկան տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Անկախ նրանից՝ Evocabank-ի հաճախորդ եք, թե ոչ, եթե ունեք գործող բիզնես և հստակ նպատակ, վարկը, վարկային գիծը հենց Ձեզ համար է:',
    bannerClass: 'purple'
  },
  {
    id: '2',
    image: 'https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png',
    title: 'Պարզ բիզնես վարկ',
    subtitle: 'Ստացեք Պարզ բիզնես վարկ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով:',
    description: "Ստացեք Պարզ բիզնես վարկ' անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:",
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Պարզ բիզնես վարկ'],
    paragraphs: [
      ['Ստացեք Պարզ բիզնես վարկ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով:'],
      ['Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:']
    ],
    stats: [
      { sublabel: 'մինչև', value: '50 մլն ֏', label: 'Սահմանաչափ (կամ համարժեք արտարժույթ)' },
      { sublabel: 'մինչև', value: '60 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '7.5%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Զարգացրեք Ձեր բիզնեսը արագ և շահավետ պայմաններով Evocabank-ի հետ:',
    bannerClass: 'purple'
  },
  {
    id: '3',
    image: 'https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png',
    title: 'Հաշվի վարկավորում',
    subtitle: 'Հոգացեք Ձեր բիզնեսի ընթացիկ ծախսերը հեշտությամբ:',
    description: 'Հանդիսանու՞մ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Հաշվի վարկավորում'],
    paragraphs: [['Հանդիսանու՞մ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:']],
    stats: [
      { sublabel: 'առավելագույնը', value: '500 մլն ֏', label: 'Կամ համարժեք արտարժույթ' },
      { sublabel: 'առավելագույնը', value: '12 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '7%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Վստահելի ֆինանսավորում Ձեր ընթացիկ գործունեության համար:',
    bannerClass: 'purple'
  },
  {
    id: '4',
    image: 'https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png',
    title: 'Պարտատոմսերով ապահովված վարկ',
    subtitle: 'Ստացեք վարկ Բանկի պարտատոմսերի գրավով:',
    description: 'Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Պարտատոմսերով ապահովված վարկ'],
    paragraphs: [['Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը:']],
    stats: [{ sublabel: 'մինչև', value: '80%', label: 'Պարտատոմսի գումարի' }],
    buttonText: 'Մանրամասն',
    banner: 'Շարունակեք ներդրումները առանց խնայողությունները կորցնելու:',
    bannerClass: 'purple'
  },
  {
    id: '5',
    image: 'https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg',
    title: 'Խոշոր և ՓՄՁ բիզնես վարկ',
    subtitle: 'Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:',
    description: 'Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Խոշոր և ՓՄՁ բիզնես վարկ'],
    paragraphs: [['Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:']],
    stats: [
      { sublabel: 'մինչև', value: '4 մլրդ ֏', label: 'Կամ համարժեք արտարժույթ' },
      { sublabel: 'մինչև', value: '180 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '8.2%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Մեծ հնարավորություններ Ձեր խոշոր նախագծերի համար:',
    bannerClass: 'purple'
  },
  {
    id: '6',
    image: 'https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg',
    title: 'Evoca GO',
    subtitle: 'Եվրոպական Ներդրումային Բանկի ֆինանսավորվող ծրագիր:',
    description: 'Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Evoca GO'],
    paragraphs: [['Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:']],
    stats: [
      { sublabel: 'մինչև', value: '500 մլն. ֏', label: 'Սահմանաչափ' },
      { sublabel: 'մինչև', value: '90 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: '', value: '10.5 %', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Եվրոպական ստանդարտներ և աջակցություն Ձեր բիզնեսին:',
    bannerClass: 'purple'
  },
  {
    id: '7',
    image: 'https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg',
    title: 'Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր',
    subtitle: 'Ձեռք բերեք էներգաարդյունավետ սարքավորումներ:',
    description: 'Եթե Դուք ցանկանում եք ձեռք բերել ԵԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Էներգաարդյունավետություն ՓՄՁ'],
    paragraphs: [['Եթե Դուք ցանկանում եք ձեռք բերել ԵԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:']],
    stats: [
      { sublabel: 'մինչև', value: '500 մլն. ֏', label: 'Սահմանաչափ' },
      { sublabel: 'մինչև', value: '5 տարի', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '9%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Խնայեք ռեսուրսները և բարձրացրեք արդյունավետությունը:',
    bannerClass: 'purple'
  },
  {
    id: '8',
    image: 'https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg',
    title: 'Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ',
    subtitle: 'Շահավետ տարբերակ առանց խնայողությունները ծախսելու:',
    description: 'Մի՛ օգտագործեք կուտակված խնայողությունները. Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Ավանդի գրավով վարկ'],
    paragraphs: [['Մի՛ օգտագործեք կուտակված խնայողությունները. Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք:']],
    stats: [{ sublabel: 'ավանդի գումարի', value: 'մինչև 95%', label: 'Սահմանաչափ' }],
    buttonText: 'Մանրամասն',
    banner: 'Արագ և ապահով լուծում Ձեր ֆինանսական հարցերի համար:',
    bannerClass: 'purple'
  },
  {
    id: '9',
    image: 'https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg',
    title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում',
    subtitle: 'Կանաչ և էներգախնայող ներդրումներ բիզնեսի համար:',
    description: 'Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'KFW կանաչ ֆինանսավորում'],
    paragraphs: [['Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:']],
    stats: [
      { sublabel: 'առանց գրավի', value: '10 մլն. ֏', label: 'Սահմանաչափ' },
      { sublabel: 'Մինչև', value: '120 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: '', value: '9.5%', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Ներդրե՛ք ապագայի տեխնոլոգիաներում այսօր:',
    bannerClass: 'purple'
  },
  {
    id: '10',
    image: 'https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg',
    title: 'Վարկային գիծ',
    subtitle: 'Մշտապես հասանելի վարկային միջոցներ Ձեր բիզնեսի համար:',
    description: 'Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Վարկային գիծ'],
    paragraphs: [['Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:']],
    stats: [
      { sublabel: 'մինչև', value: '1.5 մլրդ. ֏', label: 'Սահմանաչափ' },
      { sublabel: 'մինչև', value: '5 տարի', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '6%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Ճկունություն և վստահություն Ձեր ամենօրյա գործարքներում:',
    bannerClass: 'purple'
  },
  {
    id: '11',
    image: 'https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg',
    title: 'Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)',
    subtitle: 'Մատչելի ֆինանսավորում բիզնեսի արդիականացման համար:',
    description: 'Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Արտադրողականության խթանում'],
    paragraphs: [['Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:']],
    stats: [
      { sublabel: 'մինչև', value: '1 մլրդ ֏', label: 'Սահմանաչափ' },
      { sublabel: 'մինչև', value: '120 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: 'Սուբսիդավորում', value: 'մինչև 6%', label: 'Տոկոսադրույքի' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Բարձրացրեք արտադրողականությունը պետական աջակցությամբ:',
    bannerClass: 'purple'
  },
  {
    id: '12',
    image: 'https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg',
    title: 'KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում',
    subtitle: 'Կատարեք կապիտալ ներդրումներ Evocabank-ի հետ.',
    description: 'Կատարե՛ք Ձեր կապիտալ ներդրումները և իրականացրե՛ք բիզնես գործունեության նպատակները Evocabank-ի հետ:',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'KFW ՄՓՄՁ ֆինանսավորում'],
    paragraphs: [['Կատարե՛ք Ձեր կապիտալ ներդրումները և իրականացրե՛ք բիզնես գործունեության նպատակները Evocabank-ի հետ:']],
    stats: [
      { sublabel: 'մինչև', value: '160 մլն. ֏', label: 'Սահմանաչափ' },
      { sublabel: 'մինչև', value: '60 ամիս', label: 'Մարման ժամկետ' },
      { sublabel: 'սկսած', value: '9,5%-ից', label: 'Տոկոսադրույք' }
    ],
    buttonText: 'Մանրամասն',
    banner: 'Հուսալի գործընկեր Ձեր ձեռնարկատիրական նպատակների համար:',
    bannerClass: 'purple'
  }
];

export function LoanCard({
  image,
  title,
  description,
  stats = [],
  buttonText = 'Մանրամասն',
  onAction,
  className = ''
}) {
  const { t } = useTranslation();

  return (
    <div className={`py-10 border-b border-gray-200/80 last:border-b-0 text-[#212529] font-sans ${className}`}>
      <div className="flex flex-col md:flex-row items-stretch md:items-start gap-8 lg:gap-12">
        <div className="w-full md:w-[380px] lg:w-[415px] flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden bg-[#f4f5f8] aspect-[415/261] flex items-center justify-center group shadow-sm transition-transform duration-300 hover:shadow-md">
            <img
              src={image}
              alt={t(title)}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/415x261/f4f5f8/6c3baa?text=Evocabank';
              }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between self-stretch">
          <div>
            <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#111111] tracking-tight mb-3 leading-snug">
              {t(title)}
            </h2>
            <p className="text-[#6c757d] text-[14px] lg:text-[15px] leading-relaxed mb-6 font-normal max-w-4xl">
              {t(description)}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    {stat.sublabel && (
                      <span className="text-[12px] text-[#868e96] font-medium leading-none mb-1">
                        {t(stat.sublabel)}
                      </span>
                    )}
                    <div className="text-[22px] lg:text-[26px] font-bold text-[#7B2CBF] leading-tight tracking-tight my-0.5">
                      {t(stat.value)}
                    </div>
                    {stat.label && (
                      <span className="text-[12px] lg:text-[13px] text-[#6c757d] font-medium leading-snug">
                        {t(stat.label)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (onAction) onAction();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f0e8f8] hover:bg-[#e4d4f4] text-[#7B2CBF] font-semibold text-[14px] transition-all duration-200 shadow-xs hover:shadow-sm group active:scale-95 cursor-pointer"
            >
              <span>{t(buttonText)}</span>
              <ChevronRight className="w-4 h-4 text-[#7B2CBF] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Business() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loans, setLoans] = useState(DEFAULT_LOANS_DATA);
  const [editingCard, setEditingCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    image: '',
    title: '',
    subtitle: '',
    description: '',
    crumb: ['Բիզնես', 'Վարկեր', 'Բիզնես վարկեր', 'Վարկ'],
    paragraphs: [],
    stats: [{ sublabel: 'մինչև', value: '50 մլն ֏', label: 'Սահմանաչափ' }],
    buttonText: 'Մանրամասն',
    banner: 'Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ:',
    bannerClass: 'purple'
  });

  const handleOpenEdit = (loan) => {
    setEditingCard(loan.id);
    setFormData(JSON.parse(JSON.stringify(loan)));
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingCard) {
      setLoans(loans.map((item) => (item.id === editingCard ? formData : item)));
    } else {
      setLoans([formData, ...loans]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setLoans(loans.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setLoans(DEFAULT_LOANS_DATA);
  };

  const handleDetail = (loan) => {
    navigate(`/card/${loan.id}`, { state: { item: loan } });
  };

  return (
    <div className="min-h-screen bg-white text-[#212529] font-sans antialiased">
      <BusinessHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-10 text-left border-b border-gray-100 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-2">
            {t('Բիզնես վարկեր')}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            {t('Evocabank բիզնես ֆինանսավորման ծրագրեր և ճկուն վարկային ապրանքներ')}
          </p>
        </div>

        <div className="space-y-2">
          {loans.map((loan) => (
            <div key={loan.id} className="relative group/card">
              <div className="absolute top-4 right-0 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1.5 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg border border-purple-100 shadow-sm">
                <button
                  onClick={() => handleOpenEdit(loan)}
                  className="p-1.5 rounded-md hover:bg-purple-100 text-purple-700 transition-colors cursor-pointer"
                  title={t('Խմբագրել')}
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(loan.id)}
                  className="p-1.5 rounded-md hover:bg-red-100 text-red-600 transition-colors cursor-pointer"
                  title={t('Ջնջել')}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <LoanCard
                image={loan.image}
                title={loan.title}
                description={loan.description}
                stats={loan.stats}
                buttonText={loan.buttonText}
                onAction={() => handleDetail(loan)}
              />
            </div>
          ))}

          {loans.length === 0 && (
            <div className="py-20 text-center text-gray-400">
              <Layers className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">{t('Քարտեր չեն գտնվել')}</p>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 rounded-xl bg-purple-100 text-[#7B2CBF] text-sm font-semibold hover:bg-purple-200 transition-colors cursor-pointer"
              >
                {t('Վերականգնել ցանկը')}
              </button>
            </div>
          )}
        </div>
      </main>

      <OnlineBanner />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                {editingCard ? t('Խմբագրել քարտը') : t('Ավելացնել նոր քարտ')}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('Վերնագիր')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('Նկարագրություն')}
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors cursor-pointer"
                >
                  {t('Չեղարկել')}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#7B2CBF] hover:bg-[#6A24A6] text-white text-sm font-semibold shadow-sm transition-all cursor-pointer"
                >
                  {t('Պահպանել')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}