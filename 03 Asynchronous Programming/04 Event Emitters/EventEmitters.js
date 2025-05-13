// Main Learning Points: Event Emitters
// Event Emitters allow you to create and handle custom events in Node.js.

// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('myEvent', (data) => {
    console.log('Event Triggered:', data);
});

// Emit the event
console.log('Start');
myEmitter.emit('myEvent', 'Hello from Event Emitter!');
console.log('End');

// Expected Output:
// Start
// Event Triggered: Hello from Event Emitter!
// End

// To run this in a Node.js environment:
// 1. Save this file as EventEmitters.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run: node EventEmitters.js