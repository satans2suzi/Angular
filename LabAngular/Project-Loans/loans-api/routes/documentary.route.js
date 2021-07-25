var express = require('express');
var router = express.Router();

require('mongoose')
const documentModel = require("../models/documentary.model");
const documentController = require('../controllers/documentary.controller')
router.get('/test', documentController.test)


/* GET all documents */
router.get('/list', function (req, res, next) {
    documentModel.find(function (err, documentListResponse) {
        if (err) {
            res.json({"status": 500, "errMsg": "Loi trong qua trinh lấy danh sách"})
        } else {
            const recordCount = documentListResponse.length
            res.json({
                "status": 200,
                recordCount: recordCount,
                result: documentListResponse
            })
        }
    })
});

/* GET details documents */
router.get('/view', function (req, res, next) {

    const documentId = req.query.documentId;
    documentModel.findById(documentId, function (err, documentResponse) {
        if (err) {
            res.json({"status": 500, "errMsg": "Lỗi không tìm thấy công văn"})
        } else {

            res.json({
                "status": 200,
                result: documentResponse
            })
        }
    })
});

/* Create new documents */
router.post('/add', function (req, res, next) {

    let documentName = req.body.documentName
    let documentNumber = req.body.documentNumber
    let documentType = req.body.documentType
    let documentAddress = req.body.documentAddress
    let documentDate = req.body.documentDate
    let documentSecret = req.body.documentSecret
    let documentWhoSign = req.body.documentWhoSign
    let documentImg = req.body.documentImg

    let documentObj = new documentModel({
        documentName: documentName,
        documentNumber: documentNumber,
        documentType: documentType,
        documentAddress: documentAddress,
        documentDate: documentDate,
        documentSecret: documentSecret,
        documentWhoSign: documentWhoSign,
        documentImg: documentImg,
    })
    documentObj.save(function (err, documentObj) {
        if (err) {
            res.json({"status": 500, "errMsg": "Loi trong qua trinh upload"})
        } else {
            res.json({
                "status": 200,
                "Msg": "Upload thanh cong",
                documentDetails: documentObj
            })
        }
    });
});

/* Update existing documents */
router.put('/update', function (req, res, next) {

    const documantID = req.body.documantID;

    let documentName = req.body.documentName
    let documentNumber = req.body.documentNumber
    let documentType = req.body.documentType
    let documentAddress = req.body.documentAddress
    let documentDate = req.body.documentDate
    let documentSecret = req.body.documentSecret
    let documentWhoSign = req.body.documentWhoSign
    let documentImg = req.body.documentImg

    let documentObj = {
        documentName: documentName,
        documentNumber: documentNumber,
        documentType: documentType,
        documentAddress: documentAddress,
        documentDate: documentDate,
        documentSecret: documentSecret,
        documentWhoSign: documentWhoSign,
        documentImg: documentImg,
    };

    documentModel.findByIdAndUpdate(documantID,documentObj, function (err, documentResponse) {
        if (err) {
            res.json({status: 500, Msg: "Lỗi không update công văn"})
        } else {
            res.json({
                status: 200,
                result: documentObj
            })
        }
    })
});

/* Delete existing documents */
router.delete('/delete', function (req, res, next) {
    const documentId = req.query.documentId;
    documentModel.findByIdAndDelete(documentId, function (err, documentResponse) {
        if (err) {
            res.json({status: 500, errMsg: "Lỗi không xoá được công văn"})
        } else {
            res.json({
                status: 200,
                Msg: 'document deleted successful',
                result: documentResponse
            })
        }
    })
});

/* Delete many existing documents */
router.delete('/delete-multiple', function (req, res, next) {
    // const documentId = req.query.documentId;
    documentModel.deleteMany({"documentAddress":"Ban Cơ Yếu"}, function (err, documentResponse) {
        if (err) {
            res.json({status: 500, errMsg: "Lỗi không xoá được công văn"})
        } else {
            res.json({
                status: 200,
                Msg: 'document deleted successful',
                result: documentResponse
            })
        }
    })
});

/* Search existing documents */
router.get('/search', function (req, res, next) {
    res.send('Search existing documents');
});

module.exports = router;
