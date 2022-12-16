const express = require("express");
const Router = express();
const ScheduleController = require("./Controller");
Router.post("/getdata", ScheduleController.getData);
module.exports = Router;
