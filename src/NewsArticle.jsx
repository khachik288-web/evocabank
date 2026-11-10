import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NEWS, CAT_COLOR } from './newsData';

// Страницы отдельных новостей: /news/:slug
// Новая статья = новая запись здесь (+ переводы в i18n.js).
// В body: строка = абзац (**жирный**), { center, italic } = крупная строка по центру.
export const ARTICLES = {
  'short-number': {
    cat: 'Բանկային',
    title: 'Կարճ հեռախոսահամար՝ 8444',
    lead: 'Evocabank-ի հետ արդեն կարող եք կապ հաստատել նոր, կարճ հեռախոսահամարով՝ ընդամենը հավաքելով 8444:',
    date: '22.10.2025',
    img: 'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
    body: [
      { center: '8444' },
      { center: 'Բարի գալուստ, Evocabank', italic: true },
      { center: 'Մենք սպասում էինք Ձեր զանգին…', italic: true },
      'Այսուհետ **Evocabank**-ի հաճախորդներն ավելի հեշտ ու արագ կարող են կապ հաստատել Բանկի հետ՝ պարզապես հավաքելով **8444** քաղաքային կամ բջջային հեռախոսներից:',
      'Հիշեցնենք նաև, որ **Evocabank**-ի հետ կարող եք նաև կապ հաստատել **+37410605555** հեռախոսահամարով: Իսկ արտասահմանից զանգահարելիս՝ գործում է միայն **+37410605555** հեռախոսահամարը:',
    ],
    more: ['block', 'sme', 'agapnyak'],
  },
  'digitalcard': {
    cat: 'Պրոդուկտներ',
    title: 'Evoca Digital քարտեր',
    lead: 'Թվային ապագան Evoca-ում է. EvocaTOUCH հավելվածում արդեն կարող ես ձեռք բերել Evoca Digital քարտերը՝ քո նախընտրած դիզայնով:',
    date: '16.06.2023',
    img: 'https://www.evoca.am/images-cache/news/1/16868326578274/780x585.png',
    body: [
      'Այսուհետ «Քարտս թողեցի տանը», «Քարտս մնաց մյուս պայուսակիս մեջ», «Քարտս մոռացա բանկոմատի մեջ» և նմանատիպ շատ այլ արտահայտություններ ակտուալ չեն մեզ մոտ: **Evoca Digital քարտը** Visa միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո **EvocaTOUCH** հավելվածում:',
      'Քո բոլոր թվային գործարքները այժմ կլինեն ավելի արագ ու ապահով: Կարող ես կատարել վճարումներ օնլայն հարթակում ցանկացած վայրից և ցանկացած ժամի: Թվային քարտը կարող ես կցել նաև **Apple Pay**-ին և **Google Pay**-ին:',
      '**Evoca Digital քարտը** կարող ես պատվիրել **EvocaTOUCH** հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում: Ի դեպ, քարտը մինչև **դեկտեմբերի 31**-ը պատվիրելու դեպքում՝ այն կստանաս ամբողջովին **ԱՆՎՃԱՐ**: Թվային քարտը քոնը կլինի քո իսկ նախընտրած արժույթով և դիզայնով:',
      'Ի դեպ, հավելվածում դու կգտնես **Evoca Digital քարտի** 5 դիզայն: Կարող ես ընտրել քո սիրելի դիզայնը և փոխել այն երբ ցանկանաս: Իսկ շուտով քեզ սպասվում են թվային քարտի դիզայնի շատ հետաքրքիր տարբերակներ:',
      { img: 'https://www.evoca.am/file_manager/CreditCard_Template%D5%B6%D5%A5%D5%B8.png' },
      { em: '**Evoca Digital քարտերի** պայմաններին ավելի մանրամասն կարող ես ծանոթանալ [այստեղ](https://www.evoca.am/hy/cards/visa/visa-digital-card/):' },
      { em: 'Իսկ հիմա եկեք խոսենք ֆիզիկական և թվային քարտերի տարբերության մասին:' },
      'Ֆիզիկական քարտի վրա երևում է քարտի համարը, CVV կոդը և ժամկետի ավարտը, իսկ թվային քարտի դեպքում՝ տվյալ ինֆորմացիան հասանելի է միայն հավելվածում: Մյուս տարբերությունն այն է, որ թվային քարտով օնլայն գործարք իրականացնելիս ոչ մի ֆինանսական տվյալ հասանելի չէ երրորդ կողմին, որը էլ զերծ է պահում քարտապանին ցանկացած տեսակի խարդախությունից:',
      { em: 'Ամփոփելով նշենք թվային քարտերի հիմնական առավելությունները.' },
      { list: [
        '**Արագություն** - ի տարբերություն ֆիզիկական քարտի՝ թվային քարտն ակտիվանում է վայրկյանների ընթացքում: Քարտի ժամկետը լրանալու դեպքում առանց ավելորդ ժամանակ կորցնելու՝ կարող ես շատ արագ վերաթողարկել այն: Թվային քարտը նաև հեշտ վերահսկելի է: Այն հնարավոր է ակտիվացնել և ապաակտիվացնել մեկ ակնթարթում:',
        '**Անվտանգություն** - քարտի տվյալները հասանելի են միայն հավելվածում, ինչն էլ պաշտպանում է երրորդ կողմի հնարավոր խարդախություններից: Թվային քարտերի դեպքում այն բանկոմատներում մնալու կամ մոռանալու տարբերակներից նույնիսկ կարող ես խուսափել:',
        '**Ճկունություն** - այժմ **EvocaTOUCH** հավելվածում հասանելի է թվային քարտի 5 դիզայն: Շուտով կներկայացնենք մի շարք նոր, հետաքրքիր դիզայններ: Այս ամենի հետ մեկտեղ, դու նաև հնարավորություն ունես ցանկացած պահի փոխել քարտիդ դիզայնը:',
        '**Պարզություն** - թվային քարտերով յուրաքանչյուր գործընթաց ավելի պարզ է, արագ ու հարմար. այն հիմնականում արտացոլվում է օնլայն հարթակում գնումներ կատարելուն:',
      ] },
      '**Evoca**-ն պատրաստ է թվային ապագային՝ իր նոր թվային լուծումներով, իսկ դու՞:',
    ],
    more: ['arcaunionpay', 'autoshow', 'rienaporter'],
  },
  'evocatouch2': {
    cat: 'Պրոդուկտներ',
    title: 'Նոր EvocaTOUCH հավելվածն արդեն հասանելի է',
    lead: 'Գիտեինք, որ սպասում էիր:',
    date: '23.05.2023',
    img: 'https://www.evoca.am/images-cache/news/1/16848286806716/780x585.png',
    body: [
      'Այոոո՜, այդ օրը եկավ. վերջապես քո սիրելի **Evoca**-ն ներկայացրեց իր նոր՝ **EvocaTOUCH** հավելվածը՝ ժամանակակից, նորագույն թվային լուծումներով ու անսահմանափակ հնարավորություններով:',
      'Գիտեինք, որ սպասում էիր:',
      'Մեր նոր հավելվածը 24/7 հասանելի է աշխարհի ցանկացած կետից, ցանկացած ժամի՝ պարզ, արագ ու ապահով:',
      '**EvocaTOUCH**-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:',
      'ԻՆՉ առավելություններ ունի նոր **EvocaTOUCH**-ը՝',
      { list: [
        'Նոր հավելվածը նման է սոցիալական ցանցերի **feed**-ին՝ ամենակարևոր և հաճախ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջում են՝ քարտեր, հաշիվներ, վարկեր, ավանդներ,',
        'կարող ես ստեղծել և պահպանել **Ձևանմուշներ**,',
        'կարող ես իրականացնել մի շարք բանկային գործընթացներ ընդամենը **մեկ ակնթարթում**,',
        '**Story** բաժնում կարող ես ծանոթանալ Բանկի նորություններին և ամենաակտուալ պրոդուկտներին,',
        'հավելվածն ունի գունային **2 ինտերֆեյս՝** բաց և մուգ, որը կարող ես փոխել Կարգավորումներ բաժնից,',
        'դե իսկ մյուս բոլոր բանկային գործընթացները հասանելի են ավելի նոր, թարմացված, պարզ ու արագ տարբերակով՝ խնայելով քո համար ամենակարևոր ռեսուրսը՝ **ժամանակը**,',
        'այլ հետաքրքիր ու կարևոր գործիքների և նորարարությունների մասին կիմանաս շատ շուտով…',
      ] },
      '[Նոր EvocaTOUCH-ով հնարավոր է ՄԵԿ ԱԿՆԹԱՐԹՈՒՄ](https://www.youtube.com/watch?v=KwAgMHEx8ys)',
      { video: 'KwAgMHEx8ys', title: 'EvocaTOUCH | New EvocaTOUCH app it\'s possible IN an INSTANT' },
      'Սիրով սպասում ենք քեզ մեր նոր թվային աշխարհում՝ **[EvocaTOUCH 2](/evocatouch)** հավելվածում:',
    ],
    more: ['arcaunionpay', 'autoshow', 'rienaporter'],
  },
};

