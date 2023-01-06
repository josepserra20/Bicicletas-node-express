const mongoose = require("mongoose");

require('dotenv').config();

const databaseEnv = {
  development: process.env.MONGODB_URI,
  test: process.env.MONGODB_URI_TEST,
}

mongoose.set('strictQuery', false);

let environment = process.env.NODE_ENV || "development";

  module.exports = {
    mongoose,
    connect: () => {
      mongoose.Promise = Promise;
      mongoose.connect(databaseEnv[environment], {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    },
    disconnect: done => {
      mongoose.disconnect(done);
    }
  };