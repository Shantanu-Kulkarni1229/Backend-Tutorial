
# Backend Development Notes

**Date**: October 13, 2024  
**Time**: Started leaning backend today and wrote a small code in both Node.js and Bun. Here's a detailed explanation of the code and concepts learned.

---

## **Introduction**

### Technologies:
1. **Node.js**: A JavaScript runtime built on Chrome's V8 engine, used for building fast and scalable network applications.
2. **Bun**: A new JavaScript runtime with an emphasis on speed, bundling, and minimalism.
3. **Postman**: A tool used for API testing that allows developers to send HTTP requests, examine responses, and automate tests for RESTful APIs.

---

### **Node.js Code**

```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Helloo ice tea");
    } else if (req.url === '/ice-tea') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Helloo ice tea its hot!!");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
});
```

### **Explanation of Node.js Code:**

1. **`const http = require('http');`**  
   This line imports the `http` module, which allows us to create a web server in Node.js.

2. **`const hostname = '127.0.0.1';`**  
   `hostname` is set to `'127.0.0.1'`, which represents the local machine (localhost).

3. **`const port = 3001;`**  
   We define the port number as `3001`, which is where our server will listen for incoming requests.

4. **`const server = http.createServer((req, res) => {...});`**  
   This creates a server using the `http` module. It takes a callback function with two arguments: `req` (the request object) and `res` (the response object).

5. **`if(req.url === '/'){...}`**  
   This checks if the incoming request's URL is `'/'` (root). If it is, the following block of code executes.

6. **`res.statusCode = 200;`**  
   Sets the HTTP status code to `200`, indicating a successful request.

7. **`res.setHeader('Content-Type', 'text/plain');`**  
   Specifies that the response content will be plain text.

8. **`res.end("Helloo ice tea");`**  
   Ends the response and sends the message `"Helloo ice tea"` back to the client.

9. **`else if (req.url === '/ice-tea') {...}`**  
   This checks if the request URL is `/ice-tea`. If true, a new response is sent with a different message.

10. **`server.listen(port, hostname, () => {...});`**  
    The server starts listening on the specified port and hostname, and the callback function logs a message when the server is successfully running.

---

### **Bun Code**

```javascript
import {serve} from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);
        if(url.pathname === '/') {
            return new Response('Hello Ice Tea', {status: 200});
        } else if(url.pathname === '/ice-tea') {
            return new Response('Hello Ice Tea is the best', {status: 200});
        } else {
            return new Response('Not Found', {status: 404});
        }
    },
    port: 3001,
    hostname: '127.0.0.1'
});
```

### **Explanation of Bun Code:**

1. **`import {serve} from 'bun';`**  
   This imports the `serve` function from the Bun runtime, which is used to start an HTTP server.

2. **`serve({fetch(request) {...}, port: 3001, hostname: '127.0.0.1'});`**  
   Starts an HTTP server using the `serve` function. The `fetch` method handles incoming requests, and the server listens on `port 3001` at `hostname 127.0.0.1`.

3. **`const url = new URL(request.url);`**  
   Parses the request URL so that we can handle different routes (`/`, `/ice-tea`).

4. **`if(url.pathname === '/') {...}`**  
   If the requested path is `/`, it responds with `"Hello Ice Tea"`.

5. **`return new Response('Hello Ice Tea', {status: 200});`**  
   Sends a plain text response with HTTP status code `200`, indicating success.

6. **`else if(url.pathname === '/ice-tea') {...}`**  
   If the requested path is `/ice-tea`, it sends a different message: `"Hello Ice Tea is the best"`.

7. **`return new Response('Not Found', {status: 404});`**  
   For any other path, it returns a `404` response, indicating the resource was not found.

---

### **Postman Overview**

**Postman** is a powerful tool used by developers to:
- **Test APIs**: You can send different types of HTTP requests (GET, POST, PUT, DELETE) to test how an API responds.
- **View Responses**: Postman provides an interface to view the API response, including headers, status codes, and response body.
- **Automation**: It allows you to write test cases and automate API testing, making it easy to catch issues early.
- **Collections**: You can organize your requests into collections to keep track of different API endpoints and their parameters.
  
**Common Use Case in Backend Development**:  
When building an API, you can use Postman to test your routes by sending requests and validating responses without needing to write a frontend interface.

---

### **Differences Between Node.js and Bun**

| **Aspect**                | **Node.js**                                              | **Bun**                                               |
|---------------------------|----------------------------------------------------------|-------------------------------------------------------|
| **Performance**            | Efficient, but can sometimes be slower due to its V8 engine. | Known for being faster in certain cases due to its optimized JavaScript engine. |
| **Bundling**               | Node.js requires external tools like Webpack for bundling. | Bun has built-in bundling for JavaScript and CSS. |
| **Module Resolution**      | Uses CommonJS and ESM (with `import/export`).            | Supports both CommonJS and ESM, but with faster resolution. |
| **Built-in Features**      | Node.js requires external libraries for testing, bundling, etc. | Bun comes with many built-in features like testing and bundling out of the box. |
| **Community & Ecosystem**  | Node.js has a massive ecosystem with thousands of libraries. | Bun is newer, so its ecosystem is still growing, but it's designed to be highly compatible with Node.js libraries. |
| **Memory Usage**           | Can be memory-intensive depending on the use case.       | Optimized to use less memory and provide better performance. |

---

### **Conclusion**

Both **Node.js** and **Bun** are excellent choices for building backend services, but they serve slightly different purposes. Node.js is established, with a large ecosystem and stable performance, while Bun is a new, fast alternative with built-in tools for developers aiming for simplicity and speed.

**Postman** is an essential tool for testing and automating API workflows, and learning how to use it can significantly improve your backend development workflow.

---

### **References for Future Reading**

1. [Node.js Documentation](https://nodejs.org/en/docs/)
2. [Bun Documentation](https://bun.sh/docs)
3. [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)

---

This concludes the backend learning session on October 13, 2024.
