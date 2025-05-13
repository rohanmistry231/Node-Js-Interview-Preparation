// Main Learning Points: Session Management
// express-session manages user sessions with cookies.

// Note: Requires Express and express-session (npm install express express-session)
const express = require('express');
const session = require('express-session');
const app = express();

// Configure session middleware
app.use(session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}));

// Route to set session data
app.get('/set-session', (req, res) => {
    req.session.user = { id: 1, username: 'testuser' };
    res.send('Session set');
});

// Route to get session data
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).send('No session found');
    }
});

// Route to destroy session (logout)
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.send('Logged out');
    });
});

app.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express express-session
// 3. Save this file as SessionManagement.js
// 4. Run: node SessionManagement.js
// 5. Test:
//    - GET http://localhost:3001/set-session
//    - GET http://localhost:3001/get-session
//    - GET http://localhost:3001/logout
// Note: This code won't execute here due to network restrictions.