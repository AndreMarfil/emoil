import { injectable, inject } from 'tsyringe';
import { addMonths } from 'date-fns';
import * as Yup from 'yup';
import IOilsRepository from '../interfaces/repositories/IOilsRepository';
import Oil from '../entities/Oil';

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
    const schema = Yup.object().shape({
      name: Yup.string().required(
        'Aqui pode conter uma mensagem segundo o Leo',
      ),
      expirationInMonth: Yup.number()
        .required()
        .moreThan(0, 'A expiração do oléo deve ser maior que zero'),
    });

    await schema.validate({ name, expirationInMonth }, { abortEarly: false });

    const expiration = addMonths(new Date(), expirationInMonth);

    const oil = await this.oilsRepository.create({ expiration, name });

    return oil;
  }
}

export default CreateOilService;
