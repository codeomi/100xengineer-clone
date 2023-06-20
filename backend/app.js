const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { google } = require("googleapis");
const FormData = require("./model/FormData");

const connection = require("./config/db");
dotenv.config({ path: "./config/.env" });

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const spreadSheetId = process.env.SPREADSHEET_ID;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //creating client instance for auth
  const client = await auth.getClient();

  //Instance of googlesheets api
  const googleSheets = google.sheets({ version: "v4", auth: client });

  //Get metaData from googlesheets :NOT REQUIRED IGNORE
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

  //getting existing data from sql
  connection.query("SELECT * FROM FormData", async (error, oldData) => {
    if (error) {
      console.error("Error retrieving old data from MySQL:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("Old data:", oldData);

    const newUsers = newFormData.filter(
      (formData) => !oldData.some((oldForm) => oldForm.email === formData.email)
    );
    console.log("New users:", newUsers);

    //inserting new data from google sheets
    connection.query(
      "INSERT INTO FormData (email, name, phone, employmentStatus, city, date) VALUES ?",
      [newUsers.map((user) => Object.values(user))],
      async (error) => {
        if (error) {
          console.error("Error saving responses to MySQL:", error);
          res.status(500).send("Internal Server Error");
          return;
        }
        console.log("Responses saved to MySQL");
        res.send("Responses saved to MySQL");
      }
    );
  });
});

module.exports = app;
