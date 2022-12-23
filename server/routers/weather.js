const { Router } = require("express");
const Weather = require("../models/Weather");
const router = Router();

router.post("/", (request, response) => {
  const newWeather = new Weather(request.body);
  newWeather.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
