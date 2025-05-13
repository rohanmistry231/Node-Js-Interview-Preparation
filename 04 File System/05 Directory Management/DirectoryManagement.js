// Main Learning Points: Directory Management
// The fs module provides methods to create, read, and delete directories.

const fs = require('fs');

// Create a directory
fs.mkdir('my-directory', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err.message);
        return;
    }
    console.log('Directory created successfully');

    // Read the contents of a directory
    fs.readdir('my-directory', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err.message);
            return;
        }
        console.log('Directory contents:', files);

        // Remove the directory
        fs.rmdir('my-directory', (err) => {
            if (err) {
                console.error('Error removing directory:', err.message);
                return;
            }
            console.log('Directory removed successfully');
        });
    });
});

// Expected Output (in a real Node.js environment):
// Directory created successfully
// Directory contents: []
// Directory removed successfully

// To run this in a Node.js environment:
// 1. Save this file as DirectoryManagement.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node DirectoryManagement.js
// Note: This code won't execute here due to file I/O restrictions.