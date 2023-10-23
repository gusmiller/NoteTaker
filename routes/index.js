/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 06 Weather Dashboard
 * 
 * Date : 10/22/2023 8:20:48 AM
 *******************************************************/
const express = require('express');

// Import our files containing our routes
const notesRouter = require('./notes');

// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/notes', notesRouter);

module.exports = app;