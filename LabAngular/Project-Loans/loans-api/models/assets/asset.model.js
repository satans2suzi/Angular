const mongoose = require("mongoose");
let d = new Date();
const assetsSchema = mongoose.Schema({
    asset_name: {type: String, required: true},
    asset_type: {type: String, required: true},
    asset_brand: {type: String, required: true},
    asset_serial_number: {type: String, required: true},
    asset_date_of_issue: {type: String, required: true},
    asset_placed: { type: [{type: mongoose.Schema.Types.ObjectId}]},
    asset_price: {type: Number,required: true},
    asset_status_in_stock: {type: Boolean, default: true}
},{timestamps: true});

module.exports = mongoose.model("assets", assetsSchema);
 
