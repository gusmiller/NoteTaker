/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 11 Notes Taker
 * 
 * Date : 10/25/2023 5:50:25 AM
 *******************************************************/

// Immediately export a function that generates a random number. Concept taken from
// lesson 24-Custom Middleware.
module.exports = () =>
  Math.floor(Math.random() * (1000 - 1 + 1) + 1).toString();
