import { inject, injectable } from 'tsyringe';
import * as Yup from 'yup';
import { hash } from 'bcryptjs';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';

import User from '../entities/User';

interface IRequest {
  username: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ username, password }: IRequest): Promise<User> {
    const schema = Yup.object().shape({
      username: Yup.string().required(
        'O campo deve possuir um nome de usuário.',
      ),
      password: Yup.string().required('O campo deve possuir uma senha.'),
    });

    await schema.validate({ username, password }, { abortEarly: false });

    const userAlreadyExists = await this.usersRepository.findByUserName(
      username,
    );

    if (userAlreadyExists) throw new Error('Nome de usuário já existente.');

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
