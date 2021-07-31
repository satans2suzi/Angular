const mongoose = require("mongoose");
const assetsPlacedSchema = mongoose.Schema({
    name_placed: {type: String},
    date_of_invoice: {type: String}
},{timestamps: true});

module.exports = mongoose.model("AssetPlaced", assetsPlacedSchema);
