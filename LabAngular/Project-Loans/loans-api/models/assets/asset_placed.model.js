const mongoose = require("mongoose");
const timeZone = require('mongoose-timezone');
const assetsPlacedSchema = mongoose.Schema({
    name_placed: {
        type: String,
        required: [true, 'Name placed is required'],
        trim: true
    },
    date_of_invoice: {
        type: Date,
        required: [true, 'Date of invoice is required'],
        trim: true
    }
}, { timestamps: true });
assetsPlacedSchema.plugin(timeZone, { paths: ['date_of_invoice'] });
module.exports = mongoose.model("AssetPlaced", assetsPlacedSchema);
