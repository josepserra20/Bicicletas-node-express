const express = require("express");
const storeController = require("../controllers/store");

const api = express.Router();

//api.get("/store/bike", storeController.storeModule.createStoreBike);
// api.get("/store/all/bikes/:id", storeController.storeModule.getAllBikes);

api.get("/store/all", storeController.storeModule.getAllStores);
api.get("/store/name/:name", storeController.storeModule.getStoreByName);

api.post("/store/new", storeController.storeModule.createStore);

api.delete("/store/:id/delete", storeController.storeModule.deleteStore);

api.put("/store/:id/update", storeController.storeModule.updateStore);


module.exports = api;