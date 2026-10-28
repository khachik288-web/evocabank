import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ключ = армянский текст (язык по умолчанию), поэтому там, где перевода нет,
// просто остаётся армянский. Формат строки: [hy, ru, en]
const ROWS = [
  // верхнее меню
  ['Անհատ', 'Частным лицам', 'Personal'],
  ['Բիզնես', 'Бизнесу', 'Business'],
  ['Ակնթարթային վճարումներ', 'Мгновенные платежи', 'Instant payments'],
  ['Մեր մասին', 'О нас', 'About us'],
  ['Նորություններ', 'Новости', 'News'],
  ['Բլոգ', 'Блог', 'Blog'],
  ['Կարիերա', 'Карьера', 'Careers'],
  // основное меню
  ['Վարկեր', 'Кредиты', 'Loans'],
  ['Քարտեր', 'Карты', 'Cards'],
  ['Ավանդներ', 'Вклады', 'Deposits'],
  ['Հաշիվներ', 'Счета', 'Accounts'],
  ['Փոխանցումներ', 'Переводы', 'Transfers'],
  ['Արժեթղթեր', 'Ценные бумаги', 'Securities'],
  ['Evoca-ի մասին', 'Об Evoca', 'About Evoca'],
  ['Սակագներ', 'Тарифы', 'Tariffs'],
  ['Հաշվետվություններ', 'Отчёты', 'Reports'],
  ['Հայտարարություններ', 'Объявления', 'Announcements'],
  // подменю
  ['Վարկեր ֆիզիկական անձանց', 'Кредиты физическим лицам', 'Loans for individuals'],
  ['Վարկեր իրավաբանական անձանց', 'Кредиты юридическим лицам', 'Loans for legal entities'],
  ['Միջնորդավճարների սակագները', 'Тарифы на комиссии', 'Fee tariffs'],
  ['Ավանդների սակագներ', 'Тарифы по вкладам', 'Deposit tariffs'],
  ['Արխիվ', 'Архив', 'Archive'],
  ['Վարկային պատմություն և սքոր', 'Кредитная история и скоринг', 'Credit history and score'],
  ['Կարևոր տեղեկատվություն', 'Важная информация', 'Important information'],
  ['Քարտերի տրամադրում և սպասարկում', 'Выпуск и обслуживание карт', 'Card issuance and servicing'],
  ['Սոցիալական ապահովության վճարային քարտեր', 'Платёжные карты социального обеспечения', 'Social security payment cards'],
  ['Evoca խնայողական հաշիվ', 'Сберегательный счёт Evoca', 'Evoca savings account'],
  ['Հաշիվների բացում և սպասարկում', 'Открытие и обслуживание счетов', 'Account opening and servicing'],
  ['Առարկայազուրկ մետաղական հաշիվներ', 'Обезличенные металлические счета', 'Unallocated metal accounts'],
  ['Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', 'Дистанционное обслуживание нерезидентов', 'Remote servicing for non-resident customers'],
  ['Դրամական փոխանցումներ', 'Денежные переводы', 'Money transfers'],
  ['Վճարային համակարգեր', 'Платёжные системы', 'Payment systems'],
  ['Ներդրումային ծառայություններ', 'Инвестиционные услуги', 'Investment services'],
  ['Պարտատոմսեր', 'Облигации', 'Bonds'],
  ['ՀԿԴ ծառայություններ', 'Услуги депозитария', 'Depository services'],
  ['Ռեպո/Հակադարձ Ռեպո գործարքներ', 'Сделки РЕПО / обратного РЕПО', 'Repo / reverse repo transactions'],
  ['Ռեպո/Հակադարձ ռեպո գործարքներ', 'Сделки РЕПО / обратного РЕПО', 'Repo / reverse repo transactions'],
  ['Աուդիտորական եզրակացություն', 'Аудиторское заключение', 'Audit report'],
  ['Ֆինանսական հաշվետվություններ', 'Финансовая отчётность', 'Financial statements'],
  ['Ներդրողների համար', 'Для инвесторов', 'For investors'],
  ['Կիսամյակային հաշվետվություն', 'Полугодовой отчёт', 'Semi-annual report'],
  ['Տարեկան հաշվետվություն', 'Годовой отчёт', 'Annual report'],
  ['Ընդհանուր', 'Общее', 'General'],
  ['Կառուցվածք', 'Структура', 'Structure'],
  ['Բաժնետերեր', 'Акционеры', 'Shareholders'],
  ['Ղեկավարություն', 'Руководство', 'Management'],
  ['Գործընկերներ', 'Партнёры', 'Partners'],
  ['Մրցանակներ', 'Награды', 'Awards'],
  ['Էվոկա ֆինանսական խումբ', 'Финансовая группа Evoca', 'Evoca Financial Group'],
  // бизнес-шапка
  ['Արժեթղթերի շուկա', 'Рынок ценных бумаг', 'Securities market'],
  ['Առևտրի ֆինանսավորում', 'Торговое финансирование', 'Trade finance'],
  ['Դիջիթալ', 'Диджитал', 'Digital'],
  ['Այլ', 'Прочее', 'Other'],
  ['Բիզնես վարկեր', 'Бизнес-кредиты', 'Business loans'],
  ['Դասական ավանդ', 'Классический вклад', 'Classic deposit'],
  ['Երաշխիք', 'Гарантия', 'Guarantee'],
  ['Ֆակտորինգային ֆինանսավորում', 'Факторинговое финансирование', 'Factoring finance'],
  ['Ակրեդիտիվ', 'Аккредитив', 'Letter of credit'],
  ['Ինկասո', 'Инкассо', 'Collection'],
  ['Տերմինալի տեղադրման հայտ', 'Заявка на установку терминала', 'Terminal installation request'],
  ['Պահատուփեր', 'Сейфовые ячейки', 'Safe deposit boxes'],
  // выпадающие списки / иконки
  ['Առցանց հայտեր', 'Онлайн-заявки', 'Online requests'],
  ['Հետադարձ կապ', 'Обратная связь', 'Feedback'],
  ['ՓՄԸ վարկավորում', 'Кредитование МСП', 'SME lending'],
  ['Պատվիրել զանգ', 'Заказать звонок', 'Request a call'],
  ['Մուտք', 'Войти', 'Log in'],
  ['Իմ էջը', 'Моя страница', 'My page'],
  ['Մասնաճյուղեր', 'Филиалы', 'Branches'],
  ['Հաճախ տրվող հարցեր', 'Часто задаваемые вопросы', 'FAQ'],
  ['Ծառայություններ', 'Услуги', 'Services'],
  ['Բաժիններ', 'Разделы', 'Sections'],
  ['Մասնաճյուղեր և բանկոմատներ', 'Филиалы и банкоматы', 'Branches and ATMs'],
  ['Լեզու', 'Язык', 'Language'],
  // подвал
  ['ք. Երևան, 0010,', 'г. Ереван, 0010,', 'Yerevan, 0010,'],
  ['Հանրապետության 44/2', 'пл. Республики 44/2', 'Hanrapetutyan 44/2'],
  ['Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից', 'Evocabank находится под надзором Центрального банка Республики Армения', 'Evocabank is supervised by the Central Bank of the Republic of Armenia'],
  ['1990 - 2026, ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ', '1990 - 2026, ВСЕ ПРАВА ЗАЩИЩЕНЫ', '1990 - 2026, ALL RIGHTS RESERVED'],
  ['Բանկի մասին', 'О банке', 'About the bank'],
  ['Իրավական ակտեր', 'Правовые акты', 'Legal acts'],
  ['Օտարվող գույք', 'Отчуждаемое имущество', 'Property for sale'],
  ['Կառուցապատողներ', 'Застройщики', 'Developers'],
  ['Գործընկեր ավտոսրահներ', 'Партнёрские автосалоны', 'Partner car dealerships'],
  ['Սակագների արխիվ', 'Архив тарифов', 'Tariffs archive'],
  ['Օգտակար հղումներ', 'Полезные ссылки', 'Useful links'],
  ['Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)', 'Права клиента (правила подачи жалоб)', 'Customer rights (complaint procedure)'],
  ['Հաճախորդի ռեզիդենտության չափանիշներ', 'Критерии резидентства клиента', 'Customer residency criteria'],
  ['Կարգավորում', 'Регулирование', 'Regulation'],
  ['Գաղտնիության քաղաքականություն', 'Политика конфиденциальности', 'Privacy policy'],
  ['Ֆին. հաշտարար', 'Финансовый посредник', 'Financial mediator'],
  ['Ֆինանսական հանցագործությունների կանխարգելում', 'Предотвращение финансовых преступлений', 'Prevention of financial crime'],
  ['Հղումներ Բանկի քարտապանների համար', 'Ссылки для держателей карт банка', "Links for the bank's cardholders"],
  ['Այլ հղումներ', 'Другие ссылки', 'Other links'],
  ['Բանկի հասցեները և աշխատաժամերը', 'Адреса и часы работы банка', 'Bank addresses and working hours'],
  ['Կապ մեզ հետ', 'Связаться с нами', 'Contact us'],
  [
    'Հարգելի\' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:',
    'Уважаемый посетитель! В случае расхождений информации сайта на разных языках, а также при неполноте материалов на русском и английском языках просим руководствоваться армянской версией. ЗАО «Эвокабанк» не несёт ответственности за достоверность содержания сторонних сайтов, на которые даны ссылки, размещённую там рекламу, а также за возможные последствия использования информации, размещённой третьими лицами на этих сайтах.',
    'Dear visitor, in case of any discrepancy between the language versions of the site, or incomplete material in Russian or English, please refer to the Armenian version. "Evocabank" CJSC is not responsible for the accuracy and reliability of the content of third-party websites linked from this site, the advertisements posted there, or any consequences of using information published by third parties on those sites.',
  ],
  // регистрация / профиль
  ['Սխալ Google-ով մուտքի ժամանակ', 'Ошибка входа через Google', 'Google sign-in error'],
  ['Լրացրեք էլ. հասցեն և գաղտնաբառը', 'Введите эл. почту и пароль', 'Enter your email and password'],
  ['Այս էլ. հասցեն արդեն գրանցված է', 'Этот адрес уже зарегистрирован', 'This email is already registered'],
  ['Սխալ էլ. հասցե', 'Неверный адрес эл. почты', 'Invalid email address'],
  ['Գաղտնաբառը շատ թույլ է (նվազագույնը 6 նիշ)', 'Слишком слабый пароль (минимум 6 символов)', 'Password is too weak (at least 6 characters)'],
  ['Սխալ էլ. հասցե կամ գաղտնաբառ', 'Неверная почта или пароль', 'Wrong email or password'],
  ['Ինչ-որ բան այն չէ, փորձեք կրկին', 'Что-то пошло не так, попробуйте снова', 'Something went wrong, please try again'],
  ['Էլ. հասցե', 'Эл. почта', 'Email'],
  ['Հեռախոսահամար (ոչ պարտադիր)', 'Телефон (необязательно)', 'Phone (optional)'],
  ['Հեռախոսահամար', 'Телефон', 'Phone'],
  ['Գաղտնաբառ', 'Пароль', 'Password'],
  ['Մուտք Google-ով', 'Войти через Google', 'Sign in with Google'],
  ['Գրանցում', 'Регистрация', 'Sign up'],
  ['Գրանցման ամսաթիվ', 'Дата регистрации', 'Registration date'],
  ['Գլխավոր էջ', 'Главная страница', 'Home page'],
  ['Օգտատեր', 'Пользователь', 'User'],
  ['Evoca հաճախորդ', 'Клиент Evoca', 'Evoca customer'],
  ['Բացել չատը', 'Открыть чат', 'Open chat'],
  ['Դուրս ենք գալիս...', 'Выходим...', 'Signing out...'],
  ['Դուրս գալ', 'Выйти', 'Log out'],
  // чат и геолокация
  ['Հաղորդագրություններ', 'Сообщения', 'Messages'],
  ['Ձայնային զանգ', 'Голосовой звонок', 'Voice call'],
  ['Տեսազանգ', 'Видеозвонок', 'Video call'],
  ['Ընդհանուր Խումբ', 'Общая группа', 'General group'],
  ['Գրեք բոլորին', 'Написать всем', 'Write to everyone'],
  ['Անանուն', 'Аноним', 'Anonymous'],
  ['Տեղադրություն', 'Местоположение', 'Location'],
  ['Գրեք հաղորդագրություն...', 'Напишите сообщение...', 'Type a message...'],
  ['հիմա առցանց', 'сейчас онлайн', 'online now'],
  ['թարմացվել է {{n}} րոպե առաջ', 'обновлено {{n}} мин. назад', 'updated {{n}} min ago'],
  ['Բեռնվում է...', 'Загрузка...', 'Loading...'],
  ['Օգտատերը դեռ չի կիսվել իր տեղադրությամբ', 'Пользователь ещё не поделился геопозицией', "The user hasn't shared their location yet"],
  ['Զանգերի ֆունկցիան դեռ պատրաստ չէ, թարմացրեք էջը և փորձեք կրկին:', 'Функция звонков ещё не готова, обновите страницу и попробуйте снова.', 'Calling is not ready yet, refresh the page and try again.'],
  ['Օգտատերը հասանելի չէ (անցանց է կամ գոյություն չունի):', 'Пользователь недоступен (не в сети или не существует).', 'The user is unavailable (offline or does not exist).'],
  ['Չհաջողվեց սկսել զանգը, փորձեք կրկին:', 'Не удалось начать звонок, попробуйте снова.', 'Could not start the call, please try again.'],
  // карьера
  ['Մշակույթ', 'Культура', 'Culture'],
  ['Առավելություններ', 'Преимущества', 'Benefits'],
  ['Ինչպես ընդունվել աշխատանքի Evocabank-ում', 'Как устроиться на работу в Evocabank', 'How to get hired at Evocabank'],
  ['Դառնալ թիմի անդամ', 'Стать частью команды', 'Join the team'],
  ['Անուն', 'Имя', 'First name'],
  ['Ազգանուն', 'Фамилия', 'Last name'],
  ['Ուղեկցող նամակ', 'Сопроводительное письмо', 'Cover letter'],
  ['Ստուգման ծածկագիր', 'Проверочный код', 'Verification code'],
  ['Ես ուզում եմ աշխատել Evoca-ում :)', 'Я хочу работать в Evoca :)', 'I want to work at Evoca :)'],
  ['Շնորհակալություն', 'Спасибо', 'Thank you'],
  ['Ձեր դիմումն ընդունված է: Մեր թիմը կապ կհաստատի Ձեզ հետ:', 'Ваша заявка принята. Наша команда свяжется с вами.', 'Your application has been received. Our team will contact you.'],
  // новости
  ['Գլխավոր', 'Главное', 'Main'],
  ['Բանկային', 'Банковские', 'Banking'],
  ['Հարցազրույցներ', 'Интервью', 'Interviews'],
  ['Պրոդուկտներ', 'Продукты', 'Products'],
  ['Նորարարություններ', 'Инновации', 'Innovations'],
  ['Կենսակերպ', 'Стиль жизни', 'Lifestyle'],
  ['Այս կատեգորիայում նորություններ դեռ չկան:', 'В этой категории новостей пока нет.', 'No news in this category yet.'],
  ['Բոլորը', 'Все', 'All'],
  ['Բաց մի թողեք', 'Не пропустите', "Don't miss"],
  ['Կարևոր', 'Важное', 'Important'],


  [
  'Բեր աշխատավարձդ Evoca: Ստացիր շատ ավելին...',
  'Переведи зарплату в Evoca и получи больше...',
  'Bring your salary to Evoca and get more...'
],
[
  'Evoca Աշխատավարձային Նախագիծ',
  'Зарплатный проект Evoca',
  'Evoca Salary Project'
],
[
  'Evoca Travel Card',
  'Evoca Travel Card',
  'Evoca Travel Card'
],
[
  'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
  'Эта карта с её многочисленными преимуществами станет твоим незаменимым спутником в путешествиях',
  'This card with its numerous benefits will become your inseparable travel partner'
],
[
  'Իմանալ ավելին',
  'Узнать больше',
  'Learn more'
],
[
  'Կարճ հեռախոսահամարով՝ 8444',
  'Короткий номер телефона — 8444',
  'Short phone number: 8444'
],
[
  'Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...',
  'Добро пожаловать в Evocabank․ Мы ждём вашего звонка…',
  'Welcome to Evocabank! We are waiting for your call…'
],
[
  'Ձեռք բեր Visa Vision քարտը քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
  'Получи карту Visa Vision в любимом цвете и стиле и пользуйся множеством преимуществ',
  'This card with its numerous benefits will become your inseparable travel partner'
],




[ 
  'Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամ',
  'Станьте клиентом Evocabank с помощью биометрической идентификации',
  'Become an Evocabank customer through biometric identification'
],
[ 
  'Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ',
  'Отсканируйте QR-код, скачайте наше удобное приложение EvocaTOUCH, создайте аккаунт и получите карту',
  'Scan the QR code, download our convenient EvocaTOUCH application, create your account and get a card'
],
[
  'Մանրամասն',
  'Подробнее',
  'Details'
],


//calculyator 
  ['Վարկ', 'Кредит', 'Loan'],
  ['Ավանդ', 'Вклад', 'Deposit'],
  ['Մարման ձև', 'Способ погашения', 'Repayment type'],
  ['Զսպանակաձև', 'Дифференцированный', 'Differentiated'],
  ['Անուիտետ', 'Аннуитетный', 'Annuity'],
  ['Հաշվել', 'Рассчитать', 'Calculate'],
  ['Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:', 'Все расчёты носят приблизительный характер и не являются публичной офертой.', 'All calculations are approximate and do not constitute a public offer.'],
  ['Օրական կտրվածքով հաշվարկվող տոկոսագումար', 'Проценты, начисляемые ежедневно', 'Interest accrued daily'],
  ['Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ', 'Общий процентный доход, начисленный за срок действия депозитного договора', 'Total interest income accrued during the term of the deposit agreement'],
  ['Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ', 'Чистый процентный доход, фактически выплачиваемый вкладчику за срок действия депозитного договора', 'Net interest income actually paid to the depositor during the term of the deposit agreement'],
  ['Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներն հարկվում են 10% եկամտային հարկի չափով', 'Проценты, полученные по вкладу, облагаются подоходным налогом в размере 10%', 'Interest received on the deposit is subject to a 10% income tax'],
  ['Վարկային հաշվիչի արդյունքներ', 'Результаты кредитного калькулятора', 'Loan calculator results'],
  ['Գումար', 'Сумма', 'Amount'],
  ['Տարեկան տոկոսադրույք', 'Годовая процентная ставка', 'Annual interest rate'],
  ['Վարկի ժամկետը', 'Срок кредита', 'Loan term'],
  ['Ողջ վճարումը', 'Общая выплата', 'Total payment'],
  ['Ամիս', 'Месяц', 'Month'],
  ['Տոկոսագումար', 'Проценты', 'Interest'],
  ['Մասնակի մարում', 'Погашение основного долга', 'Principal repayment'],
  ['Ամսական վճար', 'Ежемесячный платёж', 'Monthly payment'],
  ['Ընդամենը', 'Итого', 'Total'],
  ['Հաշվիչներ','калькулятор','Calculators'],


  //onlain banki komponent
  ['Օնլայն և մոբայլ բանկինգ','Онлайн-банкинг и мобильный банкинг','Online and Mobile Banking'],
  ['Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:','Evocabank — это банк, предоставляющий быстрые, простые и инновационные услуги, отличающийся активным использованием новейших информационных технологий.','Evocabank is a bank that provides fast, simple, and innovative services, distinguished by its active use of the latest information technologies.'],
  ['Դառնալ հաճախորդ','Станьте клиентом','Become a customer'],


  //urish komponent
  ['Գործընկերներ','Партнеры','Partners'],
  ['Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն:','Станьте партнером Evocabank, и давайте вместе двигаться к новой, яркой реальности.','Become an Evocabank partner, and let’s move together toward a vibrant new reality.'],
  

  ['Լավագույնը Evocabank-ից', 'Лучшее от Evocabank', 'The best from Evocabank'],
  ['Թվային քարտեր', 'Цифровые карты', 'Digital cards'],
  ['Նվեր քարտեր', 'Подарочные карты', 'Gift cards'],
  ['Նոր հավելված', 'Новое приложение', 'New app'],
  ['Օնլայն վճարումներ', 'Онлайн-платежи', 'Online payments'],
  ['Evoca Digital քարտ', 'Цифровая карта Evoca', 'Evoca Digital card'],
  ['Evoca Gift Card', 'Подарочная карта Evoca', 'Evoca Gift Card'],
  ['EvocaTOUCH 2', 'EvocaTOUCH 2', 'EvocaTOUCH 2'],
  ['Արագ online վճարումներ', 'Быстрые онлайн-платежи', 'Fast online payments'],
  ['EvocaTOUCH-ը պարզապես բանկային հավելված չէ։', 'EvocaTOUCH — это не просто банковское приложение.', 'EvocaTOUCH is not just a banking app.'],
  ['Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով։', 'Совершай свои текущие платежи через онлайн-терминал Evocabank.', "Make your regular payments through Evocabank's online terminal."],
  ['Դիլիջան, մենք գալիս ենք', 'Дилижан, мы едем', 'Dilijan, here we come'],
  ['Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր', 'Evocabank — финансовый партнёр Retro Fest', "Evocabank is Retro Fest's financial partner"],
  ['Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով', 'К новому учебному году — с кешбэком до 23%', 'Toward the new school year with up to 23% cashback'],


  //news
  ['Վերջին նորությունները', 'Последние новости', 'Latest news'],
  ['Բոլոր նորությունները ›', 'Все новости ›', 'All news ›'],


  //urish blok
    // отзывы
  ['Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով',
   'Банк, который своим роскошным мероприятием по ребрендингу и форматом работы укрепил качество и задал вкус в банковской сфере. Evocabank с первой же секунды заставил взглянуть по-новому, современным взглядом',
   'A bank that, with its lavish rebranding event and way of working, strengthened quality and set the standard of taste in the banking sector. From the very first second, Evocabank made you look at things in a new and modern way'],
  ['Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:',
   'Исключительно замечательный банк для армянской действительности. Уже за одну только возможность для молодых семей приобрести квартиру под такой низкий процент банк заслуживает большого уважения. Спасибо, что вы есть.',
   'An exceptionally wonderful bank for Armenian reality. Just for giving young families the chance to buy an apartment at such a low interest rate, it deserves great respect. Thank you for being there.'],
  ['Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման',
   'Отличное обслуживание, прекрасный и классный персонал в филиале на Азатутюн. Большое спасибо кредитному отделу: мой кредит оформили без лишней суеты — легко, быстро, качественно. Обслуживание',
   'Excellent service, wonderful and fun staff at the Azatutyun branch. Many thanks to the loan department: my loan was processed without any unnecessary hassle — easily, quickly and with quality. Service'],
  ['Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի',
   'К новой реальности: вот куда мы движемся, успешно завершая каждый проект вместе с Evocabank. Сотрудничая более 5 лет, можно сказать, что вместе мы прошли большой путь, полный',
   'Toward a new reality: that is where we are heading with every project successfully completed with Evocabank. After more than 5 years of cooperation, we can say that together we have come a long way, full of'],
  ['Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:',
   'Лучший инновационный и цифровой банк с лучшими услугами и персоналом.',
   'The best innovative and digital bank with the best services and staff.'],
  ['Կամո Թովմասյան', 'Камо Товмасян', 'Kamo Tovmasyan'],
  ['Սուսաննա Վանյան', 'Сусанна Ванян', 'Susanna Vanyan'],
  ['Նունե Գևորգյան', 'Нуне Геворгян', 'Nune Gevorgyan'],
  ['Արամ Ագարյան', 'Арам Агарян', 'Aram Agaryan'],
  ['Էլեն Վարդանյան', 'Элен Варданян', 'Elen Vardanyan'],
  ['KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer', 'Основатель медиаплатформы KAMOBLOG, инфлюенсер', 'Founder of the KAMOBLOG media platform, influencer'],
  ['Indigo Branding-ի հիմնադիր', 'Основатель Indigo Branding', 'Founder of Indigo Branding'],
  ['Հաճախորդ', 'Клиент', 'Customer'],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
  // ['','',''],
];

const ru = {};
const en = {};
ROWS.forEach(([hy, r, e]) => { ru[hy] = r; en[hy] = e; });

export const LANGS = [
  { code: 'hy', label: 'Հայ', full: 'Հայերեն' },
  { code: 'ru', label: 'Рус', full: 'Русский' },
  { code: 'en', label: 'Eng', full: 'English' },
];

let saved = 'hy';
try {
  const s = localStorage.getItem('lang');
  if (LANGS.some((l) => l.code === s)) saved = s;
} catch { /* localStorage может быть недоступен */ }

i18n.use(initReactI18next).init({
  resources: { ru: { translation: ru }, en: { translation: en } },
  lng: saved,
  fallbackLng: false, // нет перевода → показываем ключ (армянский)
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

document.documentElement.lang = saved;
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  try { localStorage.setItem('lang', lng); } catch { /* ignore */ }
});

export default i18n;
