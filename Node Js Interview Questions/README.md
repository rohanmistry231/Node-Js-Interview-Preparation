# Node.js Interview Questions for AI/ML Roles

This README provides **170 Node.js interview questions** tailored for AI/ML students preparing for technical interviews, focusing on Node.js’s role in building scalable back-end services for AI/ML applications (e.g., APIs for model inference, data processing pipelines, and real-time prediction servers). The questions are categorized into **Node.js Basics**, **Modules**, **File System**, **HTTP Servers**, **Middleware**, **Databases**, **Performance Optimization**, **Testing**, and **Integration with AI/ML**. Each category is divided into **Basic**, **Intermediate**, and **Advanced** levels, with practical code snippets using Node.js and JavaScript. This resource supports candidates aiming for roles that combine back-end development with AI/ML workflows, such as creating APIs for machine learning models or handling large-scale data processing.

## Node.js Basics

### Basic
1. **What is Node.js, and why is it used in back-end development?**  
   Node.js is a runtime for executing JavaScript outside the browser, using the V8 engine.  
   ```javascript
   console.log("Hello, Node.js!");
   ```

2. **What is the event loop in Node.js?**  
   Handles asynchronous operations via a single-threaded loop.  
   ```javascript
   setTimeout(() => console.log("Delayed"), 1000);
   console.log("Immediate");
   ```

3. **How do you run a Node.js script?**  
   Uses the `node` command.  
   ```javascript
   // script.js
   console.log("Running Node.js script");
   ```
   ```bash
   node script.js
   ```

4. **What is the difference between synchronous and asynchronous code in Node.js?**  
   Sync blocks execution, async does not.  
   ```javascript
   // Sync
   console.log("Sync");
   // Async
   setImmediate(() => console.log("Async"));
   ```

5. **How do you handle errors in Node.js?**  
   Uses try-catch for sync, callbacks for async.  
   ```javascript
   try {
       throw new Error("Sync error");
   } catch (err) {
       console.error(err.message);
   }
   ```

6. **How do you visualize Node.js execution time?**  
   Plots execution durations.  
   ```python
   import matplotlib.pyplot as plt
   def plot_execution_times(times):
       plt.plot(times, 'o-', label='Execution Time (ms)')
       plt.title('Node.js Execution Performance')
       plt.savefig('execution_times.png')
   ```

#### Intermediate
7. **Write a function to handle asynchronous operations.**  
   Uses callbacks.  
   ```javascript
   function asyncTask(callback) {
       setTimeout(() => callback(null, "Done"), 1000);
   }
   asyncTask((err, result) => console.log(result));
   ```

8. **How do you use Promises in Node.js?**  
   Handles async with resolve/reject.  
   ```javascript
   const promise = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000));
   promise.then(result => console.log(result));
   ```

9. **Write a function to chain asynchronous tasks.**  
   Uses async/await.  
   ```javascript
   async function chainTasks() {
       const result1 = await new Promise(r => setTimeout(() => r("Task 1"), 1000));
       const result2 = await new Promise(r => setTimeout(() => r("Task 2"), 1000));
       console.log(result1, result2);
   }
   chainTasks();
   ```

10. **How do you manage environment variables in Node.js?**  
    Uses `process.env`.  
    ```javascript
    console.log(process.env.NODE_ENV || "development");
    ```

11. **Write a function to log Node.js process details.**  
    Accesses process info.  
    ```javascript
    function logProcess() {
        console.log(`PID: ${process.pid}, Version: ${process.version}`);
    }
    logProcess();
    ```

12. **How do you exit a Node.js process?**  
    Uses `process.exit`.  
    ```javascript
    console.log("Exiting...");
    process.exit(0);
    ```

#### Advanced
13. **Write a function to handle uncaught exceptions.**  
    Uses `process.on`.  
    ```javascript
    process.on("uncaughtException", (err) => console.error("Uncaught:", err.message));
    throw new Error("Test error");
    ```

14. **How do you implement a worker thread in Node.js?**  
    Uses `worker_threads`.  
    ```javascript
    const { Worker, isMainThread, parentPort } = require("worker_threads");
    if (isMainThread) {
        const worker = new Worker(__filename);
        worker.on("message", msg => console.log(msg));
    } else {
        parentPort.postMessage("Hello from worker");
    }
    ```

15. **Write a function to monitor Node.js memory usage.**  
    Logs memory stats.  
    ```javascript
    function monitorMemory() {
        const used = process.memoryUsage();
        console.log(`Heap: ${used.heapUsed / 1024 / 1024} MB`);
    }
    monitorMemory();
    ```

16. **How do you handle async errors in Node.js?**  
    Uses try-catch with async/await.  
    ```javascript
    async function handleAsyncError() {
        try {
            throw new Error("Async error");
        } catch (err) {
            console.error(err.message);
        }
    }
    handleAsyncError();
    ```

17. **Write a function to benchmark Node.js performance.**  
    Measures execution time.  
    ```javascript
    function benchmark(fn) {
        const start = performance.now();
        fn();
        console.log(`Time: ${performance.now() - start}ms`);
    }
    benchmark(() => Array(1000).fill(0).map(Math.sqrt));
    ```

18. **How do you use Node.js clusters for scalability?**  
    Distributes workload across CPUs.  
    ```javascript
    const cluster = require("cluster");
    const http = require("http");
    if (cluster.isMaster) {
        cluster.fork();
    } else {
        http.createServer((req, res) => res.end("Worker")).listen(3000);
    }
    ```

## Modules

### Basic
19. **What are Node.js modules?**  
   Reusable code units.  
   ```javascript
   const myModule = {
       sayHello: () => console.log("Hello")
   };
   module.exports = myModule;
   ```

20. **How do you create a CommonJS module?**  
   Uses `module.exports`.  
   ```javascript
   // math.js
   module.exports = {
       add: (a, b) => a + b
   };
   ```

21. **How do you import modules in Node.js?**  
   Uses `require`.  
   ```javascript
   const math = require("./math");
   console.log(math.add(2, 3));
   ```

