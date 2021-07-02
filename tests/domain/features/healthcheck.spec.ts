import CreateHealth from '../../../src/domain/features/CreateHealth'
import FakeHealthRepository from '../fakes/FakeHealthRepository'

describe('', () => {
  let fakeHealthRepository: FakeHealthRepository;
  let createHealth: CreateHealth;
  beforeEach(() => {
    fakeHealthRepository = new FakeHealthRepository();
    createHealth =  new CreateHealth(fakeHealthRepository)
  })

  test('test healthcheck function', () => {
    const message = createHealth.execute({
      message: 'health check answer',
      date: new Date()
    })
    expect(message.message).toBe('health check answer')
    expect(message).toHaveProperty('date')
  })
})
