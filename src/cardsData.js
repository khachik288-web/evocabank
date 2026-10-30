// Данные карточек — общие для списка /cards и страниц /cards/:id
export const MC_GOLD_IMG = 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png';
export const VISA_GOLD_IMG = 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png';

export const IMG = (id, ext = 'png') =>
  `https://www.evoca.am/images-cache/cards/1/${id}/415x261.${ext}`;

// Общие подписи
export const L_BANK = 'Կանխիկացում բանկի կանխիկացման կետերում';
export const L_ARCA = 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում';
export const L_OTHER = 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում';
export const L_ANNUAL = 'Տարեկան սպասարկում';

// Если какая-то картинка стоит не на своей карте — поменяй id здесь, больше нигде не нужно.
export const CARDS = [
  {
    id: 'travel',
    cats: ['mastercard'],
    title: 'Evoca Travel Card',
    img: IMG('17479817930565', 'jpg'),
    text: 'Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:',
    stats: [
      { pre: 'Մինչև', value: '1.5%', label: 'Cashback արտասահմանում իրականացված վճարումների համար' },
      { pre: 'Անվճար', value: '6 մուտք', label: 'Lounge Key սրահներ քեզ և հյուրերիդ համար' },
      { pre: 'Անվճար', value: '6 անգամ', label: 'Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար' },
      { value: '16.000 ֏', label: 'Քարտի տարեկան սպասարկում' },
    ],
  },
  {
    id: 'platinum',
    cats: ['visa', 'premium'],
    title: 'Evoca Visa Platinum',
    img: IMG('17798007931247'),
    text: 'Պրեմիում առավելություններ պրեմիում քարտով:',
    stats: [
      { value: '30.000 ֏', label: 'Սպասարկման վճար' },
      { pre: 'Անվճար', value: '6 մուտք', label: 'Օդանավակայանների բիզնես սրահներ' },
    ],
  },
  {
    id: 'visa-digital',
    cats: ['visa', 'digital'],
    title: 'Visa Digital',
    img: IMG('17767720288483'),
    text: 'Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:',
    stats: [
      { value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { pre: 'մինչև', value: '4%', label: 'Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք' },
      { value: '1000 ֏', label: L_ANNUAL },
      { pre: 'մինչև', value: '0.5%', label: 'Քեշբեք' },
    ],
  },
  {
    id: 'visa-classic',
    cats: ['visa'],
    title: 'Visa Classic',
    img: IMG('1714986642953'),
    text: 'Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:',
    stats: [
      { value: '0.2%', label: L_BANK },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '5,000 ֏', label: L_ANNUAL },
    ],
  },
  {
    id: 'visa-gold',
    cats: ['visa', 'premium'],
    title: 'Visa Gold',
    img: VISA_GOLD_IMG,
    to: '/cards/visa-gold',
    text: 'Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից',
    stats: [
      { value: '0.2%', label: L_BANK },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '15,000 ֏', label: L_ANNUAL },
    ],
  },
  {
    id: 'wilco',
    cats: ['visa', 'premium'],
    title: 'Wilco Visa Infinite',
    img: IMG('1772717001933'),
    text: 'Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ:',
    stats: [],
  },
  {
    id: 'arca-classic',
    cats: ['arca'],
    title: 'Arca Classic',
    img: IMG('17149865475676'),
    text: 'ԱրՔա Classic քարտը ԱրՔա վճարային համակարգի դասական քարտ է՝ հարմար ամենօրյա վճարումների համար:',
    stats: [],
  },
  {
    id: 'arca-unionpay',
    cats: ['arca', 'unionpay'],
    title: 'Arca UnionPay Co-badge',
    img: IMG('17404717113297'),
    text: 'ԱրՔա և UnionPay համակցված քարտը՝ վճարումներ Հայաստանում և աշխարհում մեկ քարտով:',
    stats: [],
  },
  {
    id: 'evoca-gift',
    cats: ['gift', 'arca'],
    title: 'Evoca Gift Card',
    img: IMG('17149865321136'),
    text: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:',
    stats: [],
  },
  {
    id: 'digital-gift',
    cats: ['gift', 'digital', 'mastercard'],
    title: 'Digital Gift Card',
    img: IMG('17815131185095'),
    text: 'Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ: Մենք առաջարկում ենք իդեալական նվերի տարբերակ:',
    stats: [],
  },
  {
    id: 'visa-infinite',
    cats: ['visa', 'premium'],
    title: 'Visa Infinite',
    img: IMG('17149866652788'),
    text: 'Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:',
    stats: [
      { value: '1%', label: L_BANK },
      { value: '1.2%', label: L_ARCA },
      { pre: 'min 2,500 ֏', value: '1.5%', label: L_OTHER },
      { value: '100,000 ֏', label: L_ANNUAL },
    ],
  },
  {
    id: 'visa-vision',
    cats: ['visa'],
    title: 'Visa Vision',
    img: IMG('17639683196125'),
    text: 'Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:',
    stats: [],
  },
  {
    id: 'mc-world-digital',
    cats: ['mastercard', 'digital', 'premium'],
    title: 'Mastercard World Digital',
    img: IMG('17655348192361'),
    text: 'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:',
    stats: [
      { value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { value: '2.5%', label: 'Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով' },
      { value: '1000 ֏', label: L_ANNUAL },
    ],
  },
  {
    id: 'up-business',
    cats: ['unionpay', 'premium'],
    title: 'UnionPay Business Platinum',
    img: IMG('17262129422977'),
    text: 'Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:',
    stats: [
      { value: '0.5%', label: 'Կանխիկացում' },
      { value: '5 տարի', label: 'Քարտի ժամկետ' },
      { value: '15000 ֏', label: 'Տարեկան սպասարկման վճար' },
      { value: 'Ամենուր', label: 'Կիրառություն' },
    ],
  },
  {
    id: 'myler',
    cats: ['gift', 'arca'],
    title: 'MyLer Gift Card',
    img: IMG('17485025148319'),
    text: 'Մեկ քարտ, անսահմանափակ արկածներ:',
    stats: [],
  },
  {
    id: 'up-gold',
    cats: ['unionpay'],
    title: 'UnionPay Gold',
    img: IMG('17249401821904'),
    text: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:',
    stats: [
      { value: '0.5%', label: 'Կանխիկացում' },
      { value: '5 տարի', label: 'Քարտի ժամկետ' },
      { value: '15000 ֏', label: 'Տարեկան սպասարկման վճար' },
      { value: 'Ամենուր', label: 'Կիրառություն' },
    ],
  },
  {
    id: '4u',
    cats: ['gift', 'arca'],
    title: '4U.am Gift card',
    img: IMG('17485032554482'),
    text: 'Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր:',
    stats: [],
  },
  {
    id: 'mc-gold',
    cats: ['mastercard'],
    title: 'Mastercard Gold',
    img: MC_GOLD_IMG,
    to: '/cards/mastercard-gold',
    text: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:',
    stats: [
      { value: '0%', label: L_BANK, note: 'մինչև 2 մլն ֏' },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '15.000 ֏', label: L_ANNUAL },
    ],
  },
  {
    id: 'mc-standard',
    cats: ['mastercard'],
    title: 'Mastercard Standard',
    img: IMG('17282986912132'),
    text: 'Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սպասարկմամբ հասանելի կլինեն:',
    stats: [
      { value: '0%', label: L_BANK, note: 'մինչև 1 մլն ֏' },
      { value: '0.8%', label: L_ARCA },
      { pre: 'min 1,500 ֏', value: '1%', label: L_OTHER },
      { value: '5000 ֏', label: 'Քարտի տարեկան սպասարկում' },
    ],
  },
];

