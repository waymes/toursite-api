import tripRoutes from './api/trips/trip.routes';
import adminRoutes from './admin/admin.routes';

export default (app) => {
  app.use('/trips', tripRoutes);
  app.use('/admin', adminRoutes);
};