22. **What is ES Modules in Node.js?**  
   Uses `import/export` syntax.  
   ```javascript
   // math.mjs
   export const add = (a, b) => a + b;
   ```

23. **How do you use ES Modules?**  
   Imports with `import`.  
   ```javascript
   import { add } from "./math.mjs";
   console.log(add(2, 3));
   ```

24. **How do you visualize module dependencies?**  
   Plots dependency graph (mock).  
   ```python
   import matplotlib.pyplot as plt
   def plot_dependencies(modules):
       plt.bar(modules, range(len(modules)), label='Dependencies')
       plt.title('Module Dependencies')
       plt.savefig('module_dependencies.png')
   ```

#### Intermediate
25. **Write a function to create a reusable module.**  
   Exports utility functions.  
   ```javascript
   // utils.js
   module.exports = {
       square: n => n * n
   };
   ```

26. **How do you handle module caching in Node.js?**  
   Modules are cached after first load.  
   ```javascript
   const mod = require("./utils");
   console.log(mod.square(4)); // Cached
   ```

27. **Write a function to dynamically import modules.**  
   Uses dynamic `import()`.  
   ```javascript
   async function loadModule() {
       const { add } = await import("./math.mjs");
       console.log(add(2, 3));
   }
   loadModule();
   ```

28. **How do you create a module with default exports?**  
   Uses `export default`.  
   ```javascript
   // logger.mjs
   export default function log(msg) {
       console.log(msg);
   }
   ```

29. **Write a function to manage module dependencies.**  
   Resolves dependency order.  
   ```javascript
   function loadDependencies(mods) {
       mods.forEach(mod => require(mod));
       console.log("Dependencies loaded");
   }
   loadDependencies(["./math", "./utils"]);
   ```

30. **How do you use third-party modules?**  
   Installs via npm and imports.  
   ```javascript
   const lodash = require("lodash");
   console.log(lodash.sum([1, 2, 3]));
   ```

#### Advanced
31. **Write a function to create a private module scope.**  
   Uses IIFE for encapsulation.  
   ```javascript
   const myModule = (() => {
       const privateVar = "secret";
       return {
           getSecret: () => privateVar
       };
   })();
   console.log(myModule.getSecret());
   ```

32. **How do you optimize module loading?**  
   Minimizes dependencies.  
   ```javascript
   const { add } = require("./math"); // Selective import
   console.log(add(2, 3));
   ```

33. **Write a function to audit module performance.**  
   Measures load time.  
   ```javascript
   function auditModule(mod) {
       const start = performance.now();
       require(mod);
       console.log(`Load time: ${performance.now() - start}ms`);
   }
   auditModule("./math");
   ```

34. **How do you handle circular dependencies?**  
   Refactors to avoid cycles.  
   ```javascript
   // a.js
   module.exports = { fn: () => require("./b").fn() };
   // b.js
   module.exports = { fn: () => "B" };
   ```

35. **Write a function to mock modules for testing.**  
   Overrides module exports.  
   ```javascript
   jest.mock("./math", () => ({
       add: jest.fn().mockReturnValue(5)
   }));
   const math = require("./math");
   console.log(math.add(2, 3)); // 5
   ```

36. **How do you use Node.js native addons?**  
   Integrates C++ modules (mock).  
   ```javascript
   const addon = require("./build/Release/addon");
   console.log(addon.hello()); // Mock
   ```

## File System

### Basic
37. **How do you read a file in Node.js?**  
   Uses `fs.readFile`.  
   ```javascript
   const fs = require("fs");
   fs.readFile("data.txt", "utf8", (err, data) => console.log(data));
   ```

38. **How do you write to a file in Node.js?**  
   Uses `fs.writeFile`.  
   ```javascript
   const fs = require("fs");
   fs.writeFile("output.txt", "Hello", err => console.log(err ? "Error" : "Written"));
   ```

39. **How do you check if a file exists?**  
   Uses `fs.access`.  
   ```javascript
   const fs = require("fs");
   fs.access("data.txt", fs.constants.F_OK, err => console.log(err ? "Missing" : "Exists"));
   ```

40. **How do you create a directory?**  
   Uses `fs.mkdir`.  
   ```javascript
   const fs = require("fs");
   fs.mkdir("newDir", err => console.log(err ? "Error" : "Created"));
   ```

41. **How do you delete a file?**  
   Uses `fs.unlink`.  
   ```javascript
   const fs = require("fs");
   fs.unlink("output.txt", err => console.log(err ? "Error" : "Deleted"));
   ```

