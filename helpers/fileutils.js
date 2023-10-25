/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 06 Weather Dashboard
 * 
 * Date : 10/22/2023 3:11:00 PM
 *******************************************************/

// The Node.js file system module allows you to work with the file system on your computer.
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp
// https://nodejs.org/api/fs.html
const fs = require('fs');

// https://www.codecademy.com/courses/learn-node-js/lessons/intro-to-node-js/exercises/the-util-module
// Developers sometimes classify outlier functions used to maintain code and debug certain 
// aspects of a program’s functionality as utility functions. Utility functions don’t 
// necessarily create new functionality in a program, but you can think of them as internal 
// tools used to maintain and debug your code. The Node.js util core module contains methods 
// specifically designed for these purposes.
// https://nodejs.org/api/util.html#utilpromisifyoriginal
const util = require('util');

// Promise version of fs.readFile
// The util.promisify() method defines in utilities module of Node.js standard library. It is basically 
// used to convert a method that returns responses using a callback function to return responses in a 
// promise object. Usually, very soon it becomes very difficult to work with callbacks due to callback 
// nesting or callback hells. It becomes very difficult to organize or format our code so that other 
// developers if working with that code, can understand it easily. 
// https://www.geeksforgeeks.org/node-js-util-promisify-method/
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 * 
 * The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing 
 * values if a replacer function is specified or optionally including only the specified properties if a 
 * replacer array is specified.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    console.log(file);
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };  