import tripSchema, { tableName as tripsTableName } from '../../src/api/trips/trip.schema';
import subscriberSchema, { tableName as subscribersTableName } from '../../src/api/subscribers/subscriber.schema';

// eslint-disable-next-line import/prefer-default-export
export const up = async (queryInterface) => {
  await queryInterface.createTable(tripsTableName, tripSchema);
  await queryInterface.createTable(subscribersTableName, subscriberSchema);
};
