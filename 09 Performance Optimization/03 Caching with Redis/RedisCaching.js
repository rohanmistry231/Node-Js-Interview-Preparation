// Main Learning Points: Caching with Redis
// Redis is an in-memory data store used for caching to improve performance.

// Note: Requires Redis server and redis package (npm install redis)
const express = require('express');
const redis = require('redis');
const app = express();

// Create Redis client
const client = redis.createClient({
    url: 'redis://localhost:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

// Connect to Redis
(async () => {
    await client.connect();
})();

// Mock function to simulate a slow database query
const getDataFromDB = (key) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for ${key}`), 2000);
    });
};

// Route with caching
app.get('/data/:key', async (req, res) => {
    const key = req.params.key;

    // Check Redis cache
    const cachedData = await client.get(key);
    if (cachedData) {
        console.log('Cache hit');
        return res.json({ source: 'cache', data: cachedData });
    }

    // Cache miss: fetch from "database"
    console.log('Cache miss');
    const data = await getDataFromDB(key);
    await client.setEx(key, 60, data); // Cache for 60 seconds
    res.json({ source: 'database', data });
});

app.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
});

// To run this in a Node.js environment:
// 1. Ensure Redis is running locally (redis-server)
// 2. Initialize a project: npm init -y
// 3. Install dependencies: npm install express redis
// 4. Save this file as RedisCaching.js
// 5. Run: node RedisCaching.js
// 6. Test: GET http://localhost:3002/data/test (first request slow, subsequent requests fast)
// Note: This code won't execute here due to network restrictions.