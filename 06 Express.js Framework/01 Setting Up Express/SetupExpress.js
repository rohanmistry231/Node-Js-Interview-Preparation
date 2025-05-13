// Main Learning Points: Setting Up Express
// Express is a minimal web framework for Node.js to build servers.

// Note: Requires Express installation (npm install express)
const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as SetupExpress.js
// 4. Run: node SetupExpress.js
// 5. Visit http://localhost:3000 in a browser
// Note: This code won't execute here due to network restrictions.