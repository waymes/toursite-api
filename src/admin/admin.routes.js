import express from 'express';

import { requireAuth } from '../middlewares';
import * as authController from './auth.controller';
import * as tripsController from './trips.controller';
import * as subscribersController from './subscribers.controller';

const router = express.Router();

router.post('/auth/login', authController.login);
router.get('/auth/touch', requireAuth, authController.touch);

router.get('/trips', requireAuth, tripsController.list);
router.get('/trips/new', requireAuth, tripsController.getNew);
router.post('/trips/new', requireAuth, tripsController.create);
router.get('/trips/:id', requireAuth, tripsController.get);
router.put('/trips/:id', requireAuth, tripsController.update);

router.get('/subscribers', requireAuth, subscribersController.list);

export default router;
