const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const FormData = require("./model/FormData");

const connectToDatabase = require("./config/db");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
connectToDatabase();

app.post("/", async (req, res) => {
  const spreadSheetId = "1CYT-kbnaaefR6fKM8aUqKysxSnrcdprIMXM2SnHEEBA";

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //creating client instance for auth
  const client = await auth.getClient();

  //Instance of googlesheets api
  const googleSheets = google.sheets({ version: "v4", auth: client });

  //Get metaData from googlesheets
  try {
    const metaData = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId: spreadSheetId,
    });
    //   res.send(metaData.data);
  } catch (error) {
    console.error("Error retrieving spreadsheet metadata:", error);
    res.status(500).send("Internal Server Error");
  }

  //gives us row values in array format
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: spreadSheetId,
    range: "Form responses 1",
  });

  //deleting the first the element of the data as it is name of rows
  const firstDataDelete = getRows.data.values.shift();
  const newFormData = [];

  //giving each row data a key
  getRows.data.values.forEach((user) => {
    const updateUser = {
      email: user[3],
      name: user[2],
      phone: user[4],
      employmentStatus: user[5],
      city: user[6],
      date: user[0],
    };

    newFormData.push(updateUser);
  });

  const oldData = await FormData.find();
  console.log("Old data:", oldData);
  
  const newUsers = await FormData.find().where("email").nin(oldData.map(item => item.email));
  console.log("New users:", newUsers);
  
  

    try {
      await FormData.create(newFormData);
      console.log("Responses saved to MongoDB");
      res.send("Responses saved to MongoDB");
    } catch (error) {
      console.error("Error saving responses to MongoDB:", error);
      res.status(500).send("Internal Server Error");
    }
  
});

module.exports = app;
