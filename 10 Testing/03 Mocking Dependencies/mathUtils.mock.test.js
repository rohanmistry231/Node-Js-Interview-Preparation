const mathUtils = require('./mathUtils');

jest.mock('./mathUtils', () => ({
    ...jest.requireActual('./mathUtils'),
    fetchData: jest.fn()
}));

describe('MathUtils with Mocking', () => {
    test('should mock fetchData', async () => {
        mathUtils.fetchData.mockResolvedValue('Mocked data');
        const result = await mathUtils.fetchData();
        expect(result).toBe('Mocked data');
        expect(mathUtils.fetchData).toHaveBeenCalled();
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Jest: npm install --save-dev jest
// 3. Save this file as mathUtils.mock.test.js
// 4. Save mathUtils.js in the same directory
// 5. Run: npx jest mathUtils.mock.test.js
// Note: This code won't execute here due to runtime restrictions.