// Main Learning Points: CommonJS Modules
// CommonJS is the default module system in Node.js, using module.exports and require.

// Exporting a module (imagine this as a separate file, e.g., math.js)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract };

// Importing the module (in a real setup, this would be in a separate file)
// const math = require('./math.js');
const math = { add, subtract }; // Simulated for this demo

console.log('Add:', math.add(5, 3)); // 8
console.log('Subtract:', math.subtract(5, 3)); // 2

// To run this in a Node.js environment:
// 1. Create a file math.js with the exports (lines 6-8)
// 2. Create a main file, e.g., CommonJSModules.js, with the require and usage (lines 11-14)
// 3. Run: node CommonJSModules.js