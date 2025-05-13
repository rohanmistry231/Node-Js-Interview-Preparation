// This would typically be placed in cypress/integration/e2e.test.js

describe('End-to-End Test: Users App', () => {
    it('should visit the app and fetch a user', () => {
        cy.visit('http://localhost:3000');
        cy.request('GET', '/users/1').then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'User1');
        });
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express cypress --save-dev
// 3. Save app.js and db.js in the project directory
// 4. Start the app: node -e "require('./app').listen(3000)"
// 5. Initialize Cypress: npx cypress open
// 6. Place this file in cypress/integration/e2e.test.js
// 7. Run the test via the Cypress UI
// Note: This code won't execute here due to network and runtime restrictions.