// Main Learning Points: Middleware for Authentication
// Middleware can protect routes by verifying authentication.

// Note: Requires Express and jsonwebtoken (npm install express jsonwebtoken)
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const JWT_SECRET = 'your_jwt_secret';

// Authentication middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Login route to generate a token
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'testuser' };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected route using middleware
app.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome to the dashboard', user: req.user });
});

app.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express jsonwebtoken
// 3. Save this file as AuthMiddleware.js
// 4. Run: node AuthMiddleware.js
// 5. Test:
//    - POST http://localhost:3002/login to get a token
//    - GET http://localhost:3002/dashboard with Authorization header: Bearer <token>
// Note: This code won't execute here due to network restrictions.