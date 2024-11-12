// Import the express module to create an Express router
const express = require('express');
// Create a new router instance from express.Router() to handle routes for the accounts
const router = express.Router();
// Import the controller functions that handle requests for accounts
const {
  accountsGet,
  accountUpdate,
  accountDelete,
  accountCreate,
  getAccountByUsername,
} = require('./accounts.controllers');

// Define the route to get the list of all accounts (using GET method)
router.get('/', accountsGet);  // When a GET request is made to '/', it will call accountsGet

// Define the route to get an account by username (using GET method)
// The :username part is a route parameter, and it will be accessible in the controller
router.get('/:username', getAccountByUsername);  // When a GET request is made to '/:username', it will call getAccountByUsername

// Define the route to create a new account (using POST method)
// The request body should contain the data for creating the new account
router.post('/', accountCreate);  // When a POST request is made to '/', it will call accountCreate

// Define the route to delete an account by its accountId (using DELETE method)
// The :accountId part is a route parameter, and it will be accessible in the controller
router.delete('/:accountId', accountDelete);  // When a DELETE request is made to '/:accountId', it will call accountDelete

// Define the route to update an account by its accountId (using PUT method)
// The :accountId part is a route parameter, and it will be accessible in the controller
router.put('/:accountId', accountUpdate);  // When a PUT request is made to '/:accountId', it will call accountUpdate

// Export the router so that it can be used in other parts of the application
module.exports = router;
