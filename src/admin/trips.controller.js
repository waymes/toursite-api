import Boom from '@hapi/boom';
import moment from 'moment';

import Trip from '../api/trips/trip.model';
import { getTripFormFieldList } from '../helpers/admin-fields';

export const list = async (req, res, next) => {
  try {
    const trips = await Trip.findAll();
    const fieldList = [
      { name: 'name', label: 'Name' },
      { name: 'destination', label: 'Destination' },
      { name: 'dateFrom', label: 'Date from' },
    ];
    const formattedTrips = trips.map(trip => ({
      id: trip.id,
      name: trip.name,
      destination: trip.destination,
      dateFrom: moment(trip.dateFrom).format('DD.MM.YYYY'),
    }));

    res.status(200).send({
      entityList: formattedTrips,
      fieldList,
      goToEntityPageLabel: 'Edit',
      createNew: true,
    });
  } catch (error) {
    next(Boom.badImplementation());
  }
};

export const get = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ where: { id: req.params.id } });
    if (!trip) {
      next(Boom.notFound());
      return;
    }
    const responseData = {
      entityData: trip,
      title: 'Edit Trip',
      entityFieldList: getTripFormFieldList(trip),
    };
    res.status(200).send(responseData);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};

export const getNew = async (req, res, next) => {
  try {
    const responseData = {
      entityData: null,
      title: 'Create Trip',
      entityFieldList: getTripFormFieldList(),
    };
    res.status(200).send(responseData);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};

export const update = async (req, res, next) => {
  try {
    await Trip.update(req.body, { where: { id: req.params.id } });

    res.sendStatus(204);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};

export const create = async (req, res, next) => {
  try {
    const trip = await Trip.create(req.body);

    res.status(201).send(trip);
  } catch (error) {
    next(Boom.badImplementation(error));
  }
};
