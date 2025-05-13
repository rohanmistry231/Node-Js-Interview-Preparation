// Main Learning Points: Request and Response Objects
// req and res objects provide access to request data and response methods.

// Note: Requires Express installation (npm install express)
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to demonstrate req and res
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Access URL parameters
    const query = req.query; // Access query parameters
    res.status(200).json({
        message: 'User fetched',
        userId,
        query
    });
});

app.post('/user', (req, res) => {
    const data = req.body; // Access request body
    res.status(201).json({
        message: 'User created',
        data
    });
});

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as RequestResponseObjects.js
// 4. Run: node RequestResponseObjects.js
// 5. Test routes:
//    - GET http://localhost:3002/user/123?name=John
//    - POST http://localhost:3002/user (e.g., using curl: curl -X POST -H "Content-Type: application/json" -d '{"name":"John"}' http://localhost:3002/user)
// Note: This code won't execute here due to network restrictions.