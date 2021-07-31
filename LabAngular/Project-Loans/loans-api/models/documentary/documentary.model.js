const mongoose = require("mongoose");
let Schema = mongoose.Schema
let documentSchema = new Schema({
        documentName: {type: String, required: true, default: ''},
        documentNumber: {type: String, required: true, default: ''},
        documentType: {type: String, required: true, default: ''},
        documentAddress: {type: String, required: true, default: ''},
        documentDate: {type: String, required: true, default: ''},
        documentSecret: {type: String, required: true, default: ''},
        documentWhoSign: {type: String, required: true, default: ''},
        documentFileName: {type: String, required: true, default: ''},
        documentFile: {type: String, required: false, default: ''},
        documentBox: {type: String, required: true, default: ''},
        documentStatus: {type: String, required: true, default: ''}
    },
    {timestamps: true});

module.exports = mongoose.model("documentary", documentSchema);
