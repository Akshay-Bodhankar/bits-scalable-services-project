const mongoose = require("mongoose");
const envVars = require("./envVars");

async function setUpDB() {
  try {
    await mongoose.connect(`${envVars.db.url}driveservice`);
    console.log("Connected to database");
  } catch (err) {
    console.log("Error connecting to database ", err.message);
    throw new Error(err.message);
  }
}

module.exports = setUpDB;