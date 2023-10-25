/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 11 Notes Taker
 * 
 * Date : 10/22/2023 3:01:29 PM
 *******************************************************/

const note = require('express').Router();
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fileutils');

// Configure middleware if we are to use: curretnly we are not using this for any particular
// reason. We are just stamping the calling URL and the time.
// note.use(function (request, response, next) {
// 	console.log(request.url, "@", Date.now());
// 	next();
// })

/**
 * GET Route for retrieving all the notes from notes json file. This is using the not-simplified
 * version of call. Could be invoked like: .then((data) => response.json(JSON.parse(data)));
  */
note.get('/', (req, res) => {
	readFromFile('./db/notes.json')
		.then((data) => res.json(JSON.parse(data)));
	// readFromFile('./db/notes.json')
	// 	.then(function (data) {
	// 		return response.json(JSON.parse(data));
	// 	})
});

/**
 * DELETE Route for eliminating an item from notes json file. It retrieves the contents of the json file
 * and filters-out the selected note to delete, then it creates a new object-array and saves it back
 * to the file.
 */
note.delete('/:id', (request, response) => {
	const itemId = request.params.id; // Retrieve ID

	readFromFile('./db/notes.json')
		.then((data) => JSON.parse(data))
		.then((json) => {
			// Make a new array of all tips except the one with the ID provided in the URL
			const result = json.filter((notes) => notes.id !== itemId);

			// Save that array to the filesystem
			writeToFile('./db/notes.json', result);

			// Respond to the DELETE request
			response.json(`Item ${itemId} has been deleted 🗑️`);
		});
});

/**
 * POST Route for submitting feedback
 * To debug: console.info(`${request.method} request received to submit feedback`);
 */
note.post('/', (request, response) => {
	// Destructuring assignment for the items in request.body
	const { title, text } = request.body;

	if (title && text) {
		const newNotes = {
			id: uuid(),
			title,
			text,
		};

		readAndAppend(newNotes, './db/notes.json');

		const statusres = {
			status: 'success',
			body: newNotes,
		};
		response.json(statusres);
	} else {
		response.json('Error in posting feedback');
	}
});

module.exports = note;