// Общий текст для всех новостей, у которых нет своей записи в ARTICLES.
// Хочешь уникальный текст — добавь запись в ARTICLES выше (ключ = id новости из newsData.js).
const GENERIC_BODY = [
  '**Evocabank**-ը շարունակում է իր գործունեությունը՝ ուղղված հաճախորդների հարմարավետությանը, նորարարությանը և հասարակության զարգացմանը:',
  'Այս նորության վերաբերյալ առավել մանրամասն տեղեկությունը շուտով կհրապարակվի մեր կայքում և սոցիալական ցանցերի էջերում:',
  'Հետևեք մեր նորություններին՝ առաջինը տեղեկանալու Բանկի նոր նախաձեռնություններին, ծառայություններին և ձեռքբերումներին:',
];

function getArticle(slug) {
  if (ARTICLES[slug]) return ARTICLES[slug];
  const n = NEWS[slug];
  if (!n) return null;
  const ids = Object.keys(NEWS);
  const start = ids.indexOf(slug);
  const more = [1, 2, 3].map((k) => ids[(start + k) % ids.length]); // 3 соседние новости
  return { cat: n.cat, title: n.title, lead: n.text, date: n.date, img: n.img, body: GENERIC_BODY, more };
}

// **жирный** и [текст](ссылка); ссылка начинается с «/» — внутренняя
function Rich({ text }) {
  const bold = (str, k) => str.split('**').map((p, i) => (i % 2 ? <strong key={`${k}b${i}`} className="font-bold text-[#6a0bd6]">{p}</strong> : <React.Fragment key={`${k}t${i}`}>{p}</React.Fragment>));
  const out = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, m, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(...bold(text.slice(last, m.index), k++));
    const cls = 'font-bold text-[#6a0bd6] underline';
    out.push(m[2].startsWith('/')
      ? <Link key={`l${k++}`} to={m[2]} className={cls}>{bold(m[1], k)}</Link>
      : <a key={`l${k++}`} href={m[2]} target="_blank" rel="noreferrer" className={cls}>{bold(m[1], k)}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(...bold(text.slice(last), k++));
  return <>{out}</>;
}

export default function NewsArticle() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const a = getArticle(slug);
  if (!a) return <Navigate to="/news" replace />;

  return (
    <main className="w-full overflow-x-clip bg-white text-[#111]" style={{ fontFamily: "'Noto Sans Armenian','Montserrat',system-ui,sans-serif" }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-6">
        {/* Назад + хлебные крошки */}
        <div className="flex flex-wrap items-center gap-4 py-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#111] shadow-[0_2px_8px_rgba(0,0,0,.18)]"
          >
            <ArrowLeft size={16} /> {t('Վերադառնալ')}
          </button>
          <nav className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
            <Link to="/" aria-label="Home"><Home size={14} /></Link>
            <ChevronRight size={11} />
            <Link to="/news" className="text-[#6a0bd6] no-underline">{t('Նորություններ')}</Link>
            <ChevronRight size={11} />
            <span className="text-[#6a0bd6]">{t(a.cat)}</span>
            <ChevronRight size={11} />
            <span className="text-[#111]">{t(a.title)}</span>
          </nav>
        </div>

        {/* Шапка статьи */}
        <section className="flex flex-col lg:flex-row">
          <div className="flex min-w-0 flex-col justify-center rounded-bl-[120px] bg-gradient-to-b from-[#f4f4f4] to-[#f6effe] p-8 lg:w-[38%] lg:p-12">
            <div className="flex items-center">
              <span className="mr-3 inline-block h-5 w-8" style={{ background: CAT_COLOR[a.cat] || '#6a0bd6' }} />
              <span className="text-[14px] font-bold text-[#1d0a4a]">{t(a.cat)}</span>
            </div>
            <h1 className="mt-8 break-words" style={{ fontSize: 28, fontWeight: 700, lineHeight: "38px", color: "#111", margin: "32px 0 0" }}>{t(a.title)}</h1>
            {a.lead && <p className="mt-5 text-[14px] leading-[24px] text-[#333]">{t(a.lead)}</p>}
            <p className="mt-10 text-[13px] text-[#888]">{a.date}</p>
          </div>
          <div className="min-w-0 lg:w-[62%]">
            <img src={a.img} alt={t(a.title)} className="h-full max-h-[420px] w-full bg-black object-contain" />
          </div>
        </section>

        {/* Текст */}
        <article className="mx-auto max-w-[640px] py-14 text-[13px] leading-[1.9] text-[#222]">
          {a.body.map((b, i) => {
            if (typeof b === 'string') return <p key={i} className="mb-6"><Rich text={t(b)} /></p>;
            if (b.img) return <img key={i} src={b.img} alt="" className="mb-6 block h-auto w-full" loading="lazy" />;
            if (b.video) return (
              <div key={i} className="mb-6 aspect-video w-full overflow-hidden bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${b.video}`}
                  title={b.title || 'YouTube video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            );
            if (b.list) return (
              <ul key={i} className="mb-6 list-none p-0">
                {b.list.map((li, j) => (
                  <li key={j} className="mb-4 flex gap-3">
                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#6a0bd6]" />
                    <span><Rich text={t(li)} /></span>
                  </li>
                ))}
              </ul>
            );
            if (b.em) return <p key={i} className="mb-6 italic"><Rich text={t(b.em)} /></p>;
            return <p key={i} className={`mb-3 text-center ${b.italic ? 'italic text-[#6a0bd6]' : 'text-[16px] font-bold text-[#6a0bd6]'}`}>{t(b.center)}</p>;
          })}

          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1d0a4a", margin: "48px 0 20px" }}>{t('Այլ նորություններ')}</h2>
        </article>

        <section className="mx-auto grid max-w-[760px] gap-6 pb-16 sm:grid-cols-3">
          {a.more.map((id) => {
            const n = NEWS[id];
            return (
              <Link key={id} to={`/news/${id}`} className="block" style={{ color: "#111", textDecoration: "none" }}>
                <img src={n.img} alt={t(n.title)} className="aspect-[3/2] w-full object-cover" />
                <h3 className="line-clamp-3" style={{ fontSize: 13, fontWeight: 700, lineHeight: "18px", color: "#111", margin: "12px 0 0" }}>{t(n.title)}</h3>
                <p style={{ fontSize: 12, color: "#c9c9c9", margin: "8px 0 0" }}>{n.date}</p>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
