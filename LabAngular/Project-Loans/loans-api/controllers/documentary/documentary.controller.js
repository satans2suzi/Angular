const documentModel = require('../../models/documentary/documentary.model')
require('mongoose')
var fs = require('fs')
const {promisify} = require('util')
const unlinkAsync = promisify(fs.unlink)
var multer = require('multer');

// Lấy tất cả dữ liệu
exports.listDocument = (req, res) => {
    documentModel.find().sort("documentDate").limit(50)
        .then(documentary => {
            res.status(200).send({
                record: documentary.length,
                data: documentary
            });
        }).catch(err => {
        res.status(500).send({
            message: err.message || 'Có lỗi trong quá trình lấy dữ liệu!'
        });
    });
}

//GET details documentary
//http://localhost:3000/documentary/view?_id=60f84c10afaff359ac659418
exports.detailsDocument = (req, res) => {
    console.log(req.query._id)
    documentModel.findById(req.query._id)
        .then(document => {
            if (!document) {
                return res.status(404).send({
                    message: "Không tìm thấy id:" + req.query._id
                })
            } else {
                return res.status(200).send(document);
            }
            // res.send(document)
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Không tìm thấy ID:" + req.query._id
            });
        } else {
            return res.status(500).send({
                message: "Lỗi truy xuất bản ghi ID: " + req.query._id
            });
        }
        // return res.send(err)
    })
}

//POST Create documentary
exports.createDocument = (req, res) => {
    // validate Request
    console.log(req.file)
    if (!req.file) {
        return res.status(500).send({message: 'Upload không thành công hoặc file không hợp lệ'});
    } else {
        req.body.documentFile = 'http://localhost:3000/upload/documentary/' + req.file.filename;
        req.body.documentFileName = req.file.filename;
        documentModel.create(req.body, function (err, fileImg) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                res.json(fileImg);
            }

        });
    }
}

//DELETE documentary
//http://localhost:3000/documentary/delete?_id=60f825f7fd1e5f4ba4fc2a66
exports.deleteDocument = (req, res) => {
    documentModel.findByIdAndDelete(req.query._id)
        .then(document => {
            if (!document) {
                return res.status(404).send({
                    message: "Document not found with id " + req.query._id
                });
            } else {
                try {
                    fs.unlink('./public/upload/documentary/' + document.documentFileName, err => {
                        if (err) throw err;
                        console.log('File deleted!');
                    })
                    return res.status(200).send({
                        documentFile: document.documentFileName,
                        documentDeleted: document,
                        message: "Document deleted successfully!"
                    })
                } catch (err) {
                    // handle the error
                    return res.status(400).send({
                        err: err
                    });
                }
            }
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Document not found with id " + req.query._id,

            });
        } else {
            return res.status(500).send({
                message: "Could not delete note with id " + req.query._id
            });
        }
    });
}


//UPDATE documentary
//http://localhost:3000/documentary/update?_id=60f84c10afaff359ac659418
exports.updateDocumentary = (req, res) => {
    if (!req.body.documentName || !req.body.documentNumber
        || !req.body.documentType || !req.body.documentAddress
        || !req.body.documentDate || !req.body.documentSecret
        || !req.body.documentWhoSign || !req.body.documentBox) {
        return res.status(400).send({
            message: "Các trường không nên để trống"
        });
    }
    let documentObj = {
        documentName: req.body.documentName,
        documentNumber: req.body.documentNumber,
        documentType: req.body.documentType,
        documentAddress: req.body.documentAddress,
        documentDate: req.body.documentDate,
        documentSecret: req.body.documentSecret,
        documentWhoSign: req.body.documentWhoSign,
        documentImg: req.body.documentImg,
        documentBox: req.body.documentBox,
        documentStatus: req.body.documentStatus
    };
    documentModel.findByIdAndUpdate(req.query._id, documentObj, {new: true})
        .then(document => {
            if (!document) {
                return res.status(404).send({
                    message: "Không tìm thấy công văn có ID: " + req.params._id
                });
            } else {
                return res.status(200).send({
                    message: "Update ID" + req.params._id + "Thành công"
                })
            }
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Không tìm thấy ID: " + req.params._id
            });
        } else {
            return res.status(500).send({
                message: "Có lỗi trong quá trình cập nhật ID: " + req.params._id
            });
        }
    })
}

//SEARCH documentary
exports.searchDocumentary = (req, res) => {
    let querySearch = [
        {documentName: req.params.documentName},
        {documentNumber: req.params.documentNumber},
        {documentType: req.params.documentType},
        {documentAddress: req.params.documentAddress},
        {documentDate: req.params.documentDate},
        {documentSecret: req.params.documentSecret},
        {documentWhoSign: req.params.documentWhoSign},
        {documentImg: req.params.documentImg},
        {documentBox: req.params.documentBox},
        {documentStatus: req.params.documentStatus}
    ]
    documentModel.find({
        // $and: querySearch
        $and: [
            {documentName: {$regex: req.query.documentName}},
            {documentNumber: {$regex: req.query.documentNumber}},
            {documentType: {$regex: req.query.documentType}},
            {documentAddress: {$regex: req.query.documentAddress}},
            {documentDate: {$regex: req.query.documentDate}},
            {documentSecret: {$regex: req.query.documentSecret}},
            {documentWhoSign: {$regex: req.query.documentWhoSign}},
            {documentBox: {$regex: req.query.documentBox}},
            {documentStatus: {$regex: req.query.documentStatus}}
        ]
    })
        .then(dataDocument => {
            res.status(200).send({
                record: dataDocument.length,
                document: dataDocument,
            })
        }).catch(err => {
        return res.status(500).send({
            message: "Lỗi truy xuất bản ghi ID: " + req.query._id
        })
    })
}
