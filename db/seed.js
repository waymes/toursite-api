import db from '../src/db';
import { up } from './seeds';

(async function run() {
  const transaction = await db.transaction();
  try {
    await up(db.getQueryInterface(), { transaction });
    await transaction.commit();

    console.log('Seeds run completed');
    process.exit();
  } catch (e) {
    try {
      await transaction.rollback();
    } finally {
      console.log(e.stack);
      process.exit(1);
    }
  }
}());
