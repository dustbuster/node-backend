const request = require('supertest');
const app = require('../server'); // Import the app (without listening)

describe('GET /api/articles', () => {
  it('should return a list of articles', async () => {
    const response = await request(app).get('/api/articles');
    
    expect(response.statusCode).toBe(200); // Expect a 200 status code
    expect(response.body).toBeInstanceOf(Array); // Expect the response body to be an array

    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('description');
    }
  });
});
