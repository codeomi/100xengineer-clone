const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");

const connectToDatabase = require("./config/db");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
connectToDatabase();

app.get("/", async (req, res) => {
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
    spreadsheetId:spreadSheetId,
  });
//   res.send(metaData.data);
  } catch (error) {
    console.error("Error retrieving spreadsheet metadata:", error);
    res.status(500).send("Internal Server Error");
  }

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId:spreadSheetId,
    range:"Form responses 1",
  });

  res.send(getRows.data.values)
  res.send(JSON.parse(getRows.data.values))
  console.log(getRows.values)
 
});

module.exports = app;
