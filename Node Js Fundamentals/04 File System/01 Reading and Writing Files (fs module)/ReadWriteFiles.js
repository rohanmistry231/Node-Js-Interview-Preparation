// Main Learning Points: Reading and Writing Files (fs module)
// The fs module provides methods to interact with the file system in Node.js.

const fs = require('fs');

// Writing to a file asynchronously
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');

    // Reading from a file asynchronously
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

// Expected Output (in a real Node.js environment):
// File written successfully
// File content: Hello, Node.js!

// To run this in a Node.js environment:
// 1. Save this file as ReadWriteFiles.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node ReadWriteFiles.js
// Note: This code won't execute here due to file I/O restrictions.