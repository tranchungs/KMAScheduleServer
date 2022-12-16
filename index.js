const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8888;
let ScheduleRouter = require("./Schedule/Schedule");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/schedule", ScheduleRouter);
app.listen(PORT, () => {
  console.log(`Sever listen on port ${PORT}`);
});
