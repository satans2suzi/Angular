const mongoose = require("mongoose");

const assetsSchema = mongoose.Schema({
    assetName: String,
    assetType: String,
    assetDay: String,
    phoneNumber: String,
    dob: String
});

const assetModel = mongoose.model("Assets", assetsSchema);
module.exports = assetModel;