42. **How do you visualize file system operations?**  
   Plots operation times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_fs_operations(times):
       plt.plot(times, 'o-', label='FS Operation Time (ms)')
       plt.title('File System Performance')
       plt.savefig('fs_operations.png')
   ```

#### Intermediate
43. **Write a function to read files synchronously.**  
   Uses `fs.readFileSync`.  
   ```javascript
   const fs = require("fs");
   function readSync(path) {
       try {
           return fs.readFileSync(path, "utf8");
       } catch (err) {
           console.error(err);
       }
   }
   console.log(readSync("data.txt"));
   ```

44. **How do you stream large files in Node.js?**  
   Uses `fs.createReadStream`.  
   ```javascript
   const fs = require("fs");
   const stream = fs.createReadStream("large.txt");
   stream.on("data", chunk => console.log(chunk.toString()));
   ```

45. **Write a function to copy files.**  
   Uses `fs.copyFile`.  
   ```javascript
   const fs = require("fs");
   function copyFile(src, dest) {
       fs.copyFile(src, dest, err => console.log(err ? "Error" : "Copied"));
   }
   copyFile("source.txt", "dest.txt");
   ```

46. **How do you watch for file changes?**  
   Uses `fs.watch`.  
   ```javascript
   const fs = require("fs");
   fs.watch("data.txt", (event, filename) => console.log(`${filename} changed`));
   ```

47. **Write a function to list directory contents.**  
   Uses `fs.readdir`.  
   ```javascript
   const fs = require("fs");
   function listDir(path) {
       fs.readdir(path, (err, files) => console.log(files));
   }
   listDir(".");
   ```

48. **How do you handle file permissions?**  
   Uses `fs.chmod`.  
   ```javascript
   const fs = require("fs");
   fs.chmod("data.txt", 0o644, err => console.log(err ? "Error" : "Permissions set"));
   ```

#### Advanced
49. **Write a function to recursively read directories.**  
   Uses `fs.readdir` recursively.  
   ```javascript
   const fs = require("fs").promises;
   async function readDirRecursive(path) {
       const entries = await fs.readdir(path, { withFileTypes: true });
       for (const entry of entries) {
           const fullPath = `${path}/${entry.name}`;
           console.log(fullPath);
           if (entry.isDirectory()) await readDirRecursive(fullPath);
       }
   }
   readDirRecursive(".");
   ```

50. **How do you optimize file system operations?**  
   Batches operations.  
   ```javascript
   const fs = require("fs").promises;
   async function batchWrite(files) {
       await Promise.all(
           files.map(([path, content]) => fs.writeFile(path, content))
       );
       console.log("Batch complete");
   }
   batchWrite([["a.txt", "A"], ["b.txt", "B"]]);
   ```

51. **Write a function to monitor file system performance.**  
   Logs operation time.  
   ```javascript
   const fs = require("fs");
   function monitorFS(path) {
       const start = performance.now();
       fs.readFile(path, () => console.log(`Read time: ${performance.now() - start}ms`));
   }
   monitorFS("data.txt");
   ```

52. **How do you handle large file uploads?**  
   Uses streams.  
   ```javascript
   const fs = require("fs");
   const http = require("http");
   http.createServer((req, res) => {
       req.pipe(fs.createWriteStream("upload.txt"));
       req.on("end", () => res.end("Uploaded"));
   }).listen(3000);
   ```

53. **Write a function to compress files.**  
   Uses `zlib`.  
   ```javascript
   const fs = require("fs");
   const zlib = require("zlib");
   fs.createReadStream("data.txt")
       .pipe(zlib.createGzip())
       .pipe(fs.createWriteStream("data.txt.gz"));
   ```

54. **How do you secure file system access?**  
   Restricts permissions.  
   ```javascript
   const fs = require("fs");
   fs.chmod("sensitive.txt", 0o600, err => console.log(err ? "Error" : "Secured"));
   ```

## HTTP Servers

### Basic
55. **How do you create an HTTP server in Node.js?**  
   Uses `http.createServer`.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => res.end("Hello")).listen(3000);
   ```

56. **How do you handle HTTP GET requests?**  
   Checks `req.method`.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       if (req.method === "GET") res.end("GET request");
   }).listen(3000);
   ```

57. **How do you serve static files?**  
   Reads and sends files.  
   ```javascript
   const http = require("http");
   const fs = require("fs");
   http.createServer((req, res) => {
       fs.readFile("index.html", (err, data) => res.end(data));
   }).listen(3000);
   ```

58. **How do you parse URL parameters?**  
   Uses `url.parse`.  
   ```javascript
   const http = require("http");
   const url = require("url");
   http.createServer((req, res) => {
       const params = url.parse(req.url, true).query;
       res.end(JSON.stringify(params));
   }).listen(3000);
   ```

59. **How do you set HTTP headers?**  
   Uses `res.setHeader`.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       res.setHeader("Content-Type", "application/json");
       res.end('{"message":"Hello"}');
   }).listen(3000);
   ```

60. **How do you visualize HTTP request metrics?**  
   Plots request times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_request_metrics(times):
       plt.plot(times, 'o-', label='Request Time (ms)')
       plt.title('HTTP Request Performance')
       plt.savefig('request_metrics.png')
   ```

#### Intermediate
61. **Write a function to handle POST requests.**  
   Parses request body.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       if (req.method === "POST") {
           let body = "";
           req.on("data", chunk => (body += chunk));
           req.on("end", () => res.end(body));
       }
   }).listen(3000);
   ```

62. **How do you create a REST API in Node.js?**  
   Defines endpoints.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       if (req.url === "/api" && req.method === "GET") {
           res.end('{"data":"API"}');
       }
   }).listen(3000);
   ```

63. **Write a function to route HTTP requests.**  
   Uses URL patterns.  
   ```javascript
   const http = require("http");
   function route(req, res) {
       const routes = {
           "/home": () => "Home",
           "/about": () => "About"
       };
       res.end(routes[req.url] ? routes[req.url]() : "Not Found");
   }
   http.createServer(route).listen(3000);
   ```

64. **How do you handle CORS in Node.js?**  
   Sets CORS headers.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       res.setHeader("Access-Control-Allow-Origin", "*");
       res.end("CORS enabled");
   }).listen(3000);
   ```

65. **Write a function to stream HTTP responses.**  
   Uses `res.write`.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       res.write("Streaming...");
       setTimeout(() => res.end("Done"), 1000);
   }).listen(3000);
   ```

66. **How do you handle query parameters in APIs?**  
   Parses query strings.  
   ```javascript
   const http = require("http");
   const url = require("url");
   http.createServer((req, res) => {
       const { id } = url.parse(req.url, true).query;
       res.end(`ID: ${id}`);
   }).listen(3000);
   ```

#### Advanced
67. **Write a function to implement rate limiting.**  
   Restricts request frequency.  
   ```javascript
   const http = require("http");
   const requests = new Map();
   http.createServer((req, res) => {
       const ip = req.socket.remoteAddress;
       const count = (requests.get(ip) || 0) + 1;
       requests.set(ip, count);
       if (count > 5) res.end("Rate limit exceeded");
       else res.end("OK");
   }).listen(3000);
   ```

68. **How do you secure HTTP servers?**  
   Uses HTTPS.  
   ```javascript
   const https = require("https");
   const fs = require("fs");
   const options = {
       key: fs.readFileSync("key.pem"),
       cert: fs.readFileSync("cert.pem")
   };
   https.createServer(options, (req, res) => res.end("Secure")).listen(3000);
   ```

69. **Write a function to monitor API performance.**  
   Logs response time.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       const start = performance.now();
       res.on("finish", () => console.log(`Response time: ${performance.now() - start}ms`));
       res.end("OK");
   }).listen(3000);
   ```

