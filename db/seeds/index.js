import * as constants from './temp-constants';

const bulkData = [
  {
    tableName: 'trips',
    records: [
      {
        createdAt: new Date(),
        dateFrom: new Date('2019-09-20'),
        dateTo: new Date('2019-09-29'),
        backgroundImage: '/static/trip/turkey/background-image.jpg',
        title: 'Открой для себя магию Востока!',
        destination: 'Турция',
        name: 'Неизведанная Турция',
        blockTitle1: 'Готовьтесь к самому потрясающему приключению:',
        blockItems1: JSON.stringify(constants.firstBlockItems),
        blockTitle2: 'Что нас ждёт в поездке?',
        blockItems2: JSON.stringify(constants.turkeyBlockItems2),
        blockTitle3: 'Почему Турция?',
        blockItems3: JSON.stringify(constants.turkeyBlockItems3),
        blockTitle4: 'Посмотрите, как это было в прошлый раз:',
        blockItems4: JSON.stringify(constants.turkeyBlockItems4),
        price: 420,
        includedList: JSON.stringify(constants.turkeyIncludedList),
        additionalList: JSON.stringify(constants.turkeyAdditionalList),
        description: constants.turkeyDescription,
      },
    ],
  },
  {
    tableName: 'admin_users',
    records: [
      { email: 'admin@test.test', password: '123456' },
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

    // eslint-disable-next-line no-console
    console.log(`Inserting ${records.length} records into ${tableName}`);
  });

  // await queryInterface.sequelize.query('ALTER SEQUENCE "users_userId_seq" RESTART WITH 101;');
  return Promise.all(insertsPromisesList);
};
