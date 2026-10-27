// Данные для страницы «Բանկի հասցեները և աշխատաժամերը» (/branches).
// Координаты (lat, lng) приблизительные — проверьте и поправьте по реальным адресам.
// Чтобы добавить точку, скопируйте любой объект в нужный массив.

export const CITIES = ['Երևան'];

export const BRANCHES = [
  {
    id: 'head-office',
    name: 'Գլխամասային գրասենյակ',
    hours: '09:30 - 17:00',
    saturday: false,
    address: 'Հանրապետության 44/2',
    phones: ['+374 10 60 55 55', '+374 98 20 55 55', '+374 99 60 55 55'],
    city: 'Երևան',
    district: 'Կենտրոն',
    lat: 40.1766,
    lng: 44.5153,
  },
  {
    id: 'premium',
    name: 'Evoca Premium Branch',
    hours: 'Երկուշաբթիից ուրբաթ՝ 10:00 - 18:00',
    saturday: false,
    address: 'ՀՀ, ք. Երևան, Զաքյան 10, 0052',
    phones: ['8444'],
    city: 'Երևան',
    district: 'Կենտրոն',
    lat: 40.1827,
    lng: 44.5129,
  },
  {
    id: 'azatutyan-12',
    name: '«Ազատության 12» մասնաճյուղ',
    hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
    saturday: true,
    address: 'Ազատության 12',
    phones: ['+374 10 60 55 55'],
    city: 'Երևան',
    district: 'Արաբկիր',
    lat: 40.2003,
    lng: 44.5071,
  },
  {
    id: 'tumanyan',
    name: '«Թումանյան» մասնաճյուղ',
    hours: '09:30 - 21:30, Շաբաթ՝ 10:00 - 17:30',
    saturday: true,
    address: 'Թումանյան 15',
    phones: ['+374 10 60 55 55'],
    city: 'Երևան',
    district: 'Կենտրոն',
    lat: 40.1893,
    lng: 44.5149,
  },
  {
    id: 'kasyan',
    name: '«Կասյան» մասնաճյուղ',
    hours: '',
    saturday: false,
    address: '',
    phones: ['+374 10 60 55 55'],
    city: 'Երևան',
    district: 'Քանաքեռ-Զեյթուն',
    lat: 40.2058,
    lng: 44.5398,
  },
];

// Банкоматы и терминалы обмена валюты: добавьте объекты в том же формате, что и BRANCHES
export const ATMS = [];
export const EXCHANGE_TERMINALS = [];
