
# Backend Development Notes

**Date**: October 21, 2024  
**Lecture**: 96  
**Topics Covered**:  
- **Express.js** (Core Practice)  
- **Hono** (Just for Info)  
- **Elysia.js** (Just for Info)  
- **Mongoose** (Core Practice)  
- **Prisma** (Just for Info)  
- **Drizzle** (Just for Info)  
- **Nodemon**

---

## **Express.js - Core Practice**
**Express.js** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies routing and middleware handling, making backend development in Node.js much easier.

- **Features**:
  - Easy routing for handling HTTP methods like GET, POST, PUT, DELETE.
  - Middleware for managing HTTP requests, responses, and handling errors.
  - RESTful API support for creating scalable and maintainable services.

---

## **Hono - Just for Info**
**Hono** is an ultra-fast, minimalist web framework for Node.js, designed for performance and simplicity. It's perfect for building small APIs and microservices that need to handle a large number of requests.

---

## **Elysia.js - Just for Info**
**Elysia.js** is another minimal, lightweight framework for Node.js that focuses on ease of use and speed. It’s designed to provide a simple API for building modern web applications with low overhead.

---

## **Mongoose - Core Practice**
**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution for modeling your application data, offering built-in data validation, casting, and middleware features.

- **Features**:
  - Schema-based model definition.
  - Validation and middleware.
  - Easy-to-use methods for querying and interacting with MongoDB databases.

---

## **Prisma - Just for Info**
**Prisma** is a next-generation ORM (Object-Relational Mapping) that supports TypeScript and JavaScript. It simplifies database management by providing an intuitive API for interacting with relational databases.

---

## **Drizzle - Just for Info**
**Drizzle** is a lightweight ORM for TypeScript and JavaScript, providing an easy way to interact with SQL databases without the need for complex configuration.

---

## **Nodemon**
**Nodemon** is a utility tool that helps develop Node.js-based applications by automatically restarting the server whenever file changes are detected. It streamlines the development process by eliminating the need to manually restart the server after each change.

---

## **HTTP Methods Explained**
- **GET**: Retrieve data from the server. Used for reading resources without modifying them.
- **POST**: Send new data to the server. Used for creating new resources.
- **PUT**: Update existing data on the server.
- **DELETE**: Remove data from the server.

---

## **Express.js Code Example**

```javascript
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// Add a new tea
app.post('/teas', (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// Get all teas
app.get('/teas', (req, res) => {
  res.status(200).send(teaData);
});

// Get a tea by id
app.get('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send('Tea not found');
  }
  res.status(200).send(tea);
});

// Update a tea
app.put('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send('Tea not found');
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// Delete a tea
app.delete('/teas/:id', (req, res) => {
  const index = teaData.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Tea not found');
  }
  teaData.splice(index, 1);
  res.status(203).send('Deleted');
});

// Other Routes
app.get('/', (req, res) => {
  res.send('Hello From Shantanu and his tea!!');
});

app.get('/ice-tea', (req, res) => {
  res.send('What would you prefer to drink?');
});

app.get('/twitter', (req, res) => {
  res.send('shantanukulkarni.com!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### **Explanation of Code**:
1. **Import Express**:  
   `import express from 'express';`  
   Imports the `express` module to create a web server.

2. **Create App**:  
   `const app = express();`  
   Creates an instance of an Express application.

3. **Define Port**:  
   `const port = 3000;`  
   Sets the server to listen on port `3000`.

4. **Middleware**:  
   `app.use(express.json());`  
   Adds middleware to handle JSON request bodies.

5. **In-Memory Data**:  
   `let teaData = [];`  
   Stores tea data in an array (in-memory).

6. **POST (Create Tea)**:  
   `app.post('/teas', (req, res) => {...});`  
   Handles adding a new tea to the `teaData` array, using the `POST` method.

7. **GET (Get All Teas)**:  
   `app.get('/teas', (req, res) => {...});`  
   Sends back all the teas in `teaData`.

8. **GET (Get Tea by ID)**:  
   `app.get('/teas/:id', (req, res) => {...});`  
   Retrieves a tea by its ID.

9. **PUT (Update Tea)**:  
   `app.put('/teas/:id', (req, res) => {...});`  
   Updates a tea's name and price by ID.

10. **DELETE (Delete Tea)**:  
    `app.delete('/teas/:id', (req, res) => {...});`  
    Deletes a tea by its ID.

11. **Basic Routes**:  
    The code includes three additional routes that return simple text messages for the root path `/`, `/ice-tea`, and `/twitter`.

12. **Listen on Port**:  
    `app.listen(port, () => {...});`  
    The server starts listening on port `3000` and logs a message to the console.

---

### **References for Future Reading**

1. [Express.js Documentation](https://expressjs.com/)
2. [Mongoose Documentation](https://mongoosejs.com/)
3. [Prisma Documentation](https://www.prisma.io/)
4. [Nodemon Documentation](https://nodemon.io/)

---

This concludes the backend learning session on October 21, 2024.
