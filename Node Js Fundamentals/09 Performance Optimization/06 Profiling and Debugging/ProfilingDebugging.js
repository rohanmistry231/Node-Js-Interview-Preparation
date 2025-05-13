// Main Learning Points: Profiling and Debugging
// Node.js provides tools for profiling and debugging performance issues.

// Sample function to profile
function computeSomething() {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
        sum += i;
    }
    return sum;
}

// Run the function multiple times
console.log('Starting computation...');
for (let i = 0; i < 5; i++) {
    console.log(`Result ${i + 1}:`, computeSomething());
}
console.log('Computation finished');

// To profile this in a Node.js environment:
// 1. Save this file as ProfilingDebugging.js
// 2. Open a terminal and navigate to the file's directory
// 3. Run with profiling: node --prof ProfilingDebugging.js
// 4. This generates a tick file (e.g., isolate-0x...-v8.log)
// 5. Process the tick file: node --prof-process isolate-0x...-v8.log > profile.txt
// 6. Inspect profile.txt for performance insights

// To debug this in a Node.js environment:
// 1. Run with inspector: node --inspect ProfilingDebugging.js
// 2. Open Chrome and navigate to chrome://inspect
// 3. Click "Open dedicated DevTools for Node"
// 4. Set breakpoints, watch variables, and step through the code

// Note: This code won't execute profiling/debugging here due to runtime restrictions.