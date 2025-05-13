// Main Learning Points: PM2 for Process Management
// PM2 is a process manager for Node.js applications.

// Use the app.js file as the main application
const app = require('./app');

// PM2 is typically configured via CLI or an ecosystem file, but this comment block explains the setup.

// To use PM2 with app.js in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express
// 3. Install PM2 globally: npm install pm2 -g
// 4. Save app.js in the project directory
// 5. Start the app with PM2: pm2 start app.js --name "my-app"
// 6. Monitor the app: pm2 monit
// 7. View logs: pm2 logs
// 8. Restart on file change: pm2 start app.js --name "my-app" --watch
// 9. Stop the app: pm2 stop my-app
// 10. Delete the app: pm2 delete my-app

// Optional: Create an ecosystem.config.js for advanced configuration
// ecosystem.config.js example:
/*
module.exports = {
    apps: [{
        name: 'my-app',
        script: './app.js',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        }
    }]
};
*/

// Then run: pm2 start ecosystem.config.js

// Note: This code won't execute here as PM2 requires a Node.js runtime environment.