// Import the accounts data (could be static data) and the Account model (which interacts with the database)
let accounts = require("../../accounts");  // Assuming it's static data (not related to the database)
const Account = require("../../models/Account");  // Import the mongoose model for Account from the models directory

// Handler function to retrieve all accounts from the database
exports.accountsList = async (req, res) => {
  try {
    // Fetch all accounts from the database using the Account model
    const accounts = await Account.find();
    // Respond with the list of accounts in JSON format
    res.json(accounts);
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ message: error.message });
  }
};

// Handler function to create a new account in the database
exports.accountCreate = async (req, res) => {
  try {
    // Create a new account using the data provided in the request body
    const newAccount = await Account.create(req.body);
    // Respond with a 201 status and the newly created account in JSON format
    res.status(201).json(newAccount);
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ message: error.message });
  }
};

// Handler function to delete an account based on accountId from the URL parameters
exports.accountDelete = async (req, res) => {
  // Extract accountId from the request parameters
  const { accountId } = req.params;
  try {
    // Find the account by its ID
    const foundAccount = await Account.findById(accountId);
    if (!foundAccount) {
      // If the account is not found, return a 404 status and an error message
      res.status(404).json({ message: "account not found" });
    }
    // If found, delete the account from the database
    await foundAccount.deleteOne();
    // Respond with a success message
    res.status(200).json({ message: "account deleted" });
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ message: error.message });
  }
};

// Handler function to update an existing account in the database based on accountId
exports.accountUpdate = async (req, res) => {
  try {
    // Extract accountId from the request parameters
    const { accountId } = req.params;
    // Find the account by its ID
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      // If found, update the account with the data provided in the request body
      await foundAccount.updateOne(req.body);
      // Respond with a 204 status (no content) to indicate successful update
      res.status(204).end();
    } else {
      // If the account is not found, return a 404 status and an error message
      res.status(404).json({ message: error.message });
    }
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ message: error.message });
  }
};

// Handler function to retrieve all accounts (assuming static data in the accounts array)
exports.accountsGet = (req, res) => {
  // Respond with the list of accounts in JSON format (static data)
  res.json(accounts);
};

// Handler function to retrieve an account by username, with optional currency conversion
exports.getAccountByUsername = (req, res) => {
  // Extract username from the request parameters
  const { username } = req.params;
  // Find the account with the matching username
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  // If the query string contains 'currency=usd', convert the funds to USD
  if (req.query.currency === "usd") {
    // Multiply the funds by a conversion rate (e.g., 1 local currency = 3.31 USD)
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    // Respond with the account in USD
    res.status(201).json(accountInUsd);
  }
  // Otherwise, just respond with the found account
  res.status(201).json(foundAccount);
};
