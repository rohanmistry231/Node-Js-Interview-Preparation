// Main Learning Points: SQL Databases with Sequelize
// Sequelize is an ORM for SQL databases like PostgreSQL, MySQL, etc.

// Note: Requires Sequelize and PostgreSQL driver (npm install sequelize pg pg-hstore)
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase', {
    dialect: 'postgres'
});

// Define a model
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users'
});

// Sync the model with the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');
        await sequelize.sync({ force: true });
        console.log('User table created');
    } catch (err) {
        console.error('Error:', err.message);
    }
})();

// To run this in a Node.js environment:
// 1. Ensure PostgreSQL is running locally
// 2. Initialize a project: npm init -y
// 3. Install Sequelize and PostgreSQL driver: npm install sequelize pg pg-hstore
// 4. Update the connection string with your PostgreSQL credentials
// 5. Save this file as SequelizeSetup.js
// 6. Run: node SequelizeSetup.js
// Note: This code won't execute here due to database restrictions.