// const mongoose = require("mongoose");
const mysql = require("mysql")

// // MongoDB connection URL


// // Connect to MongoDB
// const connectToDatabase = () => {
//   mongoose.connect(process.env.mongoURI).then((data) => {
//     console.log(`mongoDb connected with server ${data.connection.host}`);
//   });
// };

// module.exports = connectToDatabase;

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return connection;
    }
    console.log("Connected to MySQL");
  });


module.exports= connection
