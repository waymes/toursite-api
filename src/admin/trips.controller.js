import Trip from '../api/trips/trip.model';

// eslint-disable-next-line import/prefer-default-export
export const list = async (req, res) => {
  const trips = await Trip.findAll();

  res.status(200).send(trips);
};
