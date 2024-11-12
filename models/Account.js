// Import the 'model' and 'Schema' functions from the mongoose module
const { model, Schema } = require("mongoose");

// Define a new Schema for the 'Account' model
const AccountSchema = new Schema({
  // Define the 'username' field of type String (used to store the user's username)
  username: { type: String },

  // Define the 'funds' field of type Number (used to store the user's funds or balance)
  funds: { type: Number },
});

// Create a Mongoose model based on the AccountSchema and export it
module.exports = model("Account", AccountSchema);
