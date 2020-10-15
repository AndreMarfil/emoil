import { Router } from 'express';

import customersRoutes from '../../../modules/Customers/routes/customers.routes';

const routes = Router();

routes.use('/customers', customersRoutes);

export default routes;
