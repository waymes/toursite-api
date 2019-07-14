import schema, { tableName } from './admin-user.schema';
import db from '../../db';

const AdminUser = db.define(tableName, schema);

export default AdminUser;
