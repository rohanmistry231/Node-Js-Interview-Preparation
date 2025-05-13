// Main Learning Points: Environment Variables
// Environment variables securely manage configuration settings.

// Note: Requires dotenv (npm install dotenv)
require('dotenv').config();
const express = require('express');
const app = express();

// Access environment variables
const API_KEY = process.env.API_KEY || 'default-api-key';
const PORT = process.env.PORT || 3000;

// Sample route using environment variable
app.get('/', (req, res) => {
    res.json({ message: `API Key: ${API_KEY}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express dotenv
// 3. Create a .env file with: API_KEY=your-api-key
// 4. Save this file as envConfig.js
// 5. Run: node envConfig.js
// 6. Visit: http://localhost:3000
// Note: This code won't execute here due to network restrictions.