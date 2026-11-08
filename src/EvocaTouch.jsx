import React from 'react';
import Tr from './Tr';
import { Home, ChevronRight } from 'lucide-react';
import OnlineBanner from './OnlineBanner';
import CardsSocial from './CardsSocial';
import { onDownload } from './downloadFile';

export default function EvocaTouch() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
        <Home className="w-4 h-4 text-gray-400" />
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span><Tr>{"Անհատ"}</Tr></span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-purple-700 font-medium">EvocaTOUCH</span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* Social Sidebar */}
        

        {/* Content Body */}
        <div className="lg:col-span-11 space-y-6 text-gray-700 leading-relaxed text-base">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            EvocaTOUCH
          </h1>

          <p>
            <Tr>{"Շատերին թվում է` դժվար ու անհրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և ժամանակակից պրոդուկտներով:"}</Tr>
          </p>

          <p>
            <Tr>{"Այդ գաղափարների շարքին է նոր "}</Tr><span className="text-purple-700 font-semibold cursor-pointer hover:underline">EvocaTOUCH</span><Tr>{" հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով և հնարավորություններով:"}</Tr>
          </p>

          <p>
            <Tr>{"EvocaTOUCH հավելվածն անվճար է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար: Կարևորելով հավելվածի անվտանգ օգտագործումը` Բանկն ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարված գործարքների պաշտպանությունը` օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:"}</Tr>
          </p>

          <h3 className="text-gray-900 font-bold text-lg pt-2">
            <Tr>{"EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մրսայ տեխնոլոգիաներով:"}</Tr>
          </h3>

          <p>
            <Tr>{"Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance` Dark և Light: Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի` ամենակարևոր ու շատ օգտագործվող ֆունկցիաևրն անմիջապես առաջին էջին են` Քարտեր, Հաշիվներ, Վարկեր, Ավանդներ: Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ: Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին թերթվող story-ների միջոցով:"}</Tr>
          </p>

          <p>
            <Tr>{"EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի:"}</Tr>
          </p>

          <p>
            <Tr>{"Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները` վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման և սպասարկման վճարի` օգտատերերը կարող են."}</Tr>
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><Tr>{"Բացել բանկային հաշիվներ,"}</Tr></li>
            <li><Tr>{"Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,"}</Tr></li>
            <li><Tr>{"Ստանալ վարկ,"}</Tr></li>
            <li><Tr>{"Ներդրել ավանդ,"}</Tr></li>
            <li><Tr>{"Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայկական, այնպես էլ արտերկրյա բանկերին,"}</Tr></li>
            <li><Tr>{"Կատարել բանկային փոխանցումներ և վճարումներ,"}</Tr></li>
            <li><Tr>{"Կատարել կոմունալ վճարումներ,"}</Tr></li>
            <li><Tr>{"Առցանց ստանալ ավտոտեսուչների տուգանքները և իրականացնել վճարումներ մեկ հպումով,"}</Tr></li>
            <li><Tr>{"Կատարել փոխանցումներ կոնտակտային տվյալներով,"}</Tr></li>
            <li><Tr>{"24/7 ուղղել հարցեր նամակի միջոցով:"}</Tr></li>
          </ul>

          <p>
            <Tr>{"Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: Հաճախորդակենտրոն մոտեցման շնորհիվ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին ու կարիքներին:"}</Tr>
          </p>

          <p>
            <Tr>{"Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը` օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական համակարգերին: "}</Tr><span className="text-purple-700 font-semibold cursor-pointer hover:underline"><Tr>{"Բացի այդ"}</Tr></span><Tr>{", նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական համակարգերի հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:"}</Tr>
          </p>

          <p>
            <Tr>{"EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի:"}</Tr>
          </p>

          <p className="font-semibold text-gray-900">
            <Tr>{"EvocaTOUCH-ը պարզապես բանկային հավելված չէ. կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մասն:"}</Tr>
          </p>

          {/* Documents Section */}
          <div className="pt-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900"><Tr>{"Փաստաթղթեր"}</Tr></h3>
            <a 
              href="#"
              onClick={onDownload('Համալիր բանկային ծառայությունների մատուցման պայմաններ')}
              className="flex items-center gap-3 p-4 bg-purple-50/60 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors w-full max-w-xl group"
            >

              <span className="text-purple-900 font-medium text-sm lg:text-base flex-1">
                <Tr>{"Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ."}</Tr>
              </span>
            </a>
          </div>
        </div>
        
      </div>
            <OnlineBanner />
    </div>
  );
}