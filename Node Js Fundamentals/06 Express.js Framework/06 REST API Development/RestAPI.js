// Main Learning Points: REST API Development
// Express is commonly used to build RESTful APIs.

// Note: Requires Express installation (npm install express)
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory array to simulate a database
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET: Retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET: Retrieve a user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// POST: Create a new user
app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.status(201).json(user);
});

// PUT: Update a user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.name = req.body.name;
    res.json(user);
});

// DELETE: Delete a user
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express: npm install express
// 3. Save this file as RestAPI.js
// 4. Run: node RestAPI.js
// 5. Test routes:
//    - GET http://localhost:3005/api/users
//    - GET http://localhost:3005/api/users/1
//    - POST http://localhost:3005/api/users (e.g., curl -X POST -H "Content-Type: application/json" -d '{"name":"Charlie"}' http://localhost:3005/api/users)
//    - PUT http://localhost:3005/api/users/1 (e.g., curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alicia"}' http://localhost:3005/api/users/1)
//    - DELETE http://localhost:3005/api/users/1
// Note: This code won't execute here due to network restrictions.