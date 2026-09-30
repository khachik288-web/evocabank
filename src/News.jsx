import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

// ---------- Картинки ----------
const IMG = (id, size, ext = 'png') =>
  `https://www.evoca.am/images-cache/news/1/${id}/${size}.${ext}`;

// ---------- Цвета категорий (цветная полоска / квадрат) ----------
const CAT_COLOR = {
  'Կենսակերպ': '#a6f000',
  'Բանկային': '#6a0bd6',
  'Մրցանակներ': '#f7e300',
  'Պրոդուկտներ': '#e100ff',
  'Հարցազրույցներ': '#6a0bd6',
};

// ---------- Данные ----------
const NEWS = {
  aua: {
    cat: 'Կենսակերպ',
    title: 'Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր',
    text: 'Evocabank-ը միացավ AUA-ի 35-ամյակի միջոցառմանը՝ որպես միջոցառման Legacy Partner՝ նշելով կրթության և զարգացման կարևորությունը:',
    date: '25.09.2026',
    img: IMG('17906855928227', '780x585'),
  },
  amx: {
    cat: 'Մրցանակներ',
    title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
    text: 'Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:',
    date: '16.06.2026',
    img: IMG('17815943976247', '616x462'),
  },
  sme: {
    cat: 'Մրցանակներ',
    title: 'Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ անգամ անընդմեջ',
    date: '08.05.2026',
    img: IMG('17784860353078', '450x295'),
  },
  crypto: {
    cat: 'Պրոդուկտներ',
    title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
    date: '27.02.2026',
    img: IMG('17722002491716', '450x295'),
  },
  latimes: {
    cat: 'Հարցազրույցներ',
    title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times-ում',
    date: '25.02.2026',
    img: IMG('17720089281517', '450x295'),
  },
  agapnyak: {
    cat: 'Բանկային',
    title: 'Evocabank-ի «Աղափնյակ» մասնաճյուղն արդեն բաց է',
    date: '12.01.2026',
    img: IMG('17683825017248', '450x295', 'jpg'),
  },
  block: {
    cat: 'Բանկային',
    title: 'Գործարքների արգելափակում 1 կոճակով',
    text: 'Հուլիսի 1-ից EvocaTOUCH հավելվածում և EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը:',
    date: '01.06.2026',
    img: IMG('17852444643548', '780x585'),
  },
  street: {
    cat: 'Կենսակերպ',
    title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
    date: '12.06.2026',
    img: IMG('17812556342544', '438x328'),
  },
  esg: {
    cat: 'Բանկային',
    title: 'ESG կառավարման համակարգը Evocabank-ում',
    date: '31.03.2026',
    img: IMG('17757342882486', '438x328'),
  },
  amcham: {
    cat: 'Բանկային',
    title: 'Evocabank-ը միացել է AmCham Armenia-ին',
    date: '10.02.2026',
    img: IMG('17707319421286', '438x328'),
  },
};

const ALL_NEWS = Object.values(NEWS);

const CATEGORIES = [
  'Գլխավոր',
  'Բանկային',
  'Հարցազրույցներ',
  'Պրոդուկտներ',
  'Նորարարություններ',
  'Կենսակերպ',
  'Մրցանակներ',
  'CSR',
  'Այլ',
];

const BAND_BG =
  'linear-gradient(to bottom, #f4f4f4 0%, #f4f4f4 55%, #f6effe 100%)';

// ---------- Мелкие части ----------
const Ghost = ({ children, className = '' }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none select-none font-extrabold leading-none text-[#ebebeb] text-[64px] md:text-[110px] xl:text-[150px] ${className}`}
  >
    {children}
  </div>
);

// Уголок-скобка вокруг картинки
const Bracket = ({ pos, color }) => {
  const map = {
    tl: '-left-5 -top-5 border-l-8 border-t-8',
    bl: '-left-5 -bottom-5 border-l-8 border-b-8',
    tr: '-right-5 -top-5 border-r-8 border-t-8',
    br: '-right-5 -bottom-5 border-r-8 border-b-8',
  };
  return (
    <span
      className={`pointer-events-none absolute z-20 hidden h-9 w-9 lg:block ${map[pos]}`}
      style={{ borderColor: color }}
    />
  );
};

// Категория с цветной полоской слева (в карточках)
const CatBar = ({ cat }) => (
  <div className="flex items-center">
    <span
      className="mr-4 inline-block h-[26px] w-1"
      style={{ background: CAT_COLOR[cat] || '#6a0bd6' }}
    />
    <span className="text-[13px] font-bold text-[#1d0a4a]">{cat}</span>
  </div>
);

// Категория с цветным квадратом (в больших блоках)
const CatSquare = ({ cat }) => (
  <div className="flex items-center">
    <span
      className="mr-4 inline-block h-6 w-9"
      style={{ background: CAT_COLOR[cat] || '#6a0bd6' }}
    />
    <span className="text-[17px] font-bold text-[#1d0a4a]">{cat}</span>
  </div>
);

// Обычная карточка (3 в ряд и сетка 2x2)
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
    <div className="mt-5">
      <CatBar cat={item.cat} />
    </div>
    <h3 className="mt-5 line-clamp-2 text-[18px] font-medium leading-[26px] text-[#111]">
      {item.title}
    </h3>
    <p className="mt-6 text-[17px] text-[#c9c9c9]">{item.date}</p>
  </a>
);

