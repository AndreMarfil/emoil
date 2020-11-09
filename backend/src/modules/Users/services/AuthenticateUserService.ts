import {sign} from 'jsonwebtoken'
import { compare } from 'bcryptjs';

import authConfig from '../../../config/authConfig';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';0

import User from '../entities/User';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUserName(username);

    if (!user) throw new Error('Combinação de usuário e senha inválida.');
    console.log(user);
    const passwordMatched = await compare(password,user.password);

    if (!passwordMatched)
    throw new Error('Combinação de usuário e senha inválida.');

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
