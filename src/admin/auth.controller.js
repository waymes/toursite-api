import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

import config from '../config';
import AdminUser from '../api/admin-users/admin-user.model';

const menuList = [
  { label: 'Dashboard', href: '/' },
  { label: 'Subscribers', href: '/subscribers' },
  { label: 'Trips', href: '/trips' },
];

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
  return res.status(200).send({ token, menuList });
};

export const touch = async (req, res) => {
  const user = await AdminUser.findOne({ where: { id: req.admin.id } });
  res.status(200).send({ user, menuList });
};
