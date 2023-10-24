/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 11 Notes Taker
 * 
 * Date : 10/22/2023 3:01:29 PM
 *******************************************************/

const note = require('express').Router();

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fileutils');

// Configure middleware if we are to use: curretnly we are not using this for any particular
// reason. We are just stamping the calling URL and the time.
note.use(function (request, response, next) {
  console.log(request.url, "@", Date.now());
  next();
})

/**
 * GET Route for retrieving all the notes from notes json file. This is using the not-simplified
 * version of call. Could be invoked like: .then((data) => response.json(JSON.parse(data)));
  */
note.get('/', (request, response) => {
  readFromFile('./db/notes.json')
    .then(function (data) {
      return response.json(JSON.parse(data));
    })
});

/**
 * POST Route for submitting feedback
 * To debug: console.info(`${request.method} request received to submit feedback`);
 */
note.post('/', (request, response) => {
  // Destructuring assignment for the items in request.body
  const { notetitle, notesdetails } = request.body;
  console.log(request.body);
  // If all the required properties are present
  // if (notetitle && notesdetails) {
  //   // Variable for the object we will save
  //   const newNotes = {
  //     notetitle,
  //     notesdetails,
  //   };

  //   readAndAppend(newNotes, './db/notes.json');

  //   const response = {
  //     status: 'success',
  //     body: newNotes,
  //   };

  //   response.json(response);
  // } else {
  //   response.json('Error in posting feedback');
  // }
});

module.exports = note;