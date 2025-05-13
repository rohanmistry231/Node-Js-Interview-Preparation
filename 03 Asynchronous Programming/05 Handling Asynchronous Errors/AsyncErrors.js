// Main Learning Points: Handling Asynchronous Errors
// Proper error handling is crucial in asynchronous programming to prevent crashes.

// 1. Callbacks: Error-first callback pattern
function fetchWithCallback(callback) {
    setTimeout(() => {
        const error = new Error('Failed to fetch data');
        callback(error, null);
    }, 1000);
}

console.log('Callback Error Handling:');
fetchWithCallback((err, data) => {
    if (err) {
        console.error('Callback Error:', err.message);
        return;
    }
    console.log('Callback Data:', data);
});

// 2. Promises: Using .catch()
function fetchWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 1000);
    });
}

console.log('Promise Error Handling:');
fetchWithPromise()
    .then(data => console.log('Promise Data:', data))
    .catch(err => console.error('Promise Error:', err.message));

// 3. Async/Await: Using try/catch
async function fetchWithAsyncAwait() {
    try {
        const data = await fetchWithPromise();
        console.log('Async/Await Data:', data);
    } catch (err) {
        console.error('Async/Await Error:', err.message);
    }
}

console.log('Async/Await Error Handling:');
fetchWithAsyncAwait();

// Expected Output:
// Callback Error Handling:
// Callback Error: Failed to fetch data (after 1 second)
// Promise Error Handling:
// Promise Error: Failed to fetch data (after 1 second)
// Async/Await Error Handling:
// Async/Await Error: Failed to fetch data (after 1 second)

// To run this in a Node.js environment:
// 1. Save this file as AsyncErrors.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node AsyncErrors.js