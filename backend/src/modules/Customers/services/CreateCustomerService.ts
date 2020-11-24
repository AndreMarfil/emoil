import { injectable, inject } from 'tsyringe';
import * as Yup from 'yup';
import Customer from '../entities/Customer';
import ICustomersRepository from '../interfaces/repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ name, email }: IRequest): Promise<Customer> {
    const schema = Yup.object().shape({
      name: Yup.string().required(
        'O nome de cliente deve conter um campo válido.',
      ),
      email: Yup.string()
        .required('O campo deve conter um email válido.')
        .email('O email deve ser válido'),
    });

    await schema.validate({ name, email }, { abortEarly: false });

    const emailAlreadyInUse = await this.customersRepository.findByEmail(email);

    if (emailAlreadyInUse) throw new Error('E-mail já está em uso.');

    const customer = await this.customersRepository.create({ name, email });

    return customer;
  }
}

export default CreateCustomerService;
