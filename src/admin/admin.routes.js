import express from 'express';

import { requireAuth } from '../helpers/authHelper';
import * as authController from './auth.controller';

const router = express.Router();

router.post('/auth/login', authController.login);
router.get('/auth/touch', requireAuth, authController.touch);

export default router;
