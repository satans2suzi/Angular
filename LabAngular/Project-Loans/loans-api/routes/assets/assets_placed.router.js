var express = require('express');
var router = express.Router();
var assetPlacedController = require('../../controllers/assets/assets_placed.controller')
// var cors = require('cors')

/* GET all documents */
router.post('/list', assetPlacedController.listAssetPlace)

/* GET details documents */
router.get('/view', assetPlacedController.detailsAssetPlace);

/* Create new documents */
router.post('/:id_asset/create', assetPlacedController.createAssetPlaced);

/* Update existing documents */
router.put('/update', assetPlacedController.updateAssetPlaced);

/* Delete existing documents */
router.delete('/delete', assetPlacedController.deleteAssetPlaced);

module.exports = router;
