var express = require('express');
var router = express.Router();
var assetController = require('../../controllers/assets/assets.controller')



/* GET all documents */
router.get('/list', assetController.listAsset)

/* GET details documents */
router.get('/view', assetController.detailsAsset);

/* GET details placed sort documents */
// router.get('/view_details_placed', assetController.detailsAssetPlaced);

/* Create new documents */
router.post('/create', assetController.createAsset);

/* Update existing documents */
router.put('/update', assetController.updateAsset);

/* Delete existing documents */
router.delete('/delete', assetController.deleteAsset);

/* Search existing documents */
router.get('/search/:query', assetController.searchAsset);

module.exports = router;
