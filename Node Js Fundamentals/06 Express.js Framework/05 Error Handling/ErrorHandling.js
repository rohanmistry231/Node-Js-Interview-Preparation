// Main Learning Points: Error Handling
// Express provides middleware for handling errors gracefully.

// Note: Requires Express installation (npm install express)
const express = require('express');
const app = express();

// Route that throws an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            status: err.status || 500
        }
    });
});

// Normal route
app.get('/', (req, res) => {
    res.send('Home Page');
});

// Start the server
const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as ErrorHandling.js
// 4. Run: node ErrorHandling.js
// 5. Test routes:
//    - GET http://localhost:3004/ (Home Page)
//    - GET http://localhost:3004/error (Error response)
// Note: This code won't execute here due to network restrictions.