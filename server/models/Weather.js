const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  // Create Schema here
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
