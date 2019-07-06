const firstBlockItems = [
  {
    title: '12 дней',
    details: 'экшна, приключений и культурных сюрпризов. Каждая ночёвка - в новом и необычном месте',
  },
  {
    title: '2300 километров',
    details: 'проедем, пролетим и проплывём по Ирану с Севера на Юг и обратно',
  },
  {
    title: '45 объектов',
    details: 'мирового культурно-исторического наследия мы посетим, включая объекты ЮНЕСКО',
  },
  {
    title: '32 гигабайта',
    details: 'это минимум, сколько тебе понадобится памяти для того, чтобы запечатлеть происходящее в поездке',
  },
];
const secondBlockItems = [
  {
    image: '/static/tour/tour_picture_1.jpg',
    text: 'Заберёмся на верхушку одной из самых высоких телебашен в мире!',
  },
  {
    image: '/static/tour/tour_picture_2.jpg',
    text: 'Ощутим себя на Луне посреди белоснежной соляной пустыни',
  },
  {
    image: '/static/tour/tour_picture_3.jpg',
    text: 'Будем кувыркаться с высоких дюн в пустыне и гонять по ним на джипах',
  },
  {
    image: '/static/tour/tour_picture_4.jpg',
    text: 'Будем купаться в Персидском заливе! Ради этого мы поплывём на катере на вулканический остров неземной красоты. Апогей путешествия и секретное место)',
  },
  {
    image: '/static/tour/tour_picture_5.jpg',
    text: 'Будем жить в средневековом каравансарае, где останавливались путешественники Шёлкового Пути',
  },
];
const thirdBlockItems = [
  {
    title: 'Идеальная страна для насыщенного путешествия, которая пока еще не стала трендом среди туристов',
    details: 'Иран активно развивает туризм и обладает очень развитой транспортной инфраструктурой, большим количеством отелей и высокой плотностью самых разнообразных достопримечательностей.',
  },
  {
    title: 'Великое историческое наследие, необычная архитектура, космические пейзажи и самые гостеприимные люди!',
    details: 'Это одна из четырех сохранившихся до наших дней древнейших мировых цивилизаций.',
  },
  {
    title: 'Иран - одна из самых безопасных стран в мире!',
    details: 'Да-да, именно так и есть! Не путайте Иран с Ираком) В Иране нет никаких войн и террористов. Согласно международному рейтингу стран по уровню преступности - в Иране безопаснее чем в Украине, России, США, Турции и целого ряда европейских стран. Как минимум, там нет такого явления, как "гопники" :)',
  },
  {
    title: 'Это единственная страна в мире, где ещё сохранился древний колорит и романтика сказочного Востока',
    details: 'Именно в Иране происходили действия из "Сказки тысячи и одной ночи", Алладин летал на ковре-самолёте к прекрасной Жасмин, а обычные иранцы по сей день цитируют великого поэта - Омара Хайяма. В старинных городах до сих пор ощущается магия Востока.',
  },
  {
    title: 'Здесь до сих пор кипят жизнью настоящие средневековые восточные базары',
    details: 'Можно купить самые необычные вещи, разнообразные специи, сладости и пряности, знаменитые персидские ковры-самолёты, лампы Алладина и аутентичную утварь - мы советуем брать обратный билет домой с багажом:)',
  },
  {
    title: 'Современный и древний, уникальный и аутентичный, микс природы и культуры',
    details: 'Этот тур очень сложно назвать "туром", это сделано для поисковой системы Гугла:) На самом деле это - настоящее путешествие, приключение. Полное погружение в культуру.',
  },
];
const fourthBlockItems = [
  '/static/tour/tour_picture_1.jpg',
  '/static/tour/tour_picture_2.jpg',
  '/static/tour/tour_picture_3.jpg',
  '/static/tour/tour_picture_4.jpg',
  '/static/tour/tour_picture_5.jpg',
  '/static/tour/tour_picture_6.jpg',
];
const fifthBlockItems = [
  {
    title: 'Проживание',
    details: 'В традиционных персидских отелях, гестхаусах, настоящем средневековом каравансарае и в частном доме на острове. С завтраками.',
    icon: 'fas fa-home',
  },
  {
    title: 'Все переезды в Иране',
    details: 'Аренда микроавтобуса/автомобиля, проезд в комфортабельном поезде "Персидский Экспресс", паромы на остров и внутренний перелёт на самолёте.',
    icon: 'fas fa-bus',
  },
  {
    title: 'Достопримечательности',
    details: 'Входные билеты во все объекты посещения в поездке - дворцы, музеи, башни, сады, замки, мечети и мероприятия.',
    icon: 'fas fa-place-of-worship',
  },
];
const additionalExpenses = [
  {
    title: 'Авиаперелёт',
    details: 'Из Вашего города в Тегеран. Поможем купить билеты.',
  },
  {
    title: 'Виза',
    details: 'Оформляется по прилёту в аэропорт Тегерана. Стоимость - 95$',
  },
  {
    title: 'Страховка',
    details: 'Иранская медицинская страховка оформляется лично по прилёту в аэропорт, 16$',
  },
  {
    title: 'Питание',
    details: 'Обеды и ужины в кафешках, примерно 8-15$/день',
  },
];

