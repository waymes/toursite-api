import tripSchema, { tableName as tripsTableName } from '../../src/api/trips/trip.schema';

// eslint-disable-next-line import/prefer-default-export
export const up = async (queryInterface) => {
  await queryInterface.createTable(tripsTableName, tripSchema);
};
