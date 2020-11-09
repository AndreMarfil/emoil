import { Router } from 'express';

import customersRoutes from '../../../modules/Customers/routes/customers.routes';

import usersRoutes from '../../../modules/Users/routes/users.routes';

const routes = Router();

routes.use('/customers', customersRoutes);
routes.use('/users', usersRoutes);

export default routes;
