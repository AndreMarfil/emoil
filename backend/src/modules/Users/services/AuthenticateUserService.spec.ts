import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import AuthenticateUserService from './AuthenticateUserService';

let authenticateUserService: AuthenticateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUserService = new AuthenticateUserService(fakeUsersRepository);
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({ username: 'user.name',
    password: '123456'});

    const response = await authenticateUserService.execute({
      username: 'user.name',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});
