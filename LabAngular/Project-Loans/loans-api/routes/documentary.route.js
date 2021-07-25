var express = require('express');
var router = express.Router();
var multer  = require('multer');
var documentController = require('../controllers/documentary.controller')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload/documentary');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, 'documentary-' + Date.now() + '.' + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log(file);
        if (file.mimetype === "image/bmp" || file.mimetype === "image/png" || file.mimetype === "image/jpeg"
            || file.mimetype === "image/ipg" || file.mimetype === "image/gif") {
            cb(null, true)
        } else if (file.mimetype.split("/")[1] === "pdf") {
            cb(null, true);
        } else {
            cb(new Error("File không hợp lệ!!"), false);
        }
    }
});

/* GET test documents */
router.get('/test', documentController.test)

/* GET all documents */
router.get('/list', documentController.listDocument)

/* GET details documents */
router.get('/view', documentController.detailsDocument);

/* Create new documents */
router.post('/create',upload.single('documentImg'), documentController.createDocument);

/* Update existing documents */
router.put('/update', documentController.updateDocumentary);

/* Delete existing documents */
router.delete('/delete', documentController.deleteDocument);

/* Delete many existing documents */

/* Search existing documents */
router.get('/search', documentController.searchDocumentary);

module.exports = router;
