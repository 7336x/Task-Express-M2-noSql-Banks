// Import the 'mongoose' module to interact with MongoDB
const mongoose = require("mongoose");

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Define the connection URI (Uniform Resource Identifier) to MongoDB
        const uri = 'mongodb+srv://r7664alhussaini:Rr%4090940014@cluster0.ztre0.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

        // Use mongoose.connect() to establish a connection to the database
        await mongoose.connect(uri);

        // If successful, log a success message to the console
        console.log('MongoDB connected successfully');
    } catch (err) {
        // If there is an error during the connection, log the error message to the console
        console.error('MongoDB connection error:', err.message);

        // Exit the process with a non-zero status code indicating failure
        process.exit(1);
    }
};

// Export the connectDB function so it can be used elsewhere in the application
module.exports = connectDB;
