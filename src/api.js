const express = require("express");
const cors = require("cors");
const port = 5001;
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/locationApi", (req, res) => {
  const ipInfoApiKey = "6351c103f9ee08";
  fetch(`https://ipinfo.io/json?token=${ipInfoApiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.get("/weatherApi/:city", (req, res) => {
  const city = req.params.city;
  const openWeatherApiKey = "01de9c9be492f0862c2adbbabac39ab8";
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.listen(port, () => {
  console.log("Server activated and listens on port " + port);
});
