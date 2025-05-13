// Main Learning Points: Rate Limiting
// Rate limiting prevents abuse by restricting the number of requests a client can make.

// Note: Requires Express and express-rate-limit (npm install express express-rate-limit)
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Configure rate limiter: 5 requests per minute
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many requests, please try again later.'
});

app.use(limiter);

// Sample route
app.get('/api', (req, res) => {
    res.json({ message: 'Rate-limited API' });
});

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express express-rate-limit
// 3. Save this file as RateLimiting.js
// 4. Run: node RateLimiting.js
// 5. Test: Make more than 5 requests to http://localhost:3003/api within a minute
// Note: This code won't execute here due to network restrictions.