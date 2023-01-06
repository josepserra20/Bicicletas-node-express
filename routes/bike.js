const express = require("express");
const bikeController = require("../controllers/bike");

const api = express.Router();

api.get("/bike", bikeController.bikeModule.getBikes)
api.get("/bike/:name", bikeController.bikeModule.getBikeByName);

api.post("/bike", bikeController.bikeModule.createBike);

api.put("/bike/:id", bikeController.bikeModule.updateBike);

api.delete("/bike/:id", bikeController.bikeModule.deleteBike);

module.exports = api;