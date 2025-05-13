// Main Learning Points: Routing and Middleware
// Routing defines endpoints; Middleware processes requests before reaching routes.

// Note: Requires Express installation (npm install express)
const express = require('express');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/submit', (req, res) => {
    res.send('Data submitted');
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as RoutingMiddleware.js
// 4. Run: node RoutingMiddleware.js
// 5. Test routes:
//    - GET http://localhost:3001/
//    - GET http://localhost:3001/about
//    - POST http://localhost:3001/submit (e.g., using curl: curl -X POST http://localhost:3001/submit)
// Note: This code won't execute here due to network restrictions.