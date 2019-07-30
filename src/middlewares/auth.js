import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

import AdminUser from '../api/admin-users/admin-user.model';

import config from '../config';

// eslint-disable-next-line import/prefer-default-export
export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(Boom.unauthorized('No token provided'));
  }
  return jwt.verify(token, config.jwtSecret, async (error, decodedTokenData) => {
    if (error) {
      if (error.name === 'TokenExpiredError') {
        return next(Boom.unauthorized('Token expired'));
      }
      return next(Boom.unauthorized('Failed to authenticate token'));
    }
    const adminUser = await AdminUser.findOne({ where: { email: decodedTokenData.email } });

    req.admin = adminUser;
    return next();
  });
};
