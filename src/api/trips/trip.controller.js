import Boom from '@hapi/boom';

import config from '../../config';
import MailService from '../../services/Mail';

import Trip from './trip.model';
import Subscriber from '../subscribers/subscriber.model';

export const list = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;

    const tripList = await Trip.findAll({ limit, offset });
    return res.status(200).send(tripList);
  } catch (error) {
    return next(Boom.badImplementation(error));
  }
};

export const get = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ where: { id: req.params.id } });
    if (!trip) {
      return next(Boom.notFound('Trip not found'));
    }
    return res.status(200).send(trip);
  } catch (error) {
    return next(Boom.badImplementation(error));
  }
};

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingSubscriber = await Subscriber.findOne({ where: { email } });
    if (existingSubscriber) {
      return next(Boom.badData('Subscription already exists'));
    }

    const subscriber = await Subscriber.create({ email });
    const msg = {
      to: subscriber.email,
      from: config.ownerEmail,
      subject: 'Добро пожаловать в TripAdventure!',
      html: `<p>Ваш имейл добавлен в рассылку и теперь вы будете одними из первых получать уведомления о новых путешествиях и акциях.
        <br />Спасибо что вы с нами!</p>`,
    };
    await MailService.send(msg);
    return res.sendStatus(200);
  } catch (error) {
    return next(Boom.badImplementation(error));
  }
};