70. **How do you implement WebSockets in Node.js?**  
   Uses `ws` module.  
   ```javascript
   const WebSocket = require("ws");
   const wss = new WebSocket.Server({ port: 3000 });
   wss.on("connection", ws => ws.send("Connected"));
   ```

71. **Write a function to handle API versioning.**  
   Uses URL prefixes.  
   ```javascript
   const http = require("http");
   http.createServer((req, res) => {
       if (req.url.startsWith("/v1")) res.end("Version 1");
       else if (req.url.startsWith("/v2")) res.end("Version 2");
       else res.end("No version");
   }).listen(3000);
   ```

72. **How do you optimize HTTP server performance?**  
   Uses connection pooling.  
   ```javascript
   const http = require("http");
   const agent = new http.Agent({ maxSockets: 10 });
   http.createServer((req, res) => res.end("Optimized")).listen(3000, { agent });
   ```

## Middleware

### Basic
73. **What is middleware in Node.js?**  
   Functions that process requests.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       console.log("Middleware");
       next();
   });
   app.listen(3000);
   ```

74. **How do you create custom middleware?**  
   Defines request handlers.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       req.custom = "Custom";
       next();
   });
   app.get("/", (req, res) => res.send(req.custom));
   app.listen(3000);
   ```

75. **How do you handle errors in middleware?**  
   Uses error-handling middleware.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((err, req, res, next) => {
       res.status(500).send("Error");
   });
   app.listen(3000);
   ```

76. **How do you log requests in middleware?**  
   Logs request details.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       console.log(`${req.method} ${req.url}`);
       next();
   });
   app.listen(3000);
   ```

77. **How do you use third-party middleware?**  
   Integrates packages like `morgan`.  
   ```javascript
   const express = require("express");
   const morgan = require("morgan");
   const app = express();
   app.use(morgan("dev"));
   app.listen(3000);
   ```

78. **How do you visualize middleware performance?**  
   Plots execution times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_middleware_times(times):
       plt.plot(times, 'o-', label='Middleware Time (ms)')
       plt.title('Middleware Performance')
       plt.savefig('middleware_times.png')
   ```

#### Intermediate
79. **Write a function to authenticate requests in middleware.**  
   Checks tokens.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       if (req.headers.authorization === "Bearer token") next();
       else res.status(401).send("Unauthorized");
   });
   app.get("/", (req, res) => res.send("Authenticated"));
   app.listen(3000);
   ```

80. **How do you implement rate-limiting middleware?**  
   Limits requests per IP.  
   ```javascript
   const express = require("express");
   const app = express();
   const requests = new Map();
   app.use((req, res, next) => {
       const ip = req.ip;
       const count = (requests.get(ip) || 0) + 1;
       requests.set(ip, count);
       if (count > 5) res.status(429).send("Too Many Requests");
       else next();
   });
   app.listen(3000);
   ```

81. **Write a function to parse JSON in middleware.**  
   Handles JSON payloads.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use(express.json());
   app.post("/", (req, res) => res.send(req.body));
   app.listen(3000);
   ```

82. **How do you chain middleware?**  
   Executes in sequence.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       req.data = "Step 1";
       next();
   });
   app.use((req, res, next) => {
       req.data += " Step 2";
       next();
   });
   app.get("/", (req, res) => res.send(req.data));
   app.listen(3000);
   ```

83. **Write a function to compress responses.**  
   Uses `compression` middleware.  
   ```javascript
   const express = require("express");
   const compression = require("compression");
   const app = express();
   app.use(compression());
   app.get("/", (req, res) => res.send("Compressed"));
   app.listen(3000);
   ```

84. **How do you handle middleware for specific routes?**  
   Applies to route subsets.  
   ```javascript
   const express = require("express");
   const app = express();
   const admin = (req, res, next) => {
       req.admin = true;
       next();
   };
   app.get("/admin", admin, (req, res) => res.send("Admin"));
   app.listen(3000);
   ```

#### Advanced
85. **Write a function to implement custom middleware for AI APIs.**  
   Validates ML inputs.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       if (req.body.data && Array.isArray(req.body.data)) next();
       else res.status(400).send("Invalid ML input");
   });
   app.post("/predict", (req, res) => res.send("Valid"));
   app.listen(3000);
   ```

86. **How do you optimize middleware performance?**  
   Minimizes overhead.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       next(); // Skip heavy logic
   });
   app.listen(3000);
   ```

87. **Write a function to monitor middleware execution.**  
   Logs execution time.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       const start = performance.now();
       res.on("finish", () => console.log(`Middleware time: ${performance.now() - start}ms`));
       next();
   });
   app.listen(3000);
   ```

88. **How do you implement middleware for WebSocket connections?**  
   Validates WebSocket requests.  
   ```javascript
   const WebSocket = require("ws");
   const wss = new WebSocket.Server({ port: 3000 });
   wss.on("connection", (ws, req) => {
       if (req.headers["x-token"]) ws.send("Authenticated");
       else ws.close();
   });
   ```

89. **Write a function to audit middleware security.**  
   Checks for vulnerabilities.  
   ```javascript
   const express = require("express");
   const app = express();
   function auditMiddleware(req, res, next) {
       if (!req.headers["x-api-key"]) {
           console.log("Missing API key");
           res.status(401).send("Unauthorized");
       } else {
           next();
       }
   }
   app.use(auditMiddleware);
   app.get("/", (req, res) => res.send("Secure"));
   app.listen(3000);
   ```

90. **How do you test middleware?**  
   Mocks requests.  
   ```javascript
   const express = require("express");
   const app = express();
   app.use((req, res, next) => {
       req.test = "Tested";
       next();
   });
   const mockReq = { headers: {} };
   const mockRes = {};
   const mockNext = () => console.log(mockReq.test); // Tested
   app._router.handle(mockReq, mockRes, mockNext);
   ```

## Databases

### Basic
91. **How do you connect to a database in Node.js?**  
   Uses MongoDB driver (mock).  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function connectDB() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       console.log("Connected");
       await client.close();
   }
   connectDB();
   ```

