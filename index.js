const app = require("./app");
const mongoDB = require("./DB/connect");

require('dotenv').config();

const port = process.env.PORT || 3000;
let environment = process.env.NODE_ENV || "development";

app.listen(port, () => { 
    console.log(`Environment: ${environment} example app listening at http://localhost:${port}/api/hello 🎅`);
  });

// conexion mongoDB
mongoDB.connect();




  
  
  