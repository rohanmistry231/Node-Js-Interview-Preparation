// Main Learning Points: Input Validation and Sanitization
// Validate and sanitize user input to prevent security issues.

// Note: Requires Express and express-validator (npm install express express-validator)
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// Route with validation and sanitization
app.post('/register',
    // Validation rules
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape(),
    body('username').notEmpty().trim().escape(),
    (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Proceed with sanitized data
        res.json({
            message: 'User registered',
            data: req.body
        });
    }
);

app.listen(3004, () => {
    console.log('Server running at http://localhost:3004');
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install dependencies: npm install express express-validator
// 3. Save this file as InputValidation.js
// 4. Run: node InputValidation.js
// 5. Test:
//    - POST http://localhost:3004/register with body: {"email": "test@example.com", "password": "123456", "username": "test"}
//    - Try invalid data to see validation errors
// Note: This code won't execute here due to network restrictions.