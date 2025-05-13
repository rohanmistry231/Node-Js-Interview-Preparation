// Main Learning Points: WebSockets with ws
// The ws library enables WebSocket communication in Node.js.

// Note: Requires the ws package (npm install ws)
const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 3003 });

wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket');

    // Send a message to the client
    ws.send('Hello from WebSocket Server!');

    // Handle messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        ws.send(`Server received: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected from WebSocket');
    });
});

console.log('WebSocket Server running on ws://localhost:3003');

// To run this in a Node.js environment:
// 1. Install the ws package: npm install ws
// 2. Save this file as WebSocketServer.js
// 3. Open a terminal and navigate to the file's directory
// 4. Run: node WebSocketServer.js
// 5. Connect using a WebSocket client, e.g., a browser script:
//    const ws = new WebSocket('ws://localhost:3003');
//    ws.onmessage = (event) => console.log(event.data);
// Note: This code won't execute here due to network restrictions.