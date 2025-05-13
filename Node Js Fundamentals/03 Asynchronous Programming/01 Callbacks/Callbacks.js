// Main Learning Points: Callbacks
// Callbacks are functions passed as arguments to handle asynchronous operations.

// Simulate an asynchronous operation with a callback
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data fetched using a callback';
        callback(null, data); // First argument is error (null if no error), second is result
    }, 1000);
}

// Using the callback
console.log('Start');
fetchData((err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Callback Result:', data);
});
console.log('End');

// Expected Output:
// Start
// End
// Callback Result: Data fetched using a callback (after 1 second)

// To run this in a Node.js environment:
// 1. Save this file as Callbacks.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node Callbacks.js