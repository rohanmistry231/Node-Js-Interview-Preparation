const request = require('supertest');
const app = require('./app');

describe('Integration Test: Users API', () => {
    test('should fetch a user by ID', async () => {
        const res = await request(app)
            .get('/users/1')
            .expect(200);

        expect(res.body).toEqual({ id: 1, name: 'User1' });
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express supertest jest --save-dev
// 3. Save this file as app.integration.test.js
// 4. Save app.js and db.js in the same directory
// 5. Run: npx jest app.integration.test.js
// Note: This code won't execute here due to network restrictions.