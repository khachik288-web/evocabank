import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const IMG = (id, size, ext = 'png') =>
  `https://www.evoca.am/images-cache/blogs/1/${id}/${size}.${ext}`;

const NAVY = '#2a0a4f';
const BRACKET = '#2d2d2d';
const BAND_BG = 'linear-gradient(to bottom, #f4f4f4 0%, #f4f4f4 55%, #f6effe 100%)';

const POSTS = {
  recap: {
    cat: 'Կենսակերպ',
    title: 'Monthly Recap',
    text: 'Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:',
    date: '05.01.2026',
    img: IMG('17683779856926', '780x585'),
  },
  invest: {
    cat: 'Ներդրումներ',
    title: 'EvocaINVEST. ինչպե՞ս կատարել գործարքներ',
    text: 'Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կատարելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:',
    date: '17.06.2024',
    img: IMG('17186317173483', '616x462', 'jpg'),
  },
  can: {
    cat: 'Ներդրումներ',
    title: 'Ներդրումների կարելիներն ու չի կարելիները',
    date: '23.04.2024',
    img: IMG('17138737784517', '450x295', 'jpg'),
  },
  steps: {
    cat: 'Ներդրումներ',
    title: 'Փոքր քայլերով դեպի մեծ եկամուտներ',
    date: '11.04.2024',
    img: IMG('17128187874533', '450x295', 'jpg'),
  },
  account: {
    cat: 'Բիզնես',
    title: 'Ինչպես բացել բիզնես հաշվեհամար',
    date: '05.01.2024',
    img: IMG('16691870758279', '450x295', 'jpg'),
  },
  bazaar: {
    cat: 'Կենսակերպ',
    title: 'Գնումների նոր սովորույթներ',
    date: '09.02.2022',
    img: IMG('16443271105456', '450x295'),
  },
  newyear: {
    cat: 'Կենսակերպ',
    title: 'Ամանորի քո Evocaգույն երազանքը',
    text: 'Ավելի հաճելի է նվեր նվիրե՛լ, թե՛ ստանալ: Ինչպե՛ս երազանք պահել Ամանորի գիշերը: Ո՞րն է ամենաթրենդային նվերի տարբերակը: Բոլոր պատասխանները կգտնես բլոգում:',
    date: '21.12.2023',
    img: IMG('1703162335976', '780x585'),
  },
  movies: {
    cat: 'Կենսակերպ',
    title: '2021-ը դարձել է կինո պրեմիերաների մրցավազք',
    date: '01.02.2021',
    img: IMG('16329119822114', '438x328', 'jpg'),
  },
  series: {
    cat: 'Կենսակերպ',
    title: '2021-ի ամենասպասված 21 սերիալները',
    date: '18.01.2021',
    img: IMG('16329974590876', '438x328'),
  },
  future: {
    cat: 'Կենսակերպ',
    title: 'Ապագայի ամենապահանջված մասնագիտությունները',
    date: '22.06.2020',
    img: IMG('16335957379', '438x328'),
  },
  color: {
    cat: 'Կենսակերպ',
    title: 'Evoca-գույնի հոգեբանական նկարագիրը',
    text: 'Գույնը մարքեթինգային գործիք է: Այն ազդում է մարդու հոգեբանության վրա:',
    date: '',
    img: IMG('16336923273854', '1440x650'),
  },
};
const ALL = Object.values(POSTS);
const CATEGORIES = ['Բիզնես', 'Կենսակերպ', 'Ներդրումներ'];

const Ghost = ({ children }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none select-none font-extrabold leading-none text-[#efefef] text-[64px] md:text-[110px] xl:-ml-[115px] xl:text-[150px]"
  >
    {children}
  </div>
);

const Bracket = ({ pos }) => {
  const map = {
    tl: '-left-5 -top-5 border-l-8 border-t-8',
    bl: '-left-5 -bottom-5 border-l-8 border-b-8',
    tr: '-right-5 -top-5 border-r-8 border-t-8',
  };
  return (
    <span
      className={`pointer-events-none absolute z-20 hidden h-9 w-9 lg:block ${map[pos]}`}
      style={{ borderColor: BRACKET }}
    />
  );
};

const CatBar = ({ cat }) => (
  <div className="flex items-center">
    <span className="mr-4 inline-block h-[26px] w-1" style={{ background: NAVY }} />
    <span className="text-[13px] font-bold" style={{ color: NAVY }}>{cat}</span>
  </div>
);

const CatSquare = ({ cat }) => (
  <div className="flex items-center">
    <span className="mr-4 inline-block h-6 w-9" style={{ background: NAVY }} />
    <span className="text-[17px] font-bold" style={{ color: NAVY }}>{cat}</span>
  </div>
);

const Card = ({ item, small = false }) => (
  <a href="#" className="group block no-underline">
    <div className="overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          small ? 'aspect-[450/295]' : 'aspect-[438/328]'
        }`}
      />
    </div>
    <div className="mt-5"><CatBar cat={item.cat} /></div>
    <h3 className="mt-5 line-clamp-2 text-[18px] font-medium leading-[26px] text-[#111]">{item.title}</h3>
    <p className="mt-6 text-[17px] text-[#c9c9c9]">{item.date}</p>
  </a>
);

const Pill = ({ children, onClick, active }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full px-[13px] py-[11px] text-[13px] transition-colors ${
      active ? 'bg-[#6a0bd6] text-white' : 'bg-[#f2f2f2] text-[#333] hover:bg-[#e6e6e6]'
    }`}
  >
    {children}
  </button>
);

