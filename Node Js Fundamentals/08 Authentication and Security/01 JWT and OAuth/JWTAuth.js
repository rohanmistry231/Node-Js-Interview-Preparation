// Main Learning Points: JWT and OAuth
// JWT (JSON Web Token) is used for stateless authentication; OAuth is for delegated authorization.

// Note: Requires Express and jsonwebtoken (npm install express jsonwebtoken)
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Secret key for JWT signing
const JWT_SECRET = 'your_jwt_secret';

// Login route to generate a JWT
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'testuser' }; // Mock user
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected route requiring JWT
app.get('/protected', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ message: 'Protected data', user: decoded });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express jsonwebtoken
// 3. Save this file as JWTAuth.js
// 4. Run: node JWTAuth.js
// 5. Test:
//    - POST http://localhost:3000/login to get a token
//    - GET http://localhost:3000/protected with Authorization header: Bearer <token>
// Note: This code won't execute here due to network restrictions.