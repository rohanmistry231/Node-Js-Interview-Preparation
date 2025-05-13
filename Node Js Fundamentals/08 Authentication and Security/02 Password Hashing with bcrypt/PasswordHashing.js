// Main Learning Points: Password Hashing with bcrypt
// bcrypt securely hashes passwords to store them safely.

// Note: Requires bcrypt (npm install bcrypt)
const bcrypt = require('bcrypt');

// Number of salt rounds for hashing
const saltRounds = 10;

// Hash a password
const password = 'mySecurePassword';

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }
    console.log('Hashed Password:', hash);

    // Verify the password
    bcrypt.compare(password, hash, (err, result) => {
        if (err) {
            console.error('Error verifying password:', err);
            return;
        }
        console.log('Password Match:', result); // true
    });

    // Verify an incorrect password
    bcrypt.compare('wrongPassword', hash, (err, result) => {
        if (err) {
            console.error('Error verifying password:', err);
            return;
        }
        console.log('Incorrect Password Match:', result); // false
    });
});

// To run this in a Node.js environment:
// 1. Initialize a project: npm init -y
// 2. Install bcrypt: npm install bcrypt
// 3. Save this file as PasswordHashing.js
// 4. Run: node PasswordHashing.js
// Note: This code won't execute here due to runtime restrictions.