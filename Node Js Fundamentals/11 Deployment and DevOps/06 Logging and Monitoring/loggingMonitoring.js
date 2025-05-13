// Main Learning Points: Logging and Monitoring
// Logging tracks application events; monitoring tracks performance.

// Note: Requires winston and express-status-monitor (npm install winston express-status-monitor)
const express = require('express');
const winston = require('winston');
const statusMonitor = require('express-status-monitor');
const app = express();

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console()
    ]
});

// Use express-status-monitor for monitoring
app.use(statusMonitor());

// Sample route with logging
app.get('/', (req, res) => {
    logger.info('Home route accessed', { ip: req.ip });
    res.json({ message: 'Hello from Node.js app!' });
});

// Error handling with logging
app.get('/error', (req, res) => {
    logger.error('Error route accessed', { ip: req.ip });
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
    logger.info('Server started on port 3000');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express winston express-status-monitor
// 3. Save this file as loggingMonitoring.js
// 4. Run: node loggingMonitoring.js
// 5. Visit: http://localhost:3000 to see the app
// 6. Visit: http://localhost:3000/status to see the monitoring dashboard
// 7. Check error.log and combined.log for logs
// Note: This code won't execute here due to network restrictions.