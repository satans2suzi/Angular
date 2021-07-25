const documentModel = require('../models/documentary.model')
require('mongoose')
exports.test = (req, res) => {
    res.send("Greetings from the Test controller!");
};
var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../upload/documentary')
//     },
//     filename: function (req, file, cb) {
//         console.log(file)
//         cb(null, Date.now() + "-" + file.originalname)
//     }
// });
// var upload = multer({
//
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//         console.log(file);
//         if (file.mimetype === "image/bmp" || file.mimetype === "image/png" || file.mimetype === "image/jpeg"
//             || file.mimetype === "image/ipg" || file.mimetype === "image/gif") {
//             cb(null, true)
//         } else if (file.mimetype.split("/")[1] === "pdf") {
//             cb(null, true);
//         } else {
//             cb(new Error("File không hợp lệ!!"), false);
//         }
//     }
// }).single("documentPDF");


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
            message: err.message || "Some error occurred while retrieving documentary."
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
// exports.createDocument = (req, res) => {
//     //validate Request
//     // console(req.body)
//     if (!req.body.documentName || !req.body.documentNumber
//         || !req.body.documentType || !req.body.documentAddress
//         || !req.body.documentDate || !req.body.documentSecret
//         || !req.body.documentWhoSign || !req.body.documentBox) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }
//
//     let documentObj = new documentModel({
//         documentName: req.body.documentName,
//         documentNumber: req.body.documentNumber,
//         documentType: req.body.documentType,
//         documentAddress: req.body.documentAddress,
//         documentDate: req.body.documentDate,
//         documentSecret: req.body.documentSecret,
//         documentWhoSign: req.body.documentWhoSign,
//         documentImg: req.body.documentImg,
//         documentBox: req.body.documentBox,
//         documentStatus: req.body.documentStatus
//     });
//     documentObj.save()
//         .then(data => {
//             res.status(200)
//                 .send(data)
//         }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Internal Server Error"
//         })
//     })
// }

//POST Demo add documentary
// exports.createDocument = (req, res) => {
//     // validate Request
//     console(req.body)
//     if (!req.body.documentName || !req.body.documentNumber
//         || !req.body.documentType || !req.body.documentAddress
//         || !req.body.documentDate || !req.body.documentSecret
//         || !req.body.documentWhoSign || !req.body.documentBox) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }
//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             res.json({ "ket qua": 0, "errMsg":"A Multer error occurred when uploading."})
//             console.log("A Multer error occurred when uploading.");
//         } else if (err) {
//             res.json({ "ket qua": 0, "errMsg":"An unknown error occurred when uploading."})
//             console.log("An unknown error occurred when uploading." + err);
//         }else {
//             var documentObj = documentModel({
//                 documentName: req.body.documentName,
//                 documentNumber: req.body.documentNumber,
//                 documentType: req.body.documentType,
//                 documentAddress: req.body.documentAddress,
//                 documentDate: req.body.documentDate,
//                 documentSecret: req.body.documentSecret,
//                 documentWhoSign: req.body.documentWhoSign,
//                 documentImg: req.file.filename,
//                 documentBox: req.body.documentBox,
//                 documentStatus: req.body.documentStatus
//             })
//             documentObj.save()
//                 .then(data => {
//                     res.status(200)
//                         .send(data)
//                 }).catch(err => {
//                 res.status(500).send({
//                     message: err.message || "Internal Server Error"
//                 })
//             })
//         }
//     });
// }

//POST Demo 2 add documentary with file
exports.createDocument = (req, res) => {
    // validate Request

    if(!req.file) {
        return res.status(500).send({ message: 'Upload không thành công hoặc file không hợp lệ'});
    } else {
        req.body.documentImg = 'http://localhost:3000/upload/documentay/' + req.file.filename;
        documentModel.create(req.body, function (err, fileImg) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(fileImg);
        });
    }
    console.log(req.body)
}
//DELETE documentary
//http://localhost:3000/documentary/delete?_id=60f825f7fd1e5f4ba4fc2a66
exports.deleteDocument = (req, res) => {
    documentModel.findByIdAndDelete(req.query._id)
        .then(document => {
            if (!document) {
                return res.status(404).send({
                    message: "Document not found with id " + req.params.noteId
                });
            } else {
                return res.status(200).send({
                    documentDeleted: document,
                    message: "Document deleted successfully!"
                })
            }
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Document not found with id " + req.params.noteId
            });
        } else {
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        }
    })
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
                res.status(200).send({
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
