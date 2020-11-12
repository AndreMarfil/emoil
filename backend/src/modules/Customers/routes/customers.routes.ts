import { Router } from 'express';

import ensureAuthenticated from '../../Users/middlewares/ensureAuthenticated';

import CustomersController from '../controllers/CustomersController';

const customersRoute = Router();
const customersController = new CustomersController();

customersRoute.post('/', ensureAuthenticated, customersController.create);

export default customersRoute;
