import { container } from 'tsyringe';

import ICustomersRepository from '../../modules/Customers/interfaces/repositories/ICustomersRepository';
import CustomersRepository from '../../modules/Customers/repositories/CustomersRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
