const express = require("express");
const pageController = require("../controllers/page");
const api = express.Router();

api.get("/", pageController.pageModule.getHomePage)


module.exports = api;