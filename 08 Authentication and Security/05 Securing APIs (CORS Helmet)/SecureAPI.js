// Main Learning Points: Securing APIs (CORS, Helmet)
// CORS enables cross-origin requests; Helmet adds security headers.

// Note: Requires Express, CORS, and Helmet (npm install express cors helmet)
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Enable CORS for specific origins
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
}));

// Use Helmet to set security headers
app.use(helmet());

// Sample route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Secure API data' });
});

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express cors helmet
// 3. Save this file as SecureAPI.js
// 4. Run: node SecureAPI.js
// 5. Test:
//    - GET http://localhost:3003/api/data (from allowed origin)
// Note: This code won't execute here due to network restrictions.