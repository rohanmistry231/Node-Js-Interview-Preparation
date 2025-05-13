// Main Learning Points: TCP/UDP Servers (net module)
// The net module allows creating TCP servers and clients.

const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Send a message to the client
    socket.write('Hello from TCP Server!\n');

    // Handle data from the client
    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Listen on port 3002
server.listen(3002, () => {
    console.log('TCP Server running on port 3002');
});

// To run this in a Node.js environment:
// 1. Save this file as TCPServer.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node TCPServer.js
// 4. Connect to the server using a TCP client, e.g., telnet:
//    - Run: telnet localhost 3002
//    - You should see "Hello from TCP Server!" and can send messages
// Note: This code won't execute here due to network restrictions.