/******************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 11 Notes Taker
 * 
 * Date : 10/24/2023 1:15:48 PM
 *******************************************************/
const exitButton = document.getElementById("returncalling");

/**
 * This function will return to the calling form.
 * It uses a different method I got from lesson 28: Mini-project: history.back()
 * https://developer.mozilla.org/en-US/docs/Web/API/History/back
 * 
 * The preventDefault() method of the Event interface tells the user agent that if the event 
 * does not get explicitly handled, its default action should not be taken as it normally would be.
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
 * @param {*} e 
 */
const returnCalling = (e) => {
  e.preventDefault(); // See notes above

  // Causes the browser to move back one page in the session history.
  history.back();
};

exitButton.addEventListener('click', returnCalling);
