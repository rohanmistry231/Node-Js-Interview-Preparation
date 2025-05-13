# MyPackage

A simple NPM package that capitalizes strings.

## Installation
```bash
npm install my-package
```

## Usage
```javascript
const { capitalize } = require('my-package');
console.log(capitalize('hello')); // Output: Hello
```

## Publishing Instructions
To create and publish this package to NPM, follow these steps:

1. **Initialize the Package**
   - Create a new directory for the package: `mkdir my-package`
   - Navigate to the directory: `cd my-package`
   - Initialize a new NPM package: `npm init -y`
   - Update the `package.json` to include:
     ```json
     {
       "name": "my-package",
       "version": "1.0.0",
       "main": "MyPackage.js",
       "author": "Your Name",
       "license": "MIT"
     }
     ```

2. **Add the Code**
   - Save the `MyPackage.js` code in this directory as `MyPackage.js`

3. **Publish to NPM**
   - Log in to NPM: `npm login`
   - Publish the package: `npm publish --access public`
   - Note: Ensure the package name is unique, or use a scoped name (e.g., `@yourusername/my-package`)

4. **Install and Use**
   - Install the package in another project: `npm install my-package`
   - Use it as shown in the Usage section above

This README provides a basic setup for publishing an NPM package.