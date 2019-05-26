const bulkData = [
  {
    tableName: 'trips',
    records: [
      { id: '1', title: 'Тур в Иран' },
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
