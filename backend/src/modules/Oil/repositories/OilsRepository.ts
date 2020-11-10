import { getRepository, Repository } from 'typeorm';


import IOilsRepository from '../interfaces/repositories/IOilsRepository';

import Oil from '../entities/Oil';
import ICreateOilDTO from '../dtos/lCreateOilDTO';

class OilsRepository implements IOilsRepository {
  private ormRepository: Repository<Oil>;

  constructor() {
    this.ormRepository = getRepository(Oil);
  }
  findByName(name: string): Promise<Oil | undefined> {
    throw new Error('Method not implemented.');
  }


    public async create({name,expiration}: ICreateOilDTO): Promise<Oil> {
    const oil = this.ormRepository.create({ name,expiration });

    await this.save(oil);

    return oil;
  }

  public async save(customer: Oil): Promise<Oil> {
    return this.ormRepository.save(customer);
  }
}

export default CustomersRepository;
