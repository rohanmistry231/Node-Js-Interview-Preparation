// Main Learning Points: Creating an NPM Package
// This file represents the main code for a simple NPM package.

// A simple utility function to publish as an NPM package
const capitalize = (str) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Export the function
module.exports = { capitalize };

// This file would be part of an NPM package. See the README.md for publishing instructions.