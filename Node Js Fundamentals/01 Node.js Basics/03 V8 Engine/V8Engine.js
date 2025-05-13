// Main Learning Points: V8 Engine
// The V8 engine is Google's JavaScript engine that powers Node.js, compiling JavaScript to machine code.

// Perform a simple computation to demonstrate V8's efficiency
const start = Date.now();
let sum = 0;
for (let i = 0; i < 1e7; i++) {
    sum += i;
}
const end = Date.now();
console.log('Sum:', sum);
console.log('Time taken (ms):', end - start);

// Log V8 version (available via process.versions)
console.log('V8 Version:', process.versions.v8);

// To run this file in a Node.js environment:
// 1. Save this file as V8Engine.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node V8Engine.js