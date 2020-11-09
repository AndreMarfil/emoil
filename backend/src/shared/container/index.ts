import { container } from 'tsyringe';

import ICustomersRepository from '../../modules/Customers/interfaces/repositories/ICustomersRepository';
import CustomersRepository from '../../modules/Customers/repositories/CustomersRepository';

import IUsersRepository from '../../modules/Users/interfaces/repositories/IUsersRepository';
import UsersRepository from '../../modules/Users/repositories/UsersRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
