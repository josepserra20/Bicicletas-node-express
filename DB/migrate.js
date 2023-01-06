import data from './bikes.json';
const Bike = require("../models/bike");

module.exports = {

  seed: async () => {
    await Bike.deleteMany({});
    await Bike.insertMany(data);
  }
}