// ---------- Страница ----------
function News() {
  const [active, setActive] = useState('Գլխավոր');
  const filtered = ALL_NEWS.filter((n) => n.cat === active);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#111]" style={{ fontFamily: "'Noto Sans Armenian','Montserrat',system-ui,sans-serif" }}>
      {/* Заголовок + категории */}
      <div className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 xl:px-0">
        <h1 className="text-[32px] font-extrabold leading-tight text-[#1d0a4a]">
          Նորություններ
        </h1>

        <div className="mt-8 mb-12 flex flex-wrap items-center gap-3">
          <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-[13px] py-[11px] text-[13px] transition-colors ${
                  active === c
                    ? 'bg-[#6a0bd6] text-white'
                    : 'bg-[#f2f2f2] text-[#333] hover:bg-[#e6e6e6]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActive('Գլխավոր')}
            className="inline-flex items-center gap-2 rounded-full bg-[#efe9fb] px-6 py-[13px] text-[14px] font-bold text-[#6a0bd6] hover:bg-[#e4d9f8]"
          >
            Բոլորը <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {active !== 'Գլխավոր' ? (
        /* Отфильтрованный список */
        <div className="mx-auto grid max-w-[1440px] gap-x-[55px] gap-y-14 px-4 pb-24 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
          {filtered.length ? (
            filtered.map((n) => <Card key={n.title} item={n} />)
          ) : (
            <p className="text-[#888]">Այս կատեգորիայում նորություններ դեռ չկան:</p>
          )}
        </div>
      ) : (
        <>
          {/* ===== Блок 1: главная новость (картинка справа) ===== */}
          <section
            className="relative rounded-bl-[200px] pt-10 lg:pt-[60px]"
            style={{ background: BAND_BG }}
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between xl:px-0">
              <div className="pb-10 lg:w-[480px] lg:pt-2">
                <CatSquare cat={NEWS.aua.cat} />
                <h2 className="mt-14 text-[32px] font-bold leading-[48px] text-[#111] xl:text-[36px]">
                  {NEWS.aua.title}
                </h2>
                <p className="mt-6 text-[16px] leading-[30px] text-[#222]">
                  {NEWS.aua.text}
                </p>
                <p className="mt-14 text-[16px] text-[#333]">{NEWS.aua.date}</p>
              </div>

              <div className="relative -mb-10 lg:w-[780px] lg:shrink-0">
                <Bracket pos="tl" color="#a6f000" />
                <Bracket pos="bl" color="#a6f000" />
                <img
                  src={NEWS.aua.img}
                  alt={NEWS.aua.title}
                  className="relative z-10 aspect-[780/585] w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ===== Блок 2: «Բաց մի թողեք» ===== */}
          <section className="mx-auto mt-16 max-w-[1440px] px-4 sm:px-6 xl:px-0">
            <Ghost className="-ml-0 xl:-ml-[115px]">Բաց մի թողեք</Ghost>

            <div className="-mt-[10px] grid gap-y-14 lg:grid-cols-[616px_1fr] lg:gap-x-[123px]">
              {/* Большая карточка */}
              <a href="#" className="group relative block no-underline">
                <span className="absolute -left-5 -top-5 z-0 hidden h-[90px] w-[90px] bg-[#f7e300] lg:block" />
                <img
                  src={NEWS.amx.img}
                  alt={NEWS.amx.title}
                  className="relative z-10 aspect-[616/462] w-full object-cover"
                />
                <div className="mt-6">
                  <CatBar cat={NEWS.amx.cat} />
                </div>
                <h3 className="mt-6 text-[24px] font-bold leading-[34px] text-[#111]">
                  {NEWS.amx.title}
                </h3>
                <p className="mt-6 text-[16px] leading-[30px] text-[#222]">
                  {NEWS.amx.text}
                </p>
                <p className="mt-6 text-[17px] text-[#c9c9c9]">{NEWS.amx.date}</p>
              </a>

              {/* Сетка 2x2 */}
              <div className="grid content-start gap-x-[41px] gap-y-12 sm:grid-cols-2">
                <Card small item={NEWS.sme} />
                <Card small item={NEWS.crypto} />
                <Card small item={NEWS.latimes} />
                <Card small item={NEWS.agapnyak} />
              </div>
            </div>
          </section>

          {/* ===== Блок 3: «Կարևոր» (картинка слева) ===== */}
          <section className="mt-16">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-0">
              <Ghost className="-ml-0 xl:-ml-[115px]">Կարևոր</Ghost>
            </div>

            <div
              className="relative -mt-2 rounded-bl-none pt-10 lg:pt-[50px]"
              style={{ background: BAND_BG }}
            >
              <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between xl:px-0">
                <div className="relative -mb-8 lg:w-[780px] lg:shrink-0">
                  <Bracket pos="tr" color="#6a0bd6" />
                  <Bracket pos="br" color="#6a0bd6" />
                  <img
                    src={NEWS.block.img}
                    alt={NEWS.block.title}
                    className="relative z-10 h-auto w-full object-cover lg:h-[518px]"
                  />
                </div>

                <div className="pb-10 lg:w-[500px] lg:pt-2">
                  <CatSquare cat={NEWS.block.cat} />
                  <h2 className="mt-14 text-[32px] font-bold leading-[48px] text-[#111]">
                    {NEWS.block.title}
                  </h2>
                  <p className="mt-6 text-[16px] leading-[30px] text-[#222]">
                    {NEWS.block.text}
                  </p>
                  <p className="mt-14 text-[17px] text-[#888]">{NEWS.block.date}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Блок 4: 3 карточки ===== */}
          <section className="mx-auto mt-[70px] max-w-[1440px] px-4 pb-24 sm:px-6 xl:px-0">
            <div className="grid gap-x-[55px] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              <Card item={NEWS.street} />
              <Card item={NEWS.esg} />
              <Card item={NEWS.amcham} />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default News;
