const request = require('supertest');
const app = require('./app');

describe('API Test: Users API', () => {
    test('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Alice', email: 'alice@example.com' })
            .expect(201);

        expect(res.body).toEqual({
            message: 'User created',
            user: { name: 'Alice', email: 'alice@example.com' }
        });
    });

    test('should fetch a user by ID', async () => {
        const res = await request(app)
            .get('/users/2')
            .expect(200);

        expect(res.body).toEqual({ id: 2, name: 'User2' });
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express supertest jest --save-dev
// 3. Save this file as app.api.test.js
// 4. Save app.js and db.js in the same directory
// 5. Run: npx jest app.api.test.js
// Note: This code won't execute here due to network restrictions.