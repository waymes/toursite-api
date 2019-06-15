import Boom from '@hapi/boom';

import Trip from './trip.model';

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