function Blog() {
  const [active, setActive] = useState(null);
  const filtered = ALL.filter((p) => p.cat === active);
  const P = POSTS;

  return (
    <main
      className="w-full overflow-x-clip bg-white text-[#111]"
      style={{ fontFamily: "'Noto Sans Armenian','Montserrat',system-ui,sans-serif" }}
    >
      {/* Breadcrumb + заголовок + фильтры */}
      <div className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 xl:px-0">
        <nav className="flex items-center gap-2 text-[12px] text-[#333]">
          <Link to="/" aria-label="Home"><Home size={15} strokeWidth={1.5} /></Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span>Բլոգ</span>
        </nav>
        <h1 className="mt-10 text-[32px] font-extrabold leading-tight text-[#111]">Բլոգ</h1>

        <div className="mt-8 mb-12 flex flex-wrap items-center gap-3">
          <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-3">
            {CATEGORIES.map((c) => (
              <Pill key={c} active={active === c} onClick={() => setActive(active === c ? null : c)}>
                {c}
              </Pill>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#efe9fb] px-6 py-[13px] text-[14px] font-bold text-[#6a0bd6] hover:bg-[#e4d9f8]"
          >
            Արխիվ <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {active ? (
        <div className="mx-auto grid max-w-[1440px] gap-x-[55px] gap-y-14 px-4 pb-24 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
          {filtered.length ? (
            filtered.map((p) => <Card key={p.title} item={p} />)
          ) : (
            <p className="text-[#888]">Այս կատեգորիայում գրառումներ դեռ չկան:</p>
          )}
        </div>
      ) : (
        <>
          {/* 1. Главный пост (картинка справа) */}
          <section className="relative rounded-bl-[200px] pt-10 lg:pt-[60px]" style={{ background: BAND_BG }}>
            <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between xl:px-0">
              <div className="pb-10 lg:w-[480px] lg:pt-2">
                <CatSquare cat={P.recap.cat} />
                <h2 className="mt-14 text-[36px] font-bold leading-[48px]">{P.recap.title}</h2>
                <p className="mt-6 text-[16px] leading-[30px] text-[#222]">{P.recap.text}</p>
                <p className="mt-14 text-[16px] text-[#333]">{P.recap.date}</p>
              </div>
              <div className="relative -mb-10 lg:w-[780px] lg:shrink-0">
                <Bracket pos="tl" />
                <Bracket pos="bl" />
                <img src={P.recap.img} alt={P.recap.title} className="relative z-10 aspect-[780/585] w-full object-cover" />
              </div>
            </div>
          </section>

          {/* 2. Բաց մի թողեք */}
          <section className="mx-auto mt-16 max-w-[1440px] px-4 sm:px-6 xl:px-0">
            <Ghost>Բաց մի թողեք</Ghost>
            <div className="mt-2 grid gap-y-14 lg:grid-cols-[616px_1fr] lg:gap-x-[123px]">
              <a href="#" className="block no-underline">
                <img src={P.invest.img} alt={P.invest.title} className="aspect-[616/462] w-full object-cover" />
                <div className="mt-6"><CatBar cat={P.invest.cat} /></div>
                <h3 className="mt-6 text-[24px] font-bold leading-[34px] text-[#111]">{P.invest.title}</h3>
                <p className="mt-6 text-[16px] leading-[30px] text-[#222]">{P.invest.text}</p>
                <p className="mt-6 text-[17px] text-[#c9c9c9]">{P.invest.date}</p>
              </a>
              <div className="grid content-start gap-x-[41px] gap-y-12 sm:grid-cols-2">
                <Card small item={P.can} />
                <Card small item={P.steps} />
                <Card small item={P.account} />
                <Card small item={P.bazaar} />
              </div>
            </div>
          </section>

          {/* 3. Լավագույն (картинка слева) */}
          <section className="mt-16">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-0">
              <Ghost>Լավագույն</Ghost>
            </div>
            <div className="relative -mt-2 pt-10 lg:pt-[50px]" style={{ background: BAND_BG }}>
              <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between xl:px-0">
                <div className="relative -mb-8 lg:w-[780px] lg:shrink-0">
                  <Bracket pos="tr" />
                  <img src={P.newyear.img} alt={P.newyear.title} className="relative z-10 h-auto w-full object-cover lg:h-[585px]" />
                </div>
                <div className="pb-10 lg:w-[500px] lg:pt-2">
                  <CatSquare cat={P.newyear.cat} />
                  <h2 className="mt-14 text-[32px] font-bold leading-[48px]">{P.newyear.title}</h2>
                  <p className="mt-6 text-[16px] leading-[30px] text-[#222]">{P.newyear.text}</p>
                  <p className="mt-14 text-[17px] text-[#888]">{P.newyear.date}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Три карточки */}
          <section className="mx-auto mt-[70px] max-w-[1440px] px-4 sm:px-6 xl:px-0">
            <div className="grid gap-x-[55px] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              <Card item={P.movies} />
              <Card item={P.series} />
              <Card item={P.future} />
            </div>
          </section>

          {/* 5. Գլխավոր — широкая картинка с белой карточкой */}
          <section className="mx-auto mt-24 max-w-[1440px] px-4 pb-44 sm:px-6 xl:px-0">
            <Ghost>Գլխավոր</Ghost>
            <div className="relative mt-4">
              <img src={P.color.img} alt={P.color.title} className="aspect-[1440/650] w-full object-cover" />
              <div className="relative bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)] lg:absolute lg:-bottom-[74px] lg:left-[123px] lg:w-[577px] lg:p-10 lg:pb-14">
                <CatSquare cat={P.color.cat} />
                <h2 className="mt-7 text-[24px] font-bold leading-[34px]">{P.color.title}</h2>
                <p className="mt-4 text-[15px] leading-[26px] text-[#222]">{P.color.text}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Blog;
