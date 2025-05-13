// Main Learning Points: Async/Await
// Async/Await makes asynchronous code look synchronous, built on top of Promises.

// Create a Promise for an asynchronous operation
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Data fetched using Async/Await';
            resolve(data);
        }, 1000);
    });
}

// Using async/await
async function processData() {
    console.log('Start');
    const data = await fetchData();
    console.log('Async/Await Result:', data);
    console.log('End');
}

// Execute the async function
processData();

// Expected Output:
// Start
// Async/Await Result: Data fetched using Async/Await (after 1 second)
// End

// To run this in a Node.js environment:
// 1. Save this file as AsyncAwait.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node AsyncAwait.js