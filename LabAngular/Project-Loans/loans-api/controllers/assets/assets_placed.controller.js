const assetPlacedModel = require('../../models/assets/asset_placed.model')
const assetModel = require('../../models/assets/asset.model')
const mongoose = require('mongoose');
const api200OK = require('../../errors/api200OK')
const api400Error = require('../../errors/api400Error')
const api404Error = require('../../errors/api404Error')
const api500Error = require('../../errors/api500Error')

const errorFormatter = e => {
    let errors = {};
    const allErrors = e.substring(e.indexOf(':') + 1).trim();
    const allErrorsInArrayFormat = allErrors.split(',').map(err => err.trim());
    allErrorsInArrayFormat.forEach(error => {
        const [key, value] = error.split(':').map(err => err.trim());
        errors[key] = value;
    })
    return errors
}

// Get all asset_placed
exports.listAssetPlace = async (req, res) => {
    try {
        const data = await assetPlacedModel.find()
        return res.status(200).send({
            message: new api200OK(`Lấy dữ liệu thành công`),
            record: data.length,
            data: data
        });
    } catch (e) {
        return res.status(500).send({
            message: new api500Error(`Lấy dữ liệu không thành công`),
            err: e.toString()
        })
    }
}

// Get details asset_placed
exports.detailsAssetPlace = async (req, res) => {
    try {
        const data = await assetPlacedModel.findById(req.query._id)
        if (!data) {
            return res.status(404).send({
                message: new api404Error(`Không tồn tại ID: ${req.query._id}`)
            })
        }
        return res.send({
            message: new api200OK(`Tìm thấy dữ liệu có ID: ${req.query._id} thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: new api400Error('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: new api500Error(e.toString())
        });
    }
}

// POST Create asset
exports.createAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.create(req.body)
        const push = await assetModel.findOneAndUpdate({_id: req.params.id_asset}, {$push: {asset_placed: data._id}}, {
            useFindAndModify: false,
            runValidators: true
        })
        return res.status(200).send({
            message: new api200OK(`Tạo dữ liệu thành công`),
            data: data
        })
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(402).send({
                message: new api404Error(`ID asset không tồn tại`)
            });
        }
        return res.status(400).send({
            message: new api400Error('Something went wrong'),
            debugInfo: errorFormatter(e.message)
        })
    }
}

// DELETE Delete asset
exports.deleteAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.findByIdAndRemove(req.query._id)
        await assetModel.findOneAndUpdate(
            {asset_placed: req.query._id},
            {$pull: {asset_placed: req.query._id}},
            {useFindAndModify: false}
        )
        if (!data) {
            return res.status(404).send({
                message: new api404Error(`Không tồn tại ID: ${req.query._id}`)
            })
        }
        return res.status(200).send({
            message: new api200OK(`Dữ liệu có ID: ${req.query._id} được xoá thành công`),
            data: data
        })
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: new api400Error('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: new api500Error(e.toString())
        });
    }
}

// UPDATE asset
exports.updateAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.findOneAndUpdate({_id: req.query._id}, req.body, {
            useFindAndModify: false,
            runValidators: true
        })
        if (!data) {
            return res.status(404).send({
                message: new api404Error(`Không tồn tại ID: ${req.query._id}`)
            })
        }
        return res.status(200).send({
            message: new api200OK(`Update ID ${req.query._id} thành công`),
            data: data
        })
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: new api400Error('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: new api500Error(e.toString())
        });
    }
}


// Search asset placed
// exports.searchAsset = async (req, res) => {
//     try {
//         const response = await assetModel.find({
//             $and: [
//                 {asset_name: {$regex: req.query.asset_name || ''}},
//                 {asset_type: {$regex: req.query.asset_type || ''}},
//                 {asset_brand: {$regex: req.query.asset_brand || ''}},
//                 {asset_serial_number: {$regex: req.query.asset_serial_number || ''}},
//                 {asset_date_of_issue: {$regex: req.query.asset_date_of_issue || ''}},
//                 {name_placed: {$regex: req.query.asset_placed || ''}}
//             ]
//         })
//         return res.send({
//             message: new api200OK(`Dữ liệu được gửi lên thành công`),
//             record: response.length,
//             data: response
//         })
//     } catch (e) {
//         return new api500Error(e.toString())
//     }
// }
