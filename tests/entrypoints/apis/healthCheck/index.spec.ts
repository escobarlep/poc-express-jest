import supertest from 'supertest'
import { server } from '../../../../src/bootstrap/index'

describe('Integration', () => {
  describe('GET /health', () => {
    it('should return status code 200', async () => {
      const response = await supertest(server().app).get('/health')

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('health check answer');
      expect(response.body).toHaveProperty('date');
    });
  });
});
