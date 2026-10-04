import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Phone } from 'lucide-react';

const PURPLE = '#6a00db';
const IMG = (id, ext = 'jpg') =>
  `https://www.evoca.am/images-cache/loans/1/${id}/415x261.${ext}`;

// Категории фильтра
const FILTERS = [
  { key: 'all', label: 'Բոլորը' },
  { key: 'secured', label: 'Գրավով ապահովված սպառողական վարկեր' },
  { key: 'unsecured', label: 'Անգրավ սպառողական վարկեր' },
  { key: 'mortgage', label: 'Հիփոթեքային վարկեր' },
  { key: 'auto', label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում' },
  { key: 'installment', label: 'Ապառիկ' },
  { key: 'online', label: 'Օնլայն վարկեր' },
];

const LOANS = [
  {
    id: 'unsecured',
    cats: ['unsecured'],
    title: 'Անգրավ սպառողական վարկ',
    text: 'Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։',
    img: IMG('16142452390605'),
    stats: [
      { pre: 'մինչև', value: '10 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { pre: 'սկսած', value: '19%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'car',
    cats: ['auto'],
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    text: 'Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը։ Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։',
    img: IMG('16142451996694'),
    stats: [
      { pre: 'մինչև', value: '50 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '84 ամիս', label: 'Ժամկետ' },
      { pre: 'սկսած', value: '13%-ից', label: 'Տոկոսադրույք' },
      { pre: 'սկսած', value: '10%-ից', label: 'Կանխավճար' },
    ],
  },
  {
    id: 'collateral',
    cats: ['secured'],
    title: 'Գույքի գրավով ապահովված վարկ',
    text: 'Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց',
    img: IMG('16142566831396'),
    stats: [
      { pre: 'մինչև', value: '150 մլն ֏', label: 'Գումար' },
      { pre: 'անշարժ գույքի գրավադրման դեպքում', value: '24-180 ամիս', label: 'Վարկի մարման ժամկետը' },
      { pre: 'շարժական գույքի գրավադրման դեպքում', value: '60 ամիս', label: 'Վարկի մարման ժամկետը' },
      { pre: 'Սկսած', value: '14%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'power',
    cats: ['installment'],
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    text: 'Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։',
    img: IMG('17552479364123', 'png'),
    stats: [
      { pre: 'Մինչև', value: '5 մլն ֏', label: 'Գումար' },
      { pre: 'Մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { pre: 'Սկսած', value: '0%-ից', label: 'Տոկոսադրույքից' },
    ],
  },
  {
    id: 'gold',
    cats: ['secured'],
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    text: 'Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։',
    img: IMG('16142452902587'),
    stats: [
      { pre: 'մինչև', value: '50 մլն ֏', label: 'Գումար' },
      { value: '3-60 ամիս', label: 'Ժամկետ' },
      { pre: 'սկսած', value: '15.5%-ից', label: 'Տոկոսադրույք' },
      { pre: 'մինչև', value: '150%', label: 'Վարկ / գրավ հարաբերակցություն' },
    ],
  },
  {
    id: 'installment',
    cats: ['installment'],
    title: 'Տեղում Ապառիկ',
    text: 'Ցանկանու՞մ եք ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չեք ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։',
    img: IMG('16131174467985'),
    stats: [
      { pre: 'մինչև', value: '5 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { pre: 'Սկսած', value: '0%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'salary',
    cats: ['unsecured'],
    title: 'Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ',
    text: 'Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ։ Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։',
    img: IMG('16142653302177'),
    stats: [],
  },
  {
    id: 'mortgage',
    cats: ['mortgage'],
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    text: 'Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։',
    img: IMG('1614244906092'),
    stats: [
      { pre: 'մինչև', value: '80 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '240 ամիս', label: 'Ժամկետ' },
      { pre: 'սկսած', value: '13.2%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'action',
    cats: ['online', 'unsecured'],
    title: 'Action',
    text: 'Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։',
    img: IMG('16994456305602', 'png'),
    stats: [
      { pre: 'մինչև', value: '10 մլն ֏', label: 'Սահմանաչափ' },
      { pre: 'մինչև', value: '60 ամիս', label: 'Մարման ժամկետ' },
      { pre: 'սկսած', value: '18%-ից', label: 'Տարեկան անվանական տոկոսադրույք' },
    ],
  },
  {
    id: 'artsakh',
    cats: ['mortgage'],
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    text: 'Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին։',
    img: IMG('17364209867562', 'png'),
    stats: [
      { pre: 'մինչև', value: '55 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '120 ամիս', label: 'Մարման ժամկետ' },
      { value: '13%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'land',
    cats: ['mortgage'],
    title: 'Հողամասի ձեռքբերման վարկ',
    text: 'Փնտրու՞մ եք հողատարածք՝ Ձեր երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դուք արդեն գտել եք այն։',
    img: IMG('17421922764367'),
    stats: [
      { pre: 'մինչև', value: '80 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '240 ամիս', label: 'Ժամկետ' },
      { pre: 'սկսած', value: '14%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'micro',
    cats: ['mortgage', 'unsecured'],
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    text: 'Պլանավորու՞մ եք բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։',
    img: IMG('17461652642369', 'png'),
    stats: [
      { pre: 'մինչև', value: '5 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { value: '17%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'leasing',
    cats: ['auto'],
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    text: 'Ձեռք բերեք Ձեր երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով։',
    img: IMG('17764888992084', 'png'),
    stats: [
      { pre: 'Մինչև', value: '50 մլն ֏', label: 'Գումար' },
      { pre: 'Մինչև', value: '60 ամիս', label: 'Ժամկետ' },
      { pre: 'Սկսած', value: '14%-ից', label: 'Տոկոսադրույքից' },
    ],
  },
  {
    id: 'overdraft',
    cats: ['online', 'unsecured'],
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    text: 'Ունես չնախատեսված ծախսեր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է։ 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության։',
    img: IMG('16947885698869', 'png'),
    stats: [
      { pre: 'մինչև', value: '10 մլն ֏', label: 'Սահմանաչափ' },
      { pre: 'մինչև', value: '36 ամիս', label: 'Մարման ժամկետ' },
      { pre: 'սկսած', value: '16%-ից', label: 'Տարեկան անվանական տոկոսադրույք' },
    ],
  },
  {
    id: 'investment',
    cats: ['secured'],
    title: 'Անհատական վարկ «Ներդրումային»',
    text: 'Ոչ թե վարկ, այլ ներդրում. գիտե՞ս, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։',
    img: IMG('17364087555297', 'png'),
    stats: [
      { pre: 'մինչև', value: '350 մլն ֏', label: 'Գումար' },
      { pre: 'մինչև', value: '240 ամիս', label: 'Մարման ժամկետ' },
      { value: '15%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 'military',
    cats: ['mortgage'],
    title: 'Հիփոթեքային վարկեր Զինծառայողներին',
    text: 'Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։',
    img: IMG('17129179540435', 'png'),
    stats: [
      { pre: 'մինչև', value: '25,65 մլն ֏', label: 'Սահմանաչափ' },
      { value: '120-240 ամիս', label: 'Մարման ժամկետ' },
      { pre: '11-ից -', value: '12.75%', label: 'Տարեկան անվանական տոկոսադրույք' },
      { value: '5%', label: 'Սուբսիդավորվող տոկոսադրույք' },
    ],
  },
];

function Stat({ pre, value, label }) {
  return (
    <div className="flex flex-col justify-end">
      {pre && <span className="text-[11px] leading-tight text-gray-800">{pre}</span>}
      <span
        className="text-[28px] font-medium leading-tight whitespace-nowrap"
        style={{ color: PURPLE }}
      >
        {value}
      </span>
      <span className="mt-2 text-[11px] leading-tight text-gray-800">{label}</span>
    </div>
  );
}

function LoanCard({ loan }) {
  return (
    <article className="flex flex-col gap-6 border-b border-gray-200 py-12 last:border-b-0 md:flex-row md:gap-[72px]">
      <img
        src={loan.img}
        alt={loan.title}
        loading="lazy"
        className="h-[261px] w-full flex-none rounded-lg object-cover md:w-[415px]"
      />
      <div className="min-w-0 flex-1">
        <h2 className="mb-4 text-[26px] font-extrabold leading-snug text-black">{loan.title}</h2>
        <p className="mb-5 max-w-[760px] text-[14px] leading-relaxed text-gray-800">{loan.text}</p>

        {loan.stats.length > 0 && (
          <div className="mb-6 grid grid-cols-2 items-end gap-x-6 gap-y-5 lg:grid-cols-4">
            {loan.stats.map((s, i) => (
              <Stat key={i} {...s} />
            ))}
          </div>
        )}

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-3 rounded-full px-[30px] py-[14px] text-[14px] font-semibold no-underline hover:no-underline"
          style={{ background: '#ece6f8', color: PURPLE, marginTop: loan.stats.length ? 0 : 24 }}
        >
          Մանրամասն <ChevronRight size={16} />
        </a>
      </div>
    </article>
  );
}

export function FloatingActions() {
  return (
    <>
      <button
        type="button"
        aria-label="call"
        className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-md"
        style={{ background: '#d9c8f5', color: PURPLE }}
      >
        <Phone size={20} fill="currentColor" />
      </button>
    </>
  );
}

export default function Loans() {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? LOANS : LOANS.filter((l) => l.cats.includes(filter));

  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumbs: Անհատ → Վարկեր → Վարկեր */}
        <nav className="flex items-center gap-2 pt-8 text-[12px] text-gray-800">
          <Link to="/" aria-label="Home" className="text-gray-500 no-underline">
            <Home size={16} />
          </Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link to="/" className="text-gray-800 no-underline hover:no-underline">Անհատ</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link to="/loans" className="text-gray-800 no-underline hover:no-underline">Վարկեր</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span>Վարկեր</span>
        </nav>

        <h1 className="mt-16 mb-12 text-[40px] font-extrabold">Վարկեր</h1>

        {/* Filter chips */}
        <div className="mb-16 flex flex-wrap gap-x-5 gap-y-4">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className="rounded-full px-[15px] py-[11px] text-[14px] transition-colors"
                style={
                  active
                    ? { background: PURPLE, color: '#fff', fontWeight: 600 }
                    : { background: '#f1f1f1', color: '#222' }
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <section>
          {list.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </section>
      </div>

      {/* Дата обновления */}
      <div className="border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 text-right text-[12px] text-gray-500">
          Թարմացվել է՝ 04/09/2026 17:45
        </div>
      </div>

      <FloatingActions />
    </main>
  );
}