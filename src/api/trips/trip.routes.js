import express from 'express';

import * as controller from './trip.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/subscribe', controller.subscribe);
router.post('/request', controller.request);
router.get('/:id', controller.get);

export default router;
