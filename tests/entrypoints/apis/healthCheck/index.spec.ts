import supertest from 'supertest';
import init from '../../../../src/bootstrap/init'

describe('Integration', () => {
  afterAll(async () => {
    // await init.close();
  });

  describe('GET /health', () => {
    it('should return status code 200',  async () => {
      const server = await supertest(init().app).get('/health')

      expect(server.statusCode).toBe(200);
      expect(server.body.message).toBe('health check answer');
      expect(server.body).toHaveProperty('date');
    });
  });
});
