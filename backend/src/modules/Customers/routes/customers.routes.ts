import { Router } from 'express';

import CustomersController from '../controllers/CustomersController';

const customersRoute = Router();
const customersController = new CustomersController();

customersRoute.post('/', customersController.create);

customersRoute.get('/', () => console.log(1));

export default customersRoute;