const bulkData = [
  {
    tableName: 'trips',
    records: [
      {
        createdAt: new Date(),
        dateFrom: new Date('2019-09-12'),
        dateTo: new Date('2019-09-22'),
        image: '/static/tour/tour_picture_1.jpg',
        title1: 'Думаешь, куда поехать на майские праздники?',
        title2: 'Открой для себя магию Востока!',
        destination: 'Иран',
        name: 'Тур в Иран',
        firstBlockTitle: 'Готовьтесь к самому потрясающему приключению:',
        firstBlockItems: JSON.stringify(firstBlockItems),
        secondBlockTitle: 'Что нас ждёт в поездке?',
        secondBlockItems: JSON.stringify(secondBlockItems),
        thirdBlockTitle: 'Почему Иран?',
        thirdBlockItems: JSON.stringify(thirdBlockItems),
        fourthBlockTitle: 'Посмотрите, как это было в прошлый раз:',
        fourthBlockItems: JSON.stringify(fourthBlockItems),
        fifthBlockTitle: 'Что включено?',
        fifthBlockItems: JSON.stringify(fifthBlockItems),
        price: 1099,
        additionalExpenses: JSON.stringify(additionalExpenses),
      },
      {
        createdAt: new Date(),
        dateFrom: new Date('2019-10-05'),
        dateTo: new Date('2019-10-14'),
        image: '/static/tour/tour_picture_2.jpg',
        title1: 'Думаешь, где отдохнуть осенью?',
        title2: 'Открой для себя магию Востока!',
        destination: 'Турция',
        name: 'Путешествие в Турцию',
        firstBlockTitle: 'Готовьтесь к самому потрясающему приключению:',
        firstBlockItems: JSON.stringify(firstBlockItems),
        secondBlockTitle: 'Что нас ждёт в поездке?',
        secondBlockItems: JSON.stringify(secondBlockItems),
        thirdBlockTitle: 'Почему Турция?',
        thirdBlockItems: JSON.stringify(thirdBlockItems),
        fourthBlockTitle: 'Посмотрите, как это было в прошлый раз:',
        fourthBlockItems: JSON.stringify(fourthBlockItems),
        fifthBlockTitle: 'Что включено?',
        fifthBlockItems: JSON.stringify(fifthBlockItems),
        price: 1199,
        additionalExpenses: JSON.stringify(additionalExpenses),
      },
      {
        createdAt: new Date(),
        dateFrom: new Date('2019-12-15'),
        dateTo: new Date('2019-12-27'),
        image: '/static/tour/tour_picture_3.jpg',
        title1: 'Думаешь, куда поехать на декабрьские праздники?',
        title2: 'Открой для себя магию Европы!',
        destination: 'Болгария',
        name: 'Тур в Болгарию',
        firstBlockTitle: 'Готовьтесь к самому потрясающему приключению:',
        firstBlockItems: JSON.stringify(firstBlockItems),
        secondBlockTitle: 'Что нас ждёт в поездке?',
        secondBlockItems: JSON.stringify(secondBlockItems),
        thirdBlockTitle: 'Почему Болгария?',
        thirdBlockItems: JSON.stringify(thirdBlockItems),
        fourthBlockTitle: 'Посмотрите, как это было в прошлый раз:',
        fourthBlockItems: JSON.stringify(fourthBlockItems),
        fifthBlockTitle: 'Что включено?',
        fifthBlockItems: JSON.stringify(fifthBlockItems),
        price: 900,
        additionalExpenses: JSON.stringify(additionalExpenses),
      },
      {
        createdAt: new Date(),
        dateFrom: new Date('2020-02-10'),
        dateTo: new Date('2020-02-17'),
        image: '/static/tour/tour_picture_4.jpg',
        title1: 'Думаешь, куда поехать в феврале?',
        title2: 'Открой для себя магию Карпат!',
        destination: 'Карпаты',
        name: 'Позод в Карпаты',
        firstBlockTitle: 'Готовьтесь к самому потрясающему приключению:',
        firstBlockItems: JSON.stringify(firstBlockItems),
        secondBlockTitle: 'Что нас ждёт в поездке?',
        secondBlockItems: JSON.stringify(secondBlockItems),
        thirdBlockTitle: 'Почему Карпаты?',
        thirdBlockItems: JSON.stringify(thirdBlockItems),
        fourthBlockTitle: 'Посмотрите, как это было в прошлый раз:',
        fourthBlockItems: JSON.stringify(fourthBlockItems),
        fifthBlockTitle: 'Что включено?',
        fifthBlockItems: JSON.stringify(fifthBlockItems),
        price: 510,
        additionalExpenses: JSON.stringify(additionalExpenses),
      },
    ],
  },
];

// eslint-disable-next-line import/prefer-default-export
export const up = (queryInterface, { transaction = null } = {}) => {
  const insertsPromisesList = [];
  bulkData.forEach(({ tableName, records }) => {
    insertsPromisesList.push(queryInterface.bulkInsert(
      tableName,
      records,
      { transaction, individualHooks: true, hooks: true },
    ));

    console.log(`Inserting ${records.length} records into ${tableName}`);
  });

  // await queryInterface.sequelize.query('ALTER SEQUENCE "users_userId_seq" RESTART WITH 101;');
  return Promise.all(insertsPromisesList);
};
