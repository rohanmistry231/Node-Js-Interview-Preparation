// Main Learning Points: Synchronous vs. Asynchronous Methods
// Synchronous methods block the event loop; asynchronous methods do not.

const fs = require('fs');

// Synchronous file writing and reading
console.log('Start Sync');
try {
    fs.writeFileSync('sync-example.txt', 'Hello, Synchronous!');
    console.log('File written synchronously');
    const data = fs.readFileSync('sync-example.txt', 'utf8');
    console.log('File content (sync):', data);
} catch (err) {
    console.error('Sync Error:', err.message);
}
console.log('End Sync');

// Asynchronous file writing and reading
console.log('Start Async');
fs.writeFile('async-example.txt', 'Hello, Asynchronous!', (err) => {
    if (err) {
        console.error('Async Error:', err.message);
        return;
    }
    console.log('File written asynchronously');
    fs.readFile('async-example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Async Error:', err.message);
            return;
        }
        console.log('File content (async):', data);
    });
});
console.log('End Async');

// Expected Output (in a real Node.js environment):
// Start Sync
// File written synchronously
// File content (sync): Hello, Synchronous!
// End Sync
// Start Async
// End Async
// File written asynchronously
// File content (async): Hello, Asynchronous!

// To run this in a Node.js environment:
// 1. Save this file as SyncVsAsync.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node SyncVsAsync.js
// Note: This code won't execute here due to file I/O restrictions.