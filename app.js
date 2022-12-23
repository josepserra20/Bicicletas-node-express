const express = require("express");
const app = express();

//Cargar rutas
const hello_routes = require("./routes/hello");

//Ruta base
app.use("/api", hello_routes);

module.exports = app;