// Main Learning Points: Load Balancing
// Clustering can be used for load balancing by distributing requests across workers.

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork(); // Restart a worker if it dies
    });
} else {
    // Each worker runs an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Handled by worker ${process.pid}\n`);
    }).listen(3001);

    console.log(`Worker ${process.pid} started`);
}

// Note: Node.js automatically balances HTTP requests across workers (round-robin by default on most platforms).

// To run this in a Node.js environment:
// 1. Save this file as LoadBalancing.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node LoadBalancing.js
// 4. Visit http://localhost:3001 multiple times to see requests distributed across workers
// Note: This code won't execute here due to network restrictions.