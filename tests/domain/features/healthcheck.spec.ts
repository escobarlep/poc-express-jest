import CreateUserService from '../../../src/domain/features/CreateUserService'
import healthcheck from '../../../src/domain/features/healthcheck'
import FakeUserRepository from '../fakes/FakeUserRepository'

describe('', () => {
  let fakeUserRepository: FakeUserRepository;
  let createUser: CreateUserService;
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    createUser =  new CreateUserService(fakeUserRepository)
  })

  test('test healthcheck function', () => {
    const res = healthcheck()
    expect(res).toBe('health check answer')
  })

  it('should be able to crate a new user',async () => {
    const user = await createUser.execute({name: 'Fernando', email: 'luiz.cendretti'});

    expect(user.name).toBe('Fernando');
    expect(user.email).toBe('luiz.cendretti')
  })
})
