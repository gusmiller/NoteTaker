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
const { readFromFile, readAndAppend } = require('./helpers/fileutils');

/**
 * GET Route for retrieving all the notes from notes json file
 */
note.get('/', (request, response) => {
    console.info(`${request.method} request to retrieve notes`);

    readFromFile('./db/notes.json')
        .then((data) => response.json(JSON.parse(data)));
});


// POST Route for submitting feedback
note.post('/', (request, response) => {
    // Log that a POST request was received
    console.info(`${request.method} request received to submit feedback`);
  
    // Destructuring assignment for the items in request.body
    const { notetitle, notesdetails } = request.body;
  
    // If all the required properties are present
    if (notetitle && notesdetails ) {
      // Variable for the object we will save
      const newNotes = {
        notetitle,
        notesdetails,
      };
  
      readAndAppend(newNotes, './db/notes.json');
  
      const response = {
        status: 'success',
        body: newNotes,
      };
  
      response.json(response);
    } else {
        response.json('Error in posting feedback');
    }
  });
  
  module.exports = note;