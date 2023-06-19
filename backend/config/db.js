const mongoose = require("mongoose");

// MongoDB connection URL


// Connect to MongoDB
const connectToDatabase = () => {
  mongoose.connect(process.env.mongoURI).then((data) => {
    console.log(`mongoDb connected with server ${data.connection.host}`);
  });
};

module.exports = connectToDatabase;