// Main Learning Points: CRUD Operations
// CRUD operations (Create, Read, Update, Delete) are fundamental database operations.

// Note: Requires Sequelize and PostgreSQL driver (npm install sequelize pg pg-hstore)
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase', {
    dialect: 'postgres'
});

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER
}, {
    tableName: 'users'
});

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('User table created');

        // Create
        const newUser = await User.create({ name: 'Bob', email: 'bob@example.com', age: 30 });
        console.log('Created:', newUser.toJSON());

        // Read
        const users = await User.findAll();
        console.log('Read:', users.map(u => u.toJSON()));

        // Update
        await User.update({ age: 31 }, { where: { email: 'bob@example.com' } });
        const updatedUser = await User.findOne({ where: { email: 'bob@example.com' } });
        console.log('Updated:', updatedUser.toJSON());

        // Delete
        await User.destroy({ where: { email: 'bob@example.com' } });
        const remainingUsers = await User.findAll();
        console.log('After Delete:', remainingUsers.map(u => u.toJSON()));
    } catch (err) {
        console.error('Error:', err.message);
    }
})();

// To run this in a Node.js environment:
// 1. Ensure PostgreSQL is running locally
// 2. Initialize a project: npm init -y
// 3. Install Sequelize and PostgreSQL driver: npm install sequelize pg pg-hstore
// 4. Update the connection string with your PostgreSQL credentials
// 5. Save this file as CRUDOperations.js
// 6. Run: node CRUDOperations.js
// Note: This code won't execute here due to database restrictions.