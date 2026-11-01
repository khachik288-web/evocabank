// Общие данные карточек вкладов: используются и списком (DepositsPage),
// и единой страницей деталей (DepositDetailPage).

const IMG_CLASSIC = "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg";
const IMG_CHILD = "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg";
const IMG_ONLINE = "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg";

export const DEPOSITS = [
  {
    id: "classic",
    image: IMG_CLASSIC,
    title: "Դասական ավանդ",
    description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
    stats: [
      { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
      { label: "Մինչև", value: "31-1,825 օր", sub: "Ժամկետ" },
      { label: "Մինչև", value: "10.5% ֏", sub: "Տոկոսադրույք" },
      { label: "Սկսած", value: "100,000 ֏", sub: "Համալրման հնարավորություն" },
    ],
  },
  {
    id: "child",
    image: IMG_CHILD,
    title: "Մանկական ավանդ",
    description: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունվում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
    stats: [
      { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
      { label: "Մինչև", value: "18 լրանալը", sub: "Ժամկետ" },
      { label: "Մինչև", value: "9.5% ֏", sub: "Տոկոսադրույք" },
      { label: "Սկսած", value: "40,000 ֏", sub: "Համալրման հնարավորություն" },
    ],
  },
  {
    id: "online",
    image: IMG_ONLINE,
    title: "Ավանդ Evoca Online",
    description: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՞ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
    stats: [
      { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
      { label: "Մինչև", value: "31-1,825 օր", sub: "Ժամկետ" },
      { label: "Մինչև", value: "10.75% ֏", sub: "Տոկոսադրույք" },
    ],
  },
];

export const getDepositById = (id) => DEPOSITS.find((d) => d.id === id);
