import ICreateOilDTO from '../../dtos/lCreateOilDTO';
import Oil from '../../entities/Oil';

interface IOilsRepository {
  findByName(name: string): Promise<Oil | undefined>;
  create(data: ICreateOilDTO): Promise<Oil>;
  save(oil: Oil): Promise<Oil>;
}

export default IOilsRepository;
