import { injectable, inject } from 'tsyringe';
import * as Yup from 'yup';
import IOilsRepository from '../repositories/IOilsRepository';

interface IRequest {
  name: string;
  expirationInMonth: number;
}

@injectable()
class CreateOilService {
  constructor(
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute({ name, expirationInMonth }: IRequest): Promise<Oil> {
    // expirationMonth > 0
    // name não pode ser vazio
    // transformar o numero de meses em uma data futura
    // inserir no BD

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      expirationInMonth: Yup.number().required(),
    });

    await schema.validate({ name, expirationInMonth }, { abortEarly: false });
  }
}

export default CreateOilService;
