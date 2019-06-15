import tripRoutes from './api/trips/trip.routes';

export default (app) => {
  app.use('/trips', tripRoutes);
};
