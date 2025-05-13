// Main Learning Points: Streams and Buffers
// Streams allow processing data in chunks; Buffers handle raw binary data.

const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readStream.pipe(writeStream);

// Handle events on the streams
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file');
});

writeStream.on('finish', () => {
    console.log('Finished writing file');
});

// Using Buffers
const buffer = Buffer.from('Hello, Node.js!');
console.log('Buffer:', buffer);
console.log('Buffer to string:', buffer.toString());

// To use this in a real Node.js environment:
// 1. Create a file named input.txt with some content (e.g., "Hello, Streams!")
// 2. Save this file as StreamsAndBuffers.js
// 3. Open a terminal and navigate to the file's directory
// 4. Run: node StreamsAndBuffers.js
// Note: This code won't execute here due to file I/O restrictions.