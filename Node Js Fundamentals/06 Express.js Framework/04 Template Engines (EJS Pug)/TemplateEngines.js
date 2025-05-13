// Main Learning Points: Template Engines (e.g., EJS)
// Template engines allow rendering dynamic HTML content.

// Note: Requires Express and EJS installation (npm install express ejs)
const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
// In a real setup, you'd set the views directory: app.set('views', './views');

app.get('/', (req, res) => {
    // Render an EJS template with dynamic data
    res.render('example-template', { title: 'EJS Demo', message: 'Hello from EJS!' });
});

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install Express and EJS: npm install express ejs
// 3. Create a views directory and save the EJS template as views/example-template.ejs
// 4. Save this file as TemplateEngines.js
// 5. Run: node TemplateEngines.js
// 6. Visit http://localhost:3003 in a browser
// Note: This code won't execute here due to file I/O and network restrictions.