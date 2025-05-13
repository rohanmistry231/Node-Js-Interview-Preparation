// Main Learning Points: ES Modules
// ES Modules use import/export syntax and are supported in Node.js (requires "type": "module" in package.json).

// Exporting a module (imagine this as a separate file, e.g., utils.js)
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// Importing the module (in a real setup, this would be in a separate file)
// import { multiply, divide } from './utils.js';
const utils = { multiply, divide }; // Simulated for this demo

console.log('Multiply:', utils.multiply(5, 3)); // 15
console.log('Divide:', utils.divide(6, 2)); // 3

// To run this in a Node.js environment:
// 1. Add "type": "module" to package.json
// 2. Create a file utils.js with the exports (lines 6-7)
// 3. Create a main file, e.g., ESModules.js, with the import and usage (lines 10-13)
// 4. Run: node ESModules.js