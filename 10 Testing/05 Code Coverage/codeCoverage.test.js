const mathUtils = require('./mathUtils');

describe('Code Coverage Test', () => {
    test('should test add function', () => {
        expect(mathUtils.add(1, 2)).toBe(3);
    });

    // Note: subtract and fetchData are not tested to demonstrate coverage gaps
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Jest: npm install --save-dev jest
// 3. Save this file as codeCoverage.test.js
// 4. Save mathUtils.js in the same directory
// 5. Create a package.json script: "test:coverage": "jest --coverage"
// 6. Run: npm run test:coverage
// 7. Check the coverage report in the generated coverage/ directory
// Note: This code won't execute here due to runtime restrictions.