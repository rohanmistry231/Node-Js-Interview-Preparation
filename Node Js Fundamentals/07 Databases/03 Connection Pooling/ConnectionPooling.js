// Main Learning Points: Connection Pooling
// Connection pooling manages multiple database connections efficiently.

// Note: Requires Sequelize and PostgreSQL driver (npm install sequelize pg pg-hstore)
const { Sequelize } = require('sequelize');

// Initialize Sequelize with connection pooling
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase', {
    dialect: 'postgres',
    pool: {
        max: 5, // Maximum number of connections in pool
        min: 0, // Minimum number of connections in pool
        acquire: 30000, // Maximum time (ms) to acquire a connection
        idle: 10000 // Maximum time (ms) a connection can be idle before being released
    }
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL with connection pooling');
        console.log('Pool configuration:', sequelize.config.pool);
    } catch (err) {
        console.error('Error:', err.message);
    }
})();

// To run this in a Node.js environment:
// 1. Ensure PostgreSQL is running locally
// 2. Initialize a project: npm init -y
// 3. Install Sequelize and PostgreSQL driver: npm install sequelize pg pg-hstore
// 4. Update the connection string with your PostgreSQL credentials
// 5. Save this file as ConnectionPooling.js
// 6. Run: node ConnectionPooling.js
// Note: This code won't execute here due to database restrictions.