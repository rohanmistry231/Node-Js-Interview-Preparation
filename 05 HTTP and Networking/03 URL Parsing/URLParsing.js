// Main Learning Points: URL Parsing
// The url module helps parse and manipulate URLs in Node.js.

const url = require('url');

// Example URL to parse
const myURL = 'http://example.com:8080/path?name=NodeJS&version=18#section';

// Parse the URL
const parsedURL = url.parse(myURL, true);

console.log('Parsed URL Object:', parsedURL);
console.log('Protocol:', parsedURL.protocol); // http:
console.log('Host:', parsedURL.host); // example.com:8080
console.log('Path:', parsedURL.pathname); // /path
console.log('Query Parameters:', parsedURL.query); // { name: 'NodeJS', version: '18' }
console.log('Hash:', parsedURL.hash); // #section

// To run this in a Node.js environment:
// 1. Save this file as URLParsing.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node URLParsing.js
// Note: This code won't execute here due to network restrictions.