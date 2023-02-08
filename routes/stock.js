const express = require("express");
const stockController = require("../controllers/stock");

const api = express.Router();

api.post("/stock/new", stockController.stockModule.createStock);
api.post("/rentable/new", stockController.stockModule.updateRentable);
api.get("/stock/all", stockController.stockModule.getAllStock);
api.post("/rentable/new", stockController.stockModule.updateRentable);
api.get("/stock/all/bikes/:id", stockController.stockModule.getAllBikesByStoreId);

module.exports = api;