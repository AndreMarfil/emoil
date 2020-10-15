import { getRepository, Repository } from 'typeorm';

import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO';
import ICustomersRepository from '../interfaces/repositories/ICustomersRepository';

import Customer from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({ where: { email } });

    return customer;
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create(data);

    await this.save(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    return this.ormRepository.save(customer);
  }
}

export default CustomersRepository;