92. **How do you query a database?**  
   Uses MongoDB find.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function queryDB() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const db = client.db("test");
       const data = await db.collection("users").findOne({ name: "John" });
       console.log(data);
       await client.close();
   }
   queryDB();
   ```

93. **How do you insert data into a database?**  
   Uses MongoDB insert.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function insertDB() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const db = client.db("test");
       await db.collection("users").insertOne({ name: "John" });
       console.log("Inserted");
       await client.close();
   }
   insertDB();
   ```

94. **How do you update database records?**  
   Uses MongoDB update.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function updateDB() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const db = client.db("test");
       await db.collection("users").updateOne({ name: "John" }, { $set: { age: 30 } });
       console.log("Updated");
       await client.close();
   }
   updateDB();
   ```

95. **How do you delete database records?**  
   Uses MongoDB delete.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function deleteDB() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const db = client.db("test");
       await db.collection("users").deleteOne({ name: "John" });
       console.log("Deleted");
       await client.close();
   }
   deleteDB();
   ```

96. **How do you visualize database query performance?**  
   Plots query times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_query_performance(times):
       plt.plot(times, 'o-', label='Query Time (ms)')
       plt.title('Database Query Performance')
       plt.savefig('query_performance.png')
   ```

#### Intermediate
97. **Write a function to handle database transactions.**  
   Uses MongoDB sessions.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function transaction() {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const session = client.startSession();
       try {
           await session.withTransaction(async () => {
               const db = client.db("test");
               await db.collection("users").insertOne({ name: "John" }, { session });
           });
           console.log("Transaction complete");
       } finally {
           await session.endSession();
           await client.close();
       }
   }
   transaction();
   ```

98. **How do you use an ORM in Node.js?**  
   Uses Mongoose (mock).  
   ```javascript
   const mongoose = require("mongoose");
   mongoose.connect("mongodb://localhost:27017/test");
   const User = mongoose.model("User", new mongoose.Schema({ name: String }));
   async function saveUser() {
       await new User({ name: "John" }).save();
       console.log("Saved");
   }
   saveUser();
   ```

99. **Write a function to paginate database results.**  
   Limits and skips records.  
   ```javascript
   const { MongoClient } = require("mongodb");
   async function paginate(page, limit) {
       const client = new MongoClient("mongodb://localhost:27017");
       await client.connect();
       const db = client.db("test");
       const data = await db.collection("users")
           .find()
           .skip((page - 1) * limit)
           .limit(limit)
           .toArray();
       console.log(data);
       await client.close();
   }
   paginate(1, 10);
   ```

100. **How do you index database collections?**  
    Creates indexes for performance.  
    ```javascript
    const { MongoClient } = require("mongodb");
    async function createIndex() {
        const client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        const db = client.db("test");
        await db.collection("users").createIndex({ name: 1 });
        console.log("Index created");
        await client.close();
    }
    createIndex();
    ```

101. **Write a function to aggregate database data.**  
     Uses MongoDB aggregation.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function aggregate() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         const data = await db.collection("users").aggregate([
             { $group: { _id: "$age", count: { $sum: 1 } } }
         ]).toArray();
         console.log(data);
         await client.close();
     }
     aggregate();
     ```

102. **How do you handle database connection pooling?**  
     Reuses connections.  
     ```javascript
     const { MongoClient } = require("mongodb");
     const client = new MongoClient("mongodb://localhost:27017", { maxPoolSize: 10 });
     async function query() {
         await client.connect();
         const db = client.db("test");
         console.log(await db.collection("users").findOne());
         await client.close();
     }
     query();
     ```

#### Advanced
103. **Write a function to optimize database queries.**  
     Uses selective fields.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function optimizeQuery() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         const data = await db.collection("users").findOne(
             { name: "John" },
             { projection: { name: 1 } }
         );
         console.log(data);
         await client.close();
     }
     optimizeQuery();
     ```

104. **How do you implement database migrations?**  
     Uses migration scripts.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function migrate() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         await db.collection("users").updateMany({}, { $set: { status: "active" } });
         console.log("Migrated");
         await client.close();
     }
     migrate();
     ```

105. **Write a function to monitor database performance.**  
     Logs query time.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function monitorDB() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         const start = performance.now();
         await db.collection("users").find().toArray();
         console.log(`Query time: ${performance.now() - start}ms`);
         await client.close();
     }
     monitorDB();
     ```

106. **How do you secure database connections?**  
     Uses SSL and authentication.  
     ```javascript
     const { MongoClient } = require("mongodb");
     const client = new MongoClient("mongodb://localhost:27017", {
         ssl: true,
         auth: { username: "user", password: "pass" }
     });
     async function secureConnect() {
         await client.connect();
         console.log("Secure connection");
         await client.close();
     }
     secureConnect();
     ```

107. **Write a function to cache database results.**  
     Uses in-memory cache.  
     ```javascript
     const { MongoClient } = require("mongodb");
     const cache = new Map();
     async function cachedQuery(key) {
         if (cache.has(key)) return cache.get(key);
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         const data = await db.collection("users").findOne({ name: key });
         cache.set(key, data);
         await client.close();
         return data;
     }
     cachedQuery("John").then(console.log);
     ```

