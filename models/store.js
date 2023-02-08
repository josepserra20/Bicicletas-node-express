const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    name: {type: String, required: true},
})

module.exports = mongoose.model("Store", StoreSchema);