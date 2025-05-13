// Main Learning Points: Event Loop and Non-Blocking I/O
// Node.js uses an event loop to handle asynchronous operations, enabling non-blocking I/O.

// Demonstrate non-blocking behavior with setTimeout
console.log('Start');

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

setImmediate(() => {
    console.log('This runs in the next event loop iteration');
});

console.log('End');

// In a real Node.js environment, the output order would be:
// 1. Start
// 2. End
// 3. This runs in the next event loop iteration
// 4. This runs after 2 seconds

// To run this file in a Node.js environment:
// 1. Save this file as EventLoop.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node EventLoop.js