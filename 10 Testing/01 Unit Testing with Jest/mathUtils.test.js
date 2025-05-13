const mathUtils = require('./mathUtils');

describe('MathUtils', () => {
    test('should add two numbers correctly', () => {
        expect(mathUtils.add(2, 3)).toBe(5);
        expect(mathUtils.add(-1, 1)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(mathUtils.subtract(5, 3)).toBe(2);
        expect(mathUtils.subtract(1, -1)).toBe(2);
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Jest: npm install --save-dev jest
// 3. Save this file as mathUtils.test.js
// 4. Save the mathUtils.js file in the same directory
// 5. Run: npx jest mathUtils.test.js
// Note: This code won't execute here due to runtime restrictions.