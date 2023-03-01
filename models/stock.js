const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = Schema({

    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    price: {type: Number, required: true},
    Totalstock: {type: Number,
    default: 1 },
    Rentable: {type: Number, default: 0},
    store: {type: Schema.Types.ObjectId, required: true, ref: 'Store'},
    bike: {type: Schema.Types.ObjectId, required: true, ref: 'Bike'}
})

module.exports = mongoose.model("Stock", StockSchema);