const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.get('/users/:id', async (req, res) => {
    const user = await db.getUser(parseInt(req.params.id));
    res.json(user);
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.status(201).json({ message: 'User created', user });
});

module.exports = app;

// To run this app in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as app.js
// 4. Create a start script: node -e "require('./app').listen(3000, () => console.log('Server running'))"
// Note: This app is meant for testing and won't run here due to network restrictions.