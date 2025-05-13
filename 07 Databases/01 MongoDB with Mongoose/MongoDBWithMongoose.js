// Main Learning Points: MongoDB with Mongoose
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

// Note: Requires Mongoose installation (npm install mongoose)
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Example usage: Create a new user
const newUser = new User({
    name: 'Alice',
    email: 'alice@example.com',
    age: 25
});

newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user:', err));

// To run this in a Node.js environment:
// 1. Ensure MongoDB is running locally (mongod)
// 2. Initialize a project: npm init -y
// 3. Install Mongoose: npm install mongoose
// 4. Save this file as MongoDBWithMongoose.js
// 5. Run: node MongoDBWithMongoose.js
// Note: This code won't execute here due to database restrictions.