108. **How do you handle large-scale database operations?**  
     Uses batch processing.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function batchProcess() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         const bulk = db.collection("users").initializeUnorderedBulkOp();
         bulk.insert({ name: "John" });
         bulk.insert({ name: "Jane" });
         await bulk.execute();
         console.log("Batch processed");
         await client.close();
     }
     batchProcess();
     ```

## Performance Optimization

### Basic
109. **What is performance optimization in Node.js?**  
     Improves speed and resource usage.  
     ```javascript
     console.log("Optimized Node.js");
     ```

110. **How do you profile Node.js applications?**  
     Uses `--prof` flag (mock).  
     ```javascript
     function heavyTask() {
         for (let i = 0; i < 1e6; i++) Math.sqrt(i);
     }
     heavyTask();
     ```

111. **How do you optimize CPU-bound tasks?**  
     Offloads to workers.  
     ```javascript
     const { Worker, isMainThread } = require("worker_threads");
     if (isMainThread) {
         new Worker(__filename);
     } else {
         for (let i = 0; i < 1e6; i++) Math.sqrt(i);
         console.log("Done");
     }
     ```

112. **How do you reduce memory usage?**  
     Avoids large objects.  
     ```javascript
     function optimizeMemory() {
         const smallArray = new Array(100).fill(0);
         console.log("Small array created");
     }
     optimizeMemory();
     ```

113. **How do you handle async performance?**  
     Uses Promise.all.  
     ```javascript
     async function asyncOptimize() {
         await Promise.all([
             new Promise(r => setTimeout(r, 1000)),
             new Promise(r => setTimeout(r, 1000))
         ]);
         console.log("Parallel tasks complete");
     }
     asyncOptimize();
     ```

114. **How do you visualize performance metrics?**  
     Plots CPU usage.  
     ```python
     import matplotlib.pyplot as plt
     def plot_cpu_usage(usage):
         plt.plot(usage, 'o-', label='CPU Usage (%)')
         plt.title('Node.js CPU Performance')
         plt.savefig('cpu_usage.png')
     ```

#### Intermediate
115. **Write a function to optimize HTTP request handling.**  
     Reuses connections.  
     ```javascript
     const http = require("http");
     const agent = new http.Agent({ keepAlive: true });
     http.createServer((req, res) => res.end("Optimized")).listen(3000, { agent });
     ```

116. **How do you use caching for performance?**  
     Stores frequent results.  
     ```javascript
     const cache = new Map();
     function cachedFn(key, fn) {
         if (cache.has(key)) return cache.get(key);
         const result = fn();
         cache.set(key, result);
         return result;
     }
     console.log(cachedFn("test", () => "Result"));
     ```

117. **Write a function to batch database operations.**  
     Reduces query overhead.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function batchOps() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         await db.collection("users").insertMany([{ name: "A" }, { name: "B" }]);
         console.log("Batch complete");
         await client.close();
     }
     batchOps();
     ```

118. **How do you optimize file streaming?**  
     Uses efficient streams.  
     ```javascript
     const fs = require("fs");
     fs.createReadStream("large.txt")
         .pipe(fs.createWriteStream("copy.txt"))
         .on("finish", () => console.log("Streamed"));
     ```

119. **Write a function to monitor memory leaks.**  
     Tracks memory usage.  
     ```javascript
     function monitorLeaks() {
         setInterval(() => {
             console.log(`Heap: ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
         }, 1000);
     }
     monitorLeaks();
     ```

120. **How do you scale Node.js applications?**  
     Uses clustering.  
     ```javascript
     const cluster = require("cluster");
     const http = require("http");
     if (cluster.isMaster) {
         cluster.fork();
     } else {
         http.createServer((req, res) => res.end("Scaled")).listen(3000);
     }
     ```

#### Advanced
121. **Write a function to profile async performance.**  
     Measures async task time.  
     ```javascript
     async function profileAsync() {
         const start = performance.now();
         await new Promise(r => setTimeout(r, 1000));
         console.log(`Async time: ${performance.now() - start}ms`);
     }
     profileAsync();
     ```

122. **How do you implement load balancing?**  
     Distributes requests.  
     ```javascript
     const cluster = require("cluster");
     const http = require("http");
     const numCPUs = 2;
     if (cluster.isMaster) {
         for (let i = 0; i < numCPUs; i++) cluster.fork();
     } else {
         http.createServer((req, res) => res.end("Balanced")).listen(3000);
     }
     ```

123. **Write a function to optimize database indexing.**  
     Creates efficient indexes.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function optimizeIndex() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         await db.collection("users").createIndex({ name: 1, age: 1 });
         console.log("Compound index created");
         await client.close();
     }
     optimizeIndex();
     ```

124. **How do you use Redis for caching?**  
     Stores data in memory.  
     ```javascript
     const redis = require("redis");
     const client = redis.createClient();
     async function cacheData(key, value) {
         await client.connect();
         await client.set(key, value);
         console.log(await client.get(key));
         await client.disconnect();
     }
     cacheData("test", "Cached");
     ```

125. **Write a function to audit performance bottlenecks.**  
     Logs slow operations.  
     ```javascript
     function auditBottleneck(fn) {
         const start = performance.now();
         fn();
         const time = performance.now() - start;
         if (time > 100) console.log(`Slow operation: ${time}ms`);
     }
     auditBottleneck(() => Array(1e6).fill(0).map(Math.sqrt));
     ```

126. **How do you optimize Node.js for AI workloads?**  
     Offloads ML tasks.  
     ```javascript
     const { Worker } = require("worker_threads");
     if (require("worker_threads").isMainThread) {
         new Worker(__filename);
     } else {
         // Mock ML computation
         console.log("ML task complete");
     }
     ```

## Testing

### Basic
127. **What is testing in Node.js?**  
     Verifies code functionality.  
     ```javascript
     function add(a, b) {
         return a + b;
     }
     console.log(add(2, 3) === 5 ? "Pass" : "Fail");
     ```

128. **How do you write unit tests in Node.js?**  
     Uses Jest (mock).  
     ```javascript
     function sum(a, b) {
         return a + b;
     }
     const test = sum(2, 3) === 5 ? "Pass" : "Fail";
     console.log(test);
     ```

129. **How do you use assertions in Node.js?**  
     Uses `assert`.  
     ```javascript
     const assert = require("assert");
     assert.strictEqual(2 + 3, 5, "Sum failed");
     console.log("Test passed");
     ```

130. **How do you test asynchronous functions?**  
     Handles promises.  
     ```javascript
     async function asyncFn() {
         return "Done";
     }
     asyncFn().then(result => console.log(result === "Done" ? "Pass" : "Fail"));
     ```

