// Main Learning Points: require vs. import
// require is used in CommonJS; import is used in ES Modules with different syntax and behavior.

// CommonJS Example (require)
// Export (imagine this as a separate file, e.g., helper.js)
const greet = (name) => `Hello, ${name}!`;
module.exports = { greet };

// Import using require
// const helper = require('./helper.js');
const helper = { greet }; // Simulated for this demo
console.log('CommonJS (require):', helper.greet('Alice')); // Hello, Alice!

// ES Modules Example (import)
// Export (imagine this as a separate file, e.g., utils.js)
export const farewell = (name) => `Goodbye, ${name}!`;

// Import using import
// import { farewell } from './utils.js';
const utils = { farewell }; // Simulated for this demo
console.log('ES Modules (import):', utils.farewell('Bob')); // Goodbye, Bob!

// Key Differences:
// - require is synchronous; import can be asynchronous (with dynamic import)
// - CommonJS modules are loaded entirely; ES Modules support tree-shaking
// - Use "type": "module" in package.json for ES Modules

// To run this in a Node.js environment:
// 1. For CommonJS: Use the require example as is
// 2. For ES Modules: Add "type": "module" to package.json
// 3. Run: node RequireVsImport.js