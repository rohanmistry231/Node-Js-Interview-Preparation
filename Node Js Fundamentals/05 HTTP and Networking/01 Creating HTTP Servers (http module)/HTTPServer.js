// Main Learning Points: Creating HTTP Servers (http module)
// The http module allows you to create HTTP servers in Node.js.

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js HTTP Server!\n');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// To run this in a Node.js environment:
// 1. Save this file as HTTPServer.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node HTTPServer.js
// 4. Open a browser or use curl to visit: http://localhost:3000/
// Note: This code won't execute here due to network restrictions.