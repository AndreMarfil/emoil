import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';

import Customer from '../../entities/Customer';

interface ICustomersRepository {
  findByEmail(email: string): Promise<Customer | undefined>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
}

export default ICustomersRepository;
