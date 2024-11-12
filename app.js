// let accounts = require('./accounts');
// const express = require('express');
// const app = express();
// const accountsRoutes = require('./api/accounts/accounts.routes');
// const connectDb= require("./Account")

// app.use(express.json());
// app.use('/accounts', accountsRoutes);
// connectDb();
// app.listen(8000, () => {
//   console.log('The application is running on localhost:8000');
// });


// // importing the Account model
// const Account = require('./Account');

// // GET route to fetch all accounts
// app.get('/accounts', async (req, res) => {
//   try {
//     // fetch accounts and exclude 'createdAt' and 'updatedAt'
//     const accounts = await Account.find({}, '-createdAt -updatedAt');
//     // send the accounts as a JSON response
//     res.json(accounts);
//   } catch (error) {
//     // catch any errors, set status code to 500, and return the error message
//     res.status(500).json({ message: error.message });
//   }
// });

// //  POST route to create a new account
// app.post('/accounts', async (req, res) => {
//   try {
//     // pass the request body to Account.create and save the returned value
//     const newAccount = await Account.create(req.body);

//     // send the new account as a JSON response with status code 201
//     res.status(201).json(newAccount);
//   } catch (error) {
//     // catch any errors, set status code to 500, and return the error message
//     res.status(500).json({ message: error.message });
//   }
// });



// // PUT route to update an existing account
// app.put('/accounts/:accountId', async (req, res) => {
//   try {
//     // find the account by ID
//     const foundAccount = await Account.findById(req.params.accountId);

//     // check if account exists
//     if (foundAccount) {
//       // Update the found account with the new data from the request body
//       await foundAccount.updateOne(req.body);

//       // set status to 204 (No Content) to indicate successful update
//       res.status(204).end();
//     } else {
//       // if account doesnt exist respond with 404 and error message
//       res.status(404).json({ message: "Account doesn't exist" });
//     }
//   } catch (error) {
//     // catch any errors, set status code to 500, and return the error message
//     res.status(500).json({ message: error.message });
//   }
// });

// // DELETE route to delete an existing account
// app.delete('/accounts/:accountId', async (req, res) => {
//   try {
//     // find the account by ID
//     const foundAccount = await Account.findById(req.params.accountId);

//     // check if account exists
//     if (foundAccount) {
//       // Delete the found account
//       await foundAccount.deleteOne();

//       // set status to 204 (No Content) to indicate successful deletion
//       res.status(204).end();
//     } else {
//       // if account doesn't exist, respond with 404 and error message
//       res.status(404).json({ message: "Account doesn't exist" });
//     }
//   } catch (error) {
//     // catch any errors, set status code to 500, and return the error message
//     res.status(500).json({ message: error.message });
//   }
// });
let accounts = require("./accounts");
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./database");

const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/accounts", accountsRoutes);

connectDb();
app.listen(8002, () => {
  console.log("The application is running on localhost:8002");
});