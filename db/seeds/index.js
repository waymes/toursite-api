const bulkData = [
  {
    tableName: 'trips',
    records: [
      { title: 'Иран', createdAt: new Date(), image: '/static/tour/tour_picture_1.jpg' },
      { title: 'Грузия', createdAt: new Date(), image: '/static/tour/tour_picture_2.jpg' },
      { title: 'Персия', createdAt: new Date(), image: '/static/tour/tour_picture_3.jpg' },
      { title: 'Карпаты', createdAt: new Date(), image: '/static/tour/tour_picture_4.jpg' },
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
