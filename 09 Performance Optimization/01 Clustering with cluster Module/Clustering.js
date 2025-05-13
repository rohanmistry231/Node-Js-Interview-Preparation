// Main Learning Points: Clustering with cluster Module
// The cluster module allows Node.js to utilize multiple CPU cores by forking worker processes.

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// Check if this is the master process
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers for each CPU
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection (HTTP server in this case)
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(3000);

    console.log(`Worker ${process.pid} started`);
}

// To run this in a Node.js environment:
// 1. Save this file as Clustering.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node Clustering.js
// 4. Visit http://localhost:3000 multiple times to see different workers respond
// Note: This code won't execute here due to network restrictions.