// Main Learning Points: Handling Requests and Responses
// You can handle different HTTP methods and routes with the http module.

const http = require('http');

const server = http.createServer((req, res) => {
    // Handle different routes
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!\n');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page!\n');
    } else if (req.url === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received', body }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});

// To run this in a Node.js environment:
// 1. Save this file as RequestResponse.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node RequestResponse.js
// 4. Test routes:
//    - GET http://localhost:3001/ (Home Page)
//    - GET http://localhost:3001/about (About Page)
//    - POST http://localhost:3001/data (e.g., using curl: curl -X POST -d "test=data" http://localhost:3001/data)
// Note: This code won't execute here due to network restrictions.