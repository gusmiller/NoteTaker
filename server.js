/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 06 Weather Dashboard
 * 
 * Date : 10/21/2023 3:25:50 PM
 *******************************************************/
const express = require('express');

// The Path module provides a way of working with directories and file paths.
// https://www.w3schools.com/nodejs/ref_path.asp
const path = require('path');

// ExpressJS is a NodeJS module; express is the name of the module, and also the name we 
// typically give to the variable we use to refer to its main function in code such as what you quoted.
// https://stackoverflow.com/questions/27599614/var-express-requireexpress-var-app-express-what-is-express-is-it
const app = express();
const PORT = 3001; // Listening port

// Middleware for parsing JSON and urlencoded form data
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// https://expressjs.com/en/4x/api.html#express.json
// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('develop/public'));

app.get('/', (request, response) => {
  response.send("Welcome to OntarioTECK")
})

// The app.listen() function is used to bind and listen to the connections on the specified host and port. 
// This method is identical to Node’s http.Server.listen() method.
// https://www.geeksforgeeks.org/express-js-app-listen-function/
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);