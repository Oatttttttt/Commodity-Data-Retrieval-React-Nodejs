const express = require("express");
const cors = require("cors");
var axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Commodity");
});

app.get("/Commodity", async function (req, res, next) {
  try {
    const apiUrl = `https://commodity-rates-api.p.rapidapi.com/latest`;
    const response = await axios.get(apiUrl, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "commodity-rates-api.p.rapidapi.com",
      },
    });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
