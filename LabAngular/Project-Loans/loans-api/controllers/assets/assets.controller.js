const assetModel = require('../../models/assets/asset.model')
const mongoose = require('mongoose');
const api200OK = require('../../errors/api200OK')
const api400Error = require('../../errors/api400Error')
const api404Error = require('../../errors/api404Error')
const api500Error = require('../../errors/api500Error')
// Get all assets
exports.listAsset = async (req, res) => {
    try {
        var data = await assetModel.aggregate([
            {
                $match: {}
            },
            {
                $lookup: {
                    from: 'assetplaceds',
                    localField: 'asset_placed',
                    foreignField: '_id',
                    as: 'child_placed'
                }
            }]).exec();
        return res.send({
            message: new api200OK(`Lấy dữ liệu thành công`),
            record: data.length,
            data: data
        });
    } catch (err) {
        return res.send({
            message: new api500Error(`Lấy dữ liệu không thành công`)
        })
    }
}

// Get details asset
exports.detailsAsset = async (req, res) => {
    try {
        var data = await assetModel.aggregate([
            {
                $match: {_id: mongoose.Types.ObjectId(req.query._id)}
            },
            {
                $lookup: {
                    from: 'assetplaceds',
                    localField: 'asset_placed',
                    foreignField: '_id',
                    as: 'child_placed'
                }
            }
        ]).exec((err, result) => {
            if (result.length === 0) {
                return res.send({
                    message: new api404Error(`Không tồn tại tài sản có ID: ${req.query._id}`)
                })
            }
            return res.send({
                message: new api200OK(`Tìm thấy tài sản có ID: ${req.query._id} thành công`),
                data: result
            });
        });
    } catch (e) {
        if (!data) {
            res.send({
                message: new api400Error(e.toString())
            });
        }
        return new api500Error(`Lỗi server.`);
    }
}

// POST Create asset
exports.createAsset = async (req, res) => {
    try {
        var data = await assetModel.create(req.body)
        if (!data) {
            return res.send({
                message: new api404Error(`Không có dữ liệu gửi lên`)
            })
        }
        return res.status(200).send({
            message: new api200OK(`Dữ liệu được gửi lên thành công`),
            data: data
        })
    } catch (e) {
        return new api500Error(e.toString())
    }
}

// DELETE Delete asset
exports.deleteAsset = async (req, res) => {
    try {
        var data = await assetModel.findByIdAndDelete(req.query._id)
        if (!data) {
            return res.send({
                message: new api404Error(`Không tìm thấy tài sản có ID: ${req.query._id}`)
            })
        }
        return res.send({
            message: new api200OK(`Xoá tài sản ID: ${req.query._id} thành công`),
            data: data
        });
    } catch (e) {
        if (e.kind === 'ObjectId' || e.name === 'NotFound') {
            return res.send({
                message: new api404Error(`Không tìm thấy tài sản có ID: ${req.query._id}`)
            })
        }
        return new api500Error(`Lỗi server.`)
    }
}

// UPDATE asset
exports.updateAsset = async (req, res) => {
    try {
        let dataObj = req.body
        const response = await Promise.all([
            dataObj,
            assetModel.findOneAndUpdate({_id: req.query._id}, dataObj, {useFindAndModify: false})
        ])
        // if (!response[0]){
        //     res.send({
        //         message: 'khong duoc de trong'
        //     })
        // }
        return res.send({
            message: new api200OK(`cập nhật tài sản ID: ${req.query._id} thành công`),
            data: response
        });
        // return res.send(response)
    } catch (e) {
        res.send(response)
    }


    // if (req.body === false) {
    //     return res.status(400).send({
    //         message: 'Các trường không nên để trống!',
    //         data: req.body
    //     })
    // }
    // console.log(!req.body)
    // let assetObj = {
    //     _id: req.query._id,
    //     asset_name: req.body.asset_name,
    //     asset_type: req.body.asset_type,
    //     asset_brand: req.body.asset_brand,
    //     asset_serial_number: req.body.asset_serial_number,
    //     asset_date_of_issue: req.body.asset_date_of_issue,
    //     asset_price: req.body.asset_price,
    //     asset_status_in_stock: req.body.asset_status_in_stock
    // };
    // assetModel.findByIdAndUpdate(req.query._id, assetObj)
    //     .then(data => {
    //         if (!data) {
    //             return res.status(404).send({
    //                 message: `Không tìm tài sản có ID: ${req.query._id}`
    //             })
    //         } else {
    //             return res.status(200).send({
    //                 message: `Update ID ${req.query._id} Thành công`,
    //                 data: data
    //             })
    //         }
    //     }).catch(err => {
    //     if (err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: `Không tìm thấy ID: ${req.query._id}`
    //         });
    //     } else {
    //         return res.status(500).send({
    //             data: data,
    //             message: `Có lỗi trong quá trình cập nhật ID: ${req.query._id}`
    //         });
    //     }
    // })
}

// GET search assets
exports.searchAsset = (req, res) => {

}
