const jwt = require('jsonwebtoken')
const userModel = require('../models/auth/user.model')
const apiStatusCode = require('../errors/apiStatusCode')
class AuthJWT {
    // Kiểm tra token hợp lệ
    async checkAuth(req, res, next) {
        const token = req.header('Authorization').replace('Bearer ', '')
        try {
            const awData = await jwt.verify(token, process.env.JWT_KEY)
            if (!awData) {
                return res.status(401).send({
                    message: apiStatusCode.status401('Lỗi xác thực!.'),
                    debugInfo: 'Token không hợp lệ!.'
                })
            }
            const awUser = await userModel.findOne({ _id: awData._id, 'tokens.token': token })
            if (!awUser) {
                return res.status(401).send({
                    message: apiStatusCode.status401('Lỗi xác thực!.'),
                    debugInfo: 'Token hết hạn!.'
                })
            }
            req.role = awData.role;
            req.username = awUser.username;
            req.email = awUser.email;
            req.firstname = awUser.firstname;
            req.lastname = awUser.lastname;
            console.log(awData)
            next()
        } catch (e) {
            console.log(e)
            return res.status(401).send({
                message: apiStatusCode.status401('Lỗi xác thực!.'),
                debugInfo: 'Không xác thực được Token!.',
            })
        }
    }

    // Kiểm tra roles 
    async isAdmin(req, res, next) {
        if (req.role === 'Admin') {
            next()
        } else {
            res.status(403).send({
                message: apiStatusCode.status403('Cấm truy cập!.'),
                debugInfo: 'Không có quyền truy cập!.'
            })
        }
    }

    async isUser(req, res, next) {
        if (req.role === 'User') {
            next()
        } else {
            res.status(403).send({
                message: apiStatusCode.status403('Cấm truy cập!.'),
                debugInfo: 'Không có quyền truy cập!.'
            })
        }
    }
}


module.exports = new AuthJWT
