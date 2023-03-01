const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('frontend'));

// middleware de cors
const cors = require("cors");
app.use(cors());

//Cargar rutas
const hello_routes = require("./routes/hello");
const bike_routes = require("./routes/bike");
const store_routes = require ("./routes/store");
const stock_routes = require ("./routes/stock");

const page = require("./routes/page");


//Ruta base
app.use("/api", hello_routes);
app.use("/api", bike_routes);
app.use("/api", store_routes);
app.use("/api", stock_routes);
app.use("/", page);


module.exports = app;