const assetPlacedModel = require('../../models/assets/asset_placed.model')
const assetModel = require('../../models/assets/asset.model')
require('mongoose');

// Get all asset_placed
exports.listAssetPlace = (req, res) => {
    assetPlacedModel.find().limit(50)
        .then(data => {
            res.status(200).send({
                message: 'Lấy dữ liệu thành công',
                record: data.length,
                data: data
            });
        }).catch(err => {
        res.status(500).send({
            message: err.message || 'Có lỗi trong quá trình lấy dữ liệu!'
        })
    })
}

exports.detailsAssetPlace = (req, res) => {
    assetPlacedModel.findById(req.query._id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Không tìm thấy tài sản có ID: ${req.params._id}`
                })
            } else {
                return res.status(200).send(asset);
            }
            // res.send(document)
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Không tìm thấy tài sản có ID: ${req.params._id}`
            });
        } else {
            return res.status(500).send({
                message: `Lỗi truy xuất bản ghi ID: ${req.params._id}`
            });
        }
    });
}

// POST Create asset
exports.createAssetPlaced = (req, res) => {
    assetPlacedModel.create(req.body)
        .then(data => {
            console.log(data)
            if (!data) {
                return res.status(404).send({
                    message: 'Không có dữ liệu gửi lên',
                    data: data
                })
            } else {
                assetModel.findOneAndUpdate({_id: req.params.id_asset}, {$push: {asset_placed: data._id}}, (err) => {
                    if (err) {
                        return res.status(500).send({
                            message: 'Không có dữ liệu gửi lên',
                            data: data
                        })
                    } else {
                        return res.status(200).send({
                            message: 'Dữ liệu được gửi lên thành công',
                            data: data
                        })
                    }
                })

            }
        })
}

// DELETE Delete asset
exports.deleteAssetPlaced = (req, res) => {
    assetPlacedModel.findByIdAndDelete(req.query._id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Không tìm thấy tài sản có ID: ${req.params._id}`
                });
            } else {
                return res.status(200).send({
                    message: `Dữ liệu tài sản có ID: ${req.query._id} được xoá thành công`,
                    data: data
                })
            }
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `Không tìm thấy tài sản có ID: ${req.params._id}`

            });
        } else {
            return res.status(500).send({
                message: `Lỗi truy xuất tài sản có ID: ${req.params._id}`
            });
        }
    });
}

// UPDATE asset
exports.updateAssetPlaced = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Các trường không nên để trống!',
            data: req.body
        })
    }
    let assetPlacedObj = {
        name_placed: req.body.name_placed,
        date_of_invoic: req.body.date_of_invoic
    };
    assetPlacedModel.findOneAndUpdate(req.query._id, assetPlacedObj, {new: true})
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Không tìm tài sản có ID: ${req.params._id}`
                })
            } else {
                return res.status(200).send({
                    message: `Update ID ${req.params._id} Thành công`,
                    data: data
                })
            }
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Không tìm thấy ID: ${req.params._id}`
            });
        } else {
            return res.status(500).send({
                message: `Có lỗi trong quá trình cập nhật ID: ${req.params._id}`
            });
        }
    })
}
