// Main Learning Points: File System Watchers
// File system watchers monitor files or directories for changes.

const fs = require('fs');

// Watch a file for changes
fs.watch('watch-me.txt', (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} changed! Event: ${eventType}`);
    }
});

console.log('Watching for changes to watch-me.txt...');

// To use this in a real Node.js environment:
// 1. Create a file named watch-me.txt
// 2. Save this file as FileSystemWatchers.js
// 3. Open a terminal and navigate to the file's directory
// 4. Run: node FileSystemWatchers.js
// 5. Modify watch-me.txt (e.g., edit and save it) to see the watcher in action
// Note: This code won't execute here due to file I/O restrictions.