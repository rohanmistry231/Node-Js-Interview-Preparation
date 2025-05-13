// Main Learning Points: Global Objects (process, buffer, console)
// Node.js provides global objects for interacting with the environment, buffers, and logging.

// Using process to get environment information
console.log('Current Directory:', process.cwd());
console.log('Environment Variables:', process.env);

// Using buffer to handle binary data
const buffer = Buffer.from('Hello, Node.js!');
console.log('Buffer:', buffer);
console.log('Buffer to String:', buffer.toString());

// Using console for logging
console.log('This is a log message');
console.error('This is an error message');
console.warn('This is a warning message');

// To run this file in a Node.js environment:
// 1. Save this file as GlobalObjects.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node GlobalObjects.js