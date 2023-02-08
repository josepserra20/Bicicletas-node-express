const express = require("express");
const bikeController = require("../controllers/bike");
const bike = require("../models/bike");

const api = express.Router();

api.get("/bike", bikeController.bikeModule.getBikes)
api.get("/bike/:name", bikeController.bikeModule.getBikeByName);
api.get("/bike/id/:id", bikeController.bikeModule.getBikeById);

api.post("/bike/new", bikeController.bikeModule.createBike);

api.put("/bike/:id/update", bikeController.bikeModule.updateBike);

api.delete("/bike/:id/delete", bikeController.bikeModule.deleteBike);

module.exports = api;