import schema, { tableName } from './subscriber.schema';
import db from '../../db';

const Subscriber = db.define(tableName, schema);

export default Subscriber;
