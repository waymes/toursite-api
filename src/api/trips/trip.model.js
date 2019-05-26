import schema, { tableName } from './trip.schema';
import db from '../../db';

const Trip = db.define(tableName, schema);

export default Trip;
