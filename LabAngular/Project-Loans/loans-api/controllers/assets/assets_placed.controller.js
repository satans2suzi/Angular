const assetPlacedModel = require('../../models/assets/asset_placed.model');
const assetModel = require('../../models/assets/asset.model');
const mongoose = require('mongoose');
const apiStatusCode = require('../../errors/apiStatusCode');

const errorFormatter = e => {
    let errors = {};
    const allErrors = e.substring(e.indexOf(':') + 1).trim();
    const allErrorsInArrayFormat = allErrors.split(',').map(err => err.trim());
    allErrorsInArrayFormat.forEach(error => {
        const [key, value] = error.split(':').map(err => err.trim());
        errors[key] = value;
    });
    return errors;
};

// [POST] all list http://localhost:3000/api/asset_placed/list
exports.listAssetPlace = async (req, res) => {
    try {
        const data = await assetPlacedModel.find({
            _id: {$in: req.body._idArray}
        }).sort({date_of_invoice: -1})
            .limit(2).limit()
            .skip((parseInt(req.query.page) - 1) * 2)
        return res.status(200).send({
            message: apiStatusCode.status200(`Lấy dữ liệu thành công`),
            data: data,
            record: data.length,
            totalPage: Math.ceil(data.length / 10)

        });
    } catch (e) {
        return res.status(500).send({
            message: apiStatusCode.status500(`Lấy dữ liệu không thành công`),
            err: e.toString()
        });
    }
};

// [GET] all list http://localhost:3000/api/asset_placed/view?_id=
exports.detailsAssetPlace = async (req, res) => {
    try {
        const data = await assetPlacedModel.find({_id: req.query._id});
        if (!data) {
            return res.status(404).send({
                message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
            });
        }
        return res.send({
            message: apiStatusCode.status200(`Tìm thấy dữ liệu có ID: ${req.query._id} thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: apiStatusCode.status400('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: apiStatusCode.status500(e.toString())
        });
    }
};

// [POST] http://localhost:3000/api/asset_placed/:id_asset/create
exports.createAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.create(req.body);
        const push = await assetModel.findOneAndUpdate({_id: req.params.id_asset}, {$push: {asset_placed: data._id}}, {
            useFindAndModify: false,
            runValidators: true
        });
        return res.status(201).send({
            message: apiStatusCode.status201(`Tạo dữ liệu thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(402).send({
                message: apiStatusCode.status402(`ID asset không tồn tại`)
            });
        }
        return res.status(400).send({
            message: apiStatusCode.status400('Something went wrong'),
            debugInfo: errorFormatter(e.message)
        });
    }
};

// [DELETE] http://localhost:3000/api/asset_placed/delete?_id=
exports.deleteAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.findByIdAndRemove(req.query._id);
        await assetModel.findOneAndUpdate(
            {asset_placed: req.query._id},
            {$pull: {asset_placed: req.query._id}},
            {useFindAndModify: false}
        );
        if (!data) {
            return res.status(404).send({
                message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
            });
        }
        return res.status(200).send({
            message: apiStatusCode.status200(`Dữ liệu có ID: ${req.query._id} được xoá thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: apiStatusCode.status400('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: apiStatusCode.status500(e.toString())
        });
    }
};

// [PUT] http://localhost:3000/api/asset_placed/update
exports.updateAssetPlaced = async (req, res) => {
    try {
        const data = await assetPlacedModel.findOneAndUpdate({_id: req.query._id}, req.body, {
            useFindAndModify: false,
            runValidators: true
        });
        if (!data) {
            return res.status(404).send({
                message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
            });
        }
        return res.status(200).send({
            message: apiStatusCode.status200(`Update ID ${req.query._id} thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId') {
            return res.status(400).send({
                message: apiStatusCode.status400('ID không hợp lệ')
            });
        }
        return res.status(500).send({
            message: napiStatusCode.status500(e.toString())
        });
    }
};


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
