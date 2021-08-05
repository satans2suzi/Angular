const mongoose = require("mongoose");
const timeZone = require('mongoose-timezone');
const assetsSchema = mongoose.Schema({
    asset_name: {
        type: String,
        required: [true, 'Asset Name is required'],
        trim: true
    },
    asset_type: {
        type: String,
        required: [true, 'Asset Type is required'],
        trim: true
    },
    asset_brand: {
        type: String,
        required: [true, 'Asset Brand is required'],
        trim: true
    },
    asset_serial_number: {
        type: String,
        required: [true, 'Asset S/N is required'],
        trim: true
    },
    asset_date_of_issue: {
        type: Date,
        required: [true, 'Asset date of issue is required'],
        trim: true
    },
    asset_placed: {
        type: [{type: mongoose.Schema.Types.ObjectId}]
    },
    asset_price: {
        type: Number,
        required: [true, 'Asset price is required'],
        trim: true
    },
    asset_status_in_stock: {
        type: Boolean,
        required:  [true, 'Asset status is required'],
        default: true
    }
},{timestamps: true});
assetsSchema.plugin(timeZone, { paths: ['asset_date_of_issue'] });
module.exports = mongoose.model("assets", assetsSchema);
 