131. **How do you mock dependencies in tests?**  
     Overrides modules.  
     ```javascript
     const mock = { add: () => 5 };
     console.log(mock.add() === 5 ? "Pass" : "Fail");
     ```

132. **How do you visualize test coverage?**  
     Plots coverage metrics.  
     ```python
     import matplotlib.pyplot as plt
     def plot_test_coverage(coverage):
         plt.bar(["Functions", "Lines"], coverage, label="Coverage (%)")
         plt.title("Test Coverage")
         plt.savefig("test_coverage.png")
     ```

#### Intermediate
133. **Write a function to test API endpoints.**  
     Mocks HTTP requests.  
     ```javascript
     const http = require("http");
     http.createServer((req, res) => res.end("OK")).listen(3000);
     const testApi = () => {
         http.get("http://localhost:3000", res => {
             let data = "";
             res.on("data", chunk => (data += chunk));
             res.on("end", () => console.log(data === "OK" ? "Pass" : "Fail"));
         });
     };
     testApi();
     ```

134. **How do you test middleware?**  
     Simulates requests.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use((req, res, next) => {
         req.test = "Tested";
         next();
     });
     const mockReq = {};
     const mockRes = {};
     const mockNext = () => console.log(mockReq.test === "Tested" ? "Pass" : "Fail");
     app._router.handle(mockReq, mockRes, mockNext);
     ```

135. **Write a function to test database operations.**  
     Verifies queries.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function testDB() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const db = client.db("test");
         await db.collection("users").insertOne({ name: "Test" });
         const data = await db.collection("users").findOne({ name: "Test" });
         console.log(data ? "Pass" : "Fail");
         await client.close();
     }
     testDB();
     ```

136. **How do you use test-driven development (TDD)?**  
     Writes tests first.  
     ```javascript
     // Test
     const assert = require("assert");
     assert.strictEqual(multiply(2, 3), 6);
     // Implementation
     function multiply(a, b) {
         return a * b;
     }
     console.log("TDD passed");
     ```

137. **Write a function to mock API responses.**  
     Simulates server responses.  
     ```javascript
     const mockResponse = () => ({ data: "Mock" });
     console.log(mockResponse().data === "Mock" ? "Pass" : "Fail");
     ```

138. **How do you test error handling?**  
     Simulates errors.  
     ```javascript
     function riskyFn() {
         throw new Error("Test error");
     }
     try {
         riskyFn();
         console.log("Fail");
     } catch {
         console.log("Pass");
     }
     ```

#### Advanced
139. **Write a function to test performance-critical code.**  
     Measures execution time.  
     ```javascript
     function testPerformance(fn) {
         const start = performance.now();
         fn();
         const time = performance.now() - start;
         console.log(time < 100 ? "Pass" : "Fail");
     }
     testPerformance(() => Array(1e5).fill(0).map(Math.sqrt));
     ```

140. **How do you test WebSocket servers?**  
     Simulates client connections.  
     ```javascript
     const WebSocket = require("ws");
     const wss = new WebSocket.Server({ port: 3000 });
     wss.on("connection", ws => ws.send("Test"));
     const ws = new WebSocket("ws://localhost:3000");
     ws.on("message", msg => console.log(msg.toString() === "Test" ? "Pass" : "Fail"));
     ```

141. **Write a function to automate end-to-end tests.**  
     Simulates user flows.  
     ```javascript
     const http = require("http");
     http.createServer((req, res) => res.end("E2E")).listen(3000);
     const testE2E = () => {
         http.get("http://localhost:3000", res => {
             let data = "";
             res.on("data", chunk => (data += chunk));
             res.on("end", () => console.log(data === "E2E" ? "Pass" : "Fail"));
         });
     };
     testE2E();
     ```

142. **How do you test database transactions?**  
     Verifies atomicity.  
     ```javascript
     const { MongoClient } = require("mongodb");
     async function testTransaction() {
         const client = new MongoClient("mongodb://localhost:27017");
         await client.connect();
         const session = client.startSession();
         try {
             await session.withTransaction(async () => {
                 const db = client.db("test");
                 await db.collection("users").insertOne({ name: "Test" }, { session });
             });
             console.log("Pass");
         } catch {
             console.log("Fail");
         } finally {
             await session.endSession();
             await client.close();
         }
     }
     testTransaction();
     ```

143. **Write a function to monitor test performance.**  
     Logs test times.  
     ```javascript
     function monitorTest(fn) {
         const start = performance.now();
         fn();
         console.log(`Test time: ${performance.now() - start}ms`);
     }
     monitorTest(() => console.log("Test"));
     ```

144. **How do you implement continuous integration for tests?**  
     Mocks CI pipeline.  
     ```javascript
     function runCI() {
         const tests = [() => true, () => true];
         const results = tests.map(test => test());
         console.log(results.every(r => r) ? "CI Pass" : "CI Fail");
     }
     runCI();
     ```

## Integration with AI/ML

### Basic
145. **How do you integrate Node.js with AI/ML models?**  
     Serves model predictions.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", (req, res) => res.json({ prediction: "Positive" }));
     app.listen(3000);
     ```

146. **How do you create an API for ML predictions?**  
     Handles prediction requests.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use(express.json());
     app.post("/predict", (req, res) => res.json({ result: req.body.data }));
     app.listen(3000);
     ```

147. **How do you handle ML model inputs?**  
     Validates input data.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use(express.json());
     app.post("/predict", (req, res) => {
         if (Array.isArray(req.body.data)) res.json({ valid: true });
         else res.status(400).json({ error: "Invalid input" });
     });
     app.listen(3000);
     ```

148. **How do you serve ML model outputs?**  
     Returns predictions.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/results", (req, res) => res.json({ output: Math.random() }));
     app.listen(3000);
     ```

