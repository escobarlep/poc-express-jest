import healthcheck from '../../../src/domain/features/healthcheck'

describe('', () => {
  test('test healthcheck function', () => {
    const res = healthcheck()
    expect(res).toBe('health check answer')
  })
})
