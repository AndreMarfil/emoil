import CreateOilService from './CreateOilService';

describe('CreateOil', () => {
  it('should be able to create a new oil', async () => {
    const fakeOilsRepository = new fakeOilsRepository();

    const createOil = new CreateOilService(fakeOilsRepository);

    const oil = await createOil.execute({
      name: 'LUBRAX',
      validity: '07/01/1999',
    });

    expect(oil).toHaveProperty('id');
  });

  it('should not be able to create a new oil with same name from another', async () => {
    const fakeOilsRepository = new FakeOilsRepository();

    const createOil = new CreateOilService(fakeOilsRepository);

    const oil = await createOil.execute({
      name: 'LUBRAX',
      expiration: new Date(1999, 01, 07),
    });

    expect(
      createOil.execute({
        name: 'LUBRAX',
        expiration: new Date(1999, 01, 07),
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
