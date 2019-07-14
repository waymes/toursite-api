import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

import config from '../config';
import AdminUser from '../api/admin-users/admin-user.model';

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(Boom.badRequest('Email and Password are required'));
  }

  const adminUser = await AdminUser.findOne({ where: { email, password } });
  if (!adminUser) {
    return next(Boom.unauthorized('Email or Password not valid'));
  }

  const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: config.jwtExpiration });
  return res.status(200).send({ token });
};

export const touch = (req, res) => {
  res.sendStatus(204);
};