149. **How do you log ML model performance?**  
     Tracks prediction time.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", (req, res) => {
         const start = performance.now();
         res.json({ prediction: "Done" });
         console.log(`Prediction time: ${performance.now() - start}ms`);
     });
     app.listen(3000);
     ```

150. **How do you visualize ML model metrics?**  
     Plots accuracy.  
     ```python
     import matplotlib.pyplot as plt
     def plot_model_metrics(accuracy):
         plt.plot(accuracy, 'o-', label='Accuracy')
         plt.title('ML Model Performance')
         plt.savefig('model_metrics.png')
     ```

#### Intermediate
151. **Write a function to integrate TensorFlow.js in Node.js.**  
     Runs ML models (mock).  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", (req, res) => {
         // Mock TensorFlow.js
         res.json({ prediction: Math.random() });
     });
     app.listen(3000);
     ```

152. **How do you handle large ML datasets in Node.js?**  
     Streams data.  
     ```javascript
     const fs = require("fs");
     const stream = fs.createReadStream("dataset.csv");
     stream.on("data", chunk => console.log("Processing:", chunk.toString()));
     ```

153. **Write a function to cache ML predictions.**  
     Stores results in Redis.  
     ```javascript
     const redis = require("redis");
     const client = redis.createClient();
     async function cachePrediction(key, value) {
         await client.connect();
         await client.set(key, JSON.stringify(value));
         console.log(await client.get(key));
         await client.disconnect();
     }
     cachePrediction("pred1", { result: 0.9 });
     ```

154. **How do you implement real-time ML predictions?**  
     Uses WebSockets.  
     ```javascript
     const WebSocket = require("ws");
     const wss = new WebSocket.Server({ port: 3000 });
     wss.on("connection", ws => {
         setInterval(() => ws.send(JSON.stringify({ prediction: Math.random() })), 1000);
     });
     ```

155. **Write a function to validate ML model inputs.**  
     Checks data format.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use(express.json());
     app.post("/predict", (req, res) => {
         const { data } = req.body;
         if (data && typeof data === "object") res.json({ valid: true });
         else res.status(400).json({ error: "Invalid" });
     });
     app.listen(3000);
     ```

156. **How do you optimize ML API performance?**  
     Uses async processing.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", async (req, res) => {
         const result = await new Promise(r => setTimeout(() => r(Math.random()), 100));
         res.json({ prediction: result });
     });
     app.listen(3000);
     ```

#### Advanced
157. **Write a function to integrate ONNX models in Node.js.**  
     Runs ONNX models (mock).  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/onnx", (req, res) => {
         // Mock ONNX inference
         res.json({ output: Math.random() });
     });
     app.listen(3000);
     ```

158. **How do you handle streaming ML predictions?**  
     Streams results.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/stream", (req, res) => {
         res.write("data: " + Math.random() + "\n\n");
         setTimeout(() => res.end(), 1000);
     });
     app.listen(3000);
     ```

159. **Write a function to monitor ML model performance.**  
     Logs inference time.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", (req, res) => {
         const start = performance.now();
         res.json({ prediction: Math.random() });
         console.log(`Inference time: ${performance.now() - start}ms`);
     });
     app.listen(3000);
     ```

160. **How do you secure ML model APIs?**  
     Uses JWT authentication.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use((req, res, next) => {
         if (req.headers.authorization === "Bearer token") next();
         else res.status(401).json({ error: "Unauthorized" });
     });
     app.get("/predict", (req, res) => res.json({ prediction: "Secure" }));
     app.listen(3000);
     ```

161. **Write a function to handle model versioning.**  
     Switches model versions.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict/:version", (req, res) => {
         res.json({ version: req.params.version, prediction: Math.random() });
     });
     app.listen(3000);
     ```

162. **How do you deploy Node.js ML apps?**  
     Mocks deployment.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/status", (req, res) => res.json({ status: "Deployed" }));
     app.listen(3000, () => console.log("Deployed"));
     ```

163. **Write a function to visualize ML predictions.**  
     Generates prediction charts.  
     ```javascript
     const fs = require("fs");
     const predictions = [0.1, 0.5, 0.9];
     fs.writeFileSync("predictions.json", JSON.stringify(predictions));
     console.log("Predictions saved");
     ```

164. **How do you handle model errors in Node.js?**  
     Catches inference errors.  
     ```javascript
     const express = require("express");
     const app = express();
     app.get("/predict", (req, res) => {
         try {
             throw new Error("Model error");
         } catch (err) {
             res.status(500).json({ error: err.message });
         }
     });
     app.listen(3000);
     ```

165. **Write a function to audit ML model APIs.**  
     Logs API usage.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use((req, res, next) => {
         console.log(`API call: ${req.method} ${req.url}`);
         next();
     });
     app.get("/predict", (req, res) => res.json({ prediction: "Audited" }));
     app.listen(3000);
     ```

166. **How do you optimize ML model inference?**  
     Uses workers.  
     ```javascript
     const { Worker } = require("worker_threads");
     if (require("worker_threads").isMainThread) {
         new Worker(__filename);
     } else {
         console.log("Inference complete");
     }
     ```

167. **Write a function to manage ML model inputs.**  
     Validates and processes inputs.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use(express.json());
     app.post("/predict", (req, res) => {
         const { data } = req.body;
         if (Array.isArray(data)) res.json({ processed: data.length });
         else res.status(400).json({ error: "Invalid input" });
     });
     app.listen(3000);
     ```

168. **How do you implement interactive ML APIs?**  
     Handles dynamic inputs.  
     ```javascript
     const express = require("express");
     const app = express();
     app.use(express.json());
     app.post("/interactive", (req, res) => {
         res.json({ output: req.body.input || "No input" });
     });
     app.listen(3000);
     ```

169. **Write a function to visualize model training progress.**  
     Logs training metrics.  
     ```javascript
     const fs = require("fs");
     const metrics = { epoch: 1, accuracy: 0.95 };
     fs.writeFileSync("training.json", JSON.stringify(metrics));
     console.log("Training logged");
     ```

170. **How do you scale ML APIs in Node.js?**  
     Uses clustering and load balancing.  
     ```javascript
     const cluster = require("cluster");
     const express = require("express");
     if (cluster.isMaster) {
         cluster.fork();
     } else {
         const app = express();
         app.get("/predict", (req, res) => res.json({ prediction: "Scaled" }));
         app.listen(3000);
     }
     ```