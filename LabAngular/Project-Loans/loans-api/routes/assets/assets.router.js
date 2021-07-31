var express = require('express');
var router = express.Router();
var assetController = require('../../controllers/assets/assets.controller')
// var cors = require('cors')

/* GET all documents */
router.get('/list', assetController.listAsset)

/* GET details documents */
router.get('/view', assetController.detailsAsset);

/* Create new documents */
router.post('/create', assetController.createAsset);

/* Update existing documents */
router.put('/update', assetController.updateAsset);

/* Delete existing documents */
router.delete('/delete', assetController.deleteAsset);

module.exports = router;
