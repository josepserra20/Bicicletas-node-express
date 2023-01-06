const express = require("express");
const taskController = require("../controllers/task");

const api = express.Router();

api.post("/task", taskController.createTask);
api.get("/task", taskController.getTasks);
api.get("/task/:description", taskController.getTask);


module.exports = api;
