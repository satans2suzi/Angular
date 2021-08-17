const assetModel = require('../../models/assets/asset.model')
const assetPlacedModel = require('../../models/assets/asset_placed.model')
const mongoose = require('mongoose');
const apiStatusCode = require('../../errors/apiStatusCode')



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
                    },
                    {
                        $project: {
                            asset_name: 1,
                            asset_status_in_stock: 1,
                            asset_type: 1,
                            asset_brand: 1,
                            asset_serial_number: 1,
                            asset_price: 1,
                            asset_date_of_issue: {
                                $dateToString: {
                                    format: "%d-%m-%Y", date: "$asset_date_of_issue"
                                }
                            },
                            asset_placed: {
                                $map: {
                                    input: "$asset_placed",
                                    as: "item",
                                    in: {
                                        name_placed: "$$item.name_placed",
                                        date_of_invoice: {
                                            $dateToString: {
                                                format: "%d-%m-%Y", date: "$$item.date_of_invoice"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ])
                    .skip((parseInt(req.query.page) - 1) * 5)
                    .limit(5)
                return res.status(200).send({
                    message: apiStatusCode.status200(`Lấy dữ liệu thành công`),
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
                    },
                    {
                        $project: {
                            _id: 1,
                            asset_name: 1,
                            asset_status_in_stock: 1,
                            asset_type: 1,
                            asset_brand: 1,
                            asset_serial_number: 1,
                            asset_price: 1,
                            asset_date_of_issue: {
                                $dateToString: {
                                    format: "%d-%m-%Y", date: "$asset_date_of_issue"
                                }
                            },
                            asset_placed: {
                                $map: {
                                    input: "$asset_placed",
                                    as: "item",
                                    in: {
                                        _id: "$$item._id",
                                        name_placed: "$$item.name_placed",
                                        date_of_invoice: {
                                            $dateToString: {
                                                format: "%d-%m-%Y", date: "$$item.date_of_invoice"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]);
                return res.status(200).send({
                    message: apiStatusCode.status200(`Lấy dữ liệu thành công`),
                    record: data.length,
                    data: data
                });
            }

        } catch (e) {
            console.log(e)
            return res.status(500).send({
                message: apiStatusCode.status500(`Lấy dữ liệu không thành công`),
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
                },
                {
                    $project: {
                        _id: 1,
                        asset_name: 1,
                        asset_status_in_stock: 1,
                        asset_type: 1,
                        asset_brand: 1,
                        asset_serial_number: 1,
                        asset_price: 1,
                        asset_date_of_issue: {
                            $dateToString: {
                                format: "%d-%m-%Y", date: "$asset_date_of_issue"
                            }
                        },
                        asset_placed: {
                            $map: {
                                input: "$asset_placed",
                                as: "item",
                                in: {
                                    _id: "$$item._id",
                                    name_placed: "$$item.name_placed",
                                    date_of_invoice: {
                                        $dateToString: {
                                            format: "%d-%m-%Y", date: "$$item.date_of_invoice"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ])
            if (!awId) {
                return res.status(404).send({
                    message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
                })
            }
            return res.status(200).send({
                message: apiStatusCode.status200(`Tìm thấy tài sản có ID: ${req.query._id} thành công`),
                data: awData[0]
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
    }

    // [Get] details asset placed http://localhost:3000/api/assets/view_details_placed?_id=
    // async detailsAssetPlaced(req, res) {
    //     try {
    //         // const [aw_id, aw_data] = await Promise.all([
    //         const awId = await assetModel.findById(req.query._id)
    //         const awData = await assetModel.aggregate([
    //             {
    //                 $match: { _id: mongoose.Types.ObjectId(req.query._id) }
    //             },
    //             {
    //                 $project: { asset_placed: 1 }
    //             },
    //             {
    //                 $lookup: {
    //                     from: 'assetplaceds',
    //                     localField: 'asset_placed',
    //                     foreignField: '_id',
    //                     as: 'asset_placed'
    //                 }
    //             }
    //         ])
    //         if (!awId) {
    //             return res.status(404).send({
    //                 message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
    //             })
    //         }
    //         return res.status(200).send({
    //             message: apiStatusCode.status200(`Tìm thấy tài sản có ID: ${req.query._id} thành công`),
    //             data: awData
    //         });
    //     } catch (e) {
    //         if (e.kind === 'ObjectId') {
    //             return res.status(400).send({
    //                 message: apiStatusCode.status400('ID không hợp lệ')
    //             });
    //         }
    //         return res.status(500).send({
    //             message: apiStatusCode.status500(e.toString())
    //         });
    //     }
    // }

    // POST Create asset http://localhost:3000/api/assets/create
    async createAsset(req, res) {
        try {
            const data = await assetModel.create(req.body)
            return res.status(201).send({
                message: apiStatusCode.status201(`Dữ liệu được gửi lên thành công`),
                data: data
            })
        } catch (e) {
            console.log(e + '')
            return res.status(400).send({
                message: apiStatusCode.status400('Something went wrong'),
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
                    message: apiStatusCode.status404(`Không tồn tại ID: ${req.query._id}`)
                })
            }
            await assetPlacedModel.deleteMany({ _id: { $in: data.asset_placed } })
            return res.status(200).send({
                message: apiStatusCode.status200(`Dữ liệu có ID: ${req.query._id} được xoá thành công`),
                data: data
            })
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
                    message: napiStatusCode.status404(`Không tìm thấy tài sản có ID: ${req.query._id}`)
                })
            }
            return res.status(200).send({
                message: apiStatusCode.status200(`Cập nhật tài sản ID: ${req.query._id} thành công`),
                data: data,
            });
        } catch (e) {
            if (e.kind === 'ObjectId') {
                return res.status(400).send({
                    message: apiStatusCode.status400(`Không tìm thấy tài sản có ID: ${req.query._id}`)
                })
            }
            console.log(e)
            return res.status(500).send({
                message: apiStatusCode.status500(e.toString())
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
                message: apiStatusCode.status200(`Tìm thành công`),
                record: data.length,
                data: data
            })
        } catch (e) {
            return apiStatusCode.status500(e.toString())
        }
    }
}

module.exports = new AssetController;
