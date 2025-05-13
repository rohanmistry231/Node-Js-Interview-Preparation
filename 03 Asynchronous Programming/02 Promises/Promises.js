// Main Learning Points: Promises
// Promises provide a cleaner way to handle asynchronous operations, avoiding callback hell.

// Create a Promise for an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Data fetched using a Promise';
            resolve(data);
        }, 1000);
    });
}

// Using the Promise
console.log('Start');
fetchData()
    .then(data => {
        console.log('Promise Result:', data);
        return 'Additional data';
    })
    .then(moreData => {
        console.log('Chained Result:', moreData);
    })
    .catch(err => {
        console.error('Error:', err);
    });
console.log('End');

// Expected Output:
// Start
// End
// Promise Result: Data fetched using a Promise (after 1 second)
// Chained Result: Additional data

// To run this in a Node.js environment:
// 1. Save this file as Promises.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node Promises.js