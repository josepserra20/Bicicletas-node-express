const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    name: { 
        type: String,
        required: true},
    price: { 
        type: Number, 
        required: true },
    spe_level: { 
        type: String, 
        required: true },
    category: { 
        type: String,
        required: true },
    weight: { 
        type: Number, 
        required: true },
    frame: { 
        type: String,
        required: true },
    fork: { 
        type: String,
        required: true },
    wheels: { 
        type: String, 
        required: true },
    wheel_size: { 
        type: String, 
        required: true },
    brakes: { 
        type: String, 
        required: true },
    groupset: { 
        type: String, 
        required: true },
    drivetrain: { 
        type: String, 
        required: true },
    suspension: { 
        type: String, 
        required: true },
    front_travel: { 
        type: Number, 
        required: true },
    seatpost: { 
        type: String, 
        required: true },
    brand_site: { 
        type: String, 
        required: true }
});

module.exports = mongoose.model("Bike", BikeSchema);

