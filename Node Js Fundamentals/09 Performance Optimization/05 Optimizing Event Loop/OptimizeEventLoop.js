// Main Learning Points: Optimizing Event Loop
// Avoid blocking the event loop to keep Node.js responsive.

// Blocking (synchronous) operation - Bad practice
const blockingOperation = () => {
    const start = Date.now();
    while (Date.now() - start < 5000) {
        // Simulate CPU-intensive task for 5 seconds
    }
    return 'Done blocking';
};

// Non-blocking (asynchronous) operation - Good practice
const nonBlockingOperation = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Done non-blocking'), 5000);
    });
};

// Example usage
console.log('Start');

// Blocking: This will freeze the event loop
console.log(blockingOperation());
console.log('After blocking');

// Non-blocking: Event loop remains responsive
nonBlockingOperation().then(result => {
    console.log(result);
    console.log('After non-blocking');
});

console.log('End');

// Expected Output (in a real Node.js environment):
// Start
// Done blocking (after 5 seconds)
// After blocking
// End
// Done non-blocking (after 5 seconds)
// After non-blocking

// To run this in a Node.js environment:
// 1. Save this file as OptimizeEventLoop.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node OptimizeEventLoop.js
// Note: This code will run here but is meant to demonstrate event loop optimization.