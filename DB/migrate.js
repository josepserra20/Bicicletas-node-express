import dataBike from './bikes.json';
import dataStore from './store.json';
import dataStock from './stock.json';

const Bike = require("../models/bike");
const Store = require("../models/store");
const Stock = require("../models/stock");

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI_TEST;
const client = new MongoClient(uri);

module.exports = {

  seed: async () => {
      await client.connect();

      try {
        
        await Bike.deleteMany({});
        await Store.deleteMany({});
        await Stock.deleteMany({});
  
        const insertData = async (model, data) => {
          await model.insertMany(data);
        }
        await insertData(Bike, dataBike);
        await insertData(Store, dataStore);
        await insertData(Stock, dataStock);

    } catch (error) {
        // console.log(error);
    } finally {
        await client.close();
    }
  }
}
