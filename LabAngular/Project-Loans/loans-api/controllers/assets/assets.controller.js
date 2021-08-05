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

class AssetController {
    // [GET] all list http://localhost:3000/api/assets/list
    async listAsset(req, res) {
        try {
            if (req.query.page) {
                const data = await assetModel.aggregate([
                    {
                        $match: {}
                    },
                    {
                        $lookup: {
                            from: 'assetplaceds',
                            localField: 'asset_placed',
                            foreignField: '_id',
                            as: 'asset_placed'
                        }
                    }])
                    .skip((parseInt(req.query.page) - 1) * 5)
                    .limit(5)
                return res.status(200).send({
                    message: new api200OK(`Lấy dữ liệu thành công`),
                    record: data.length,
                    data: data
                });
            } else {
                const data = await assetModel.aggregate([
                    {
                        $match: {}
                    },
                    {
                        $lookup: {
                            from: 'assetplaceds',
                            localField: 'asset_placed',
                            foreignField: '_id',
                            as: 'asset_placed'
                        }
                    }]);
                return res.status(200).send({
                    message: new api200OK(`Lấy dữ liệu thành công`),
                    record: data.length,
                    data: data
                });
            }

        } catch (e) {
            return res.status(500).send({
                message: new api500Error(`Lấy dữ liệu không thành công`),
                debugInfo: errorFormatter(e.message)
            })
        }
    }

    // [GET] detailsAsset http://localhost:3000/api/assets/view?_id=
    async detailsAsset(req, res) {
        try {
            // const [aw_id, aw_data] = await Promise.all([
            const awId = await assetModel.findById(req.query._id)
            const awData = await assetModel.aggregate([
                {
                    $match: { _id: mongoose.Types.ObjectId(req.query._id) }
                },
                {
                    $lookup: {
                        from: 'assetplaceds',
                        localField: 'asset_placed',
                        foreignField: '_id',
                        as: 'asset_placed'
                    }
                }
            ])
            if (!awId) {
                return res.status(404).send({
                    message: new api404Error(`Không tồn tại ID: ${req.query._id}`)
                })
            }
            return res.status(200).send({
                message: new api200OK(`Tìm thấy tài sản có ID: ${req.query._id} thành công`),
                data: awData
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

    // [Get] details asset placed http://localhost:3000/api/assets/view_details_placed?_id=
    async detailsAssetPlaced(req, res) {
        try {
            // const [aw_id, aw_data] = await Promise.all([
            const awId = await assetModel.findById(req.query._id)
            const awData = await assetModel.aggregate([
                {
                    $match: { _id: mongoose.Types.ObjectId(req.query._id) }
                },
                {
                    $project: { asset_placed: 1 }
                },
                {
                    $lookup: {
                        from: 'assetplaceds',
                        localField: 'asset_placed',
                        foreignField: '_id',
                        as: 'asset_placed'
                    }
                }
            ])
            if (!awId) {
                return res.status(404).send({
                    message: new api404Error(`Không tồn tại ID: ${req.query._id}`)
                })
            }
            return res.status(200).send({
                message: new api200OK(`Tìm thấy tài sản có ID: ${req.query._id} thành công`),
                data: awData
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

    // POST Create asset http://localhost:3000/api/assets/create
    async createAsset(req, res) {
        try {
            const data = await assetModel.create(req.body)
            return res.status(200).send({
                message: new api200OK(`Dữ liệu được gửi lên thành công`),
                data: data
            })
        } catch (e) {
            console.log(e + '')
            return res.status(400).send({
                message: new api400Error('Something went wrong'),
                debugInfo: errorFormatter(e.message)
            })
        }
    }

    // DELETE Delete asset http://localhost:3000/api/assets/delete?_id=
    async deleteAsset(req, res) {
        try {
            var data = await assetModel.findByIdAndDelete(req.query._id)
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

    // UPDATE asset http://localhost:3000/api/assets/update?_id=
    async updateAsset(req, res) {
        try {
            const data = await assetModel.findOneAndUpdate({ _id: req.query._id }, req.body, {
                useFindAndModify: false,
                runValidators: true
            })
            if (!data) {
                return res.status(404).send({
                    message: new api404Error(`Không tìm thấy tài sản có ID: ${req.query._id}`)
                })
            }
            return res.status(200).send({
                message: new api200OK(`Cập nhật tài sản ID: ${req.query._id} thành công`),
                data: data,
            });
        } catch (e) {
            if (e.kind === 'ObjectId') {
                return res.status(400).send({
                    message: new api400Error(`Không tìm thấy tài sản có ID: ${req.query._id}`)
                })
            }
            console.log(e)
            return res.status(500).send({
                message: new api500Error(e.toString())
            });
        }
    }

    // GET search assets
    async searchAsset(req, res) {
        try {
            // const data = await assetModel.find({$text: {$search: "\req.params.query\}})
            // const response = await assetModel.find({
            //     $and: [
            //         {asset_name: {$regex: req.query.asset_name || ' '}},
            //         {asset_type: {$regex: req.query.asset_type || ' '}},
            //         {asset_brand: {$regex: req.query.asset_brand || ' '}},
            //         {asset_serial_number: {$regex: req.query.asset_serial_number || ' '}},
            //         {asset_date_of_issue: {$regex: req.query.asset_date_of_issue || ' '}}
            //         // {name_placed: {$in :{$regex: req.query.asset_placed || ''}}}
            //     ]
            // })
            return res.send({
                message: new api200OK(`Tìm thành công`),
                record: data.length,
                data: data
            })
        } catch (e) {
            return new api500Error(e.toString())
        }
    }
}

module.exports = new AssetController;
