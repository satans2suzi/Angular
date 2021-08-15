const jwt = require('jsonwebtoken')
const userModel = require('../models/auth/user.model')
const apiStatusCode = require('../errors/apiStatusCode')


class AuthJWT {
    // Kiểm tra token hợp lệ
    async verifyToken(req, res, next) {
        const accessToken = req.cookies.jwt_ac
        // const get_token = req.header('Authorization').replace('Bearer ', '')
        try {
            const decode = await jwt.verify(accessToken, process.env.JWT_KEY)
            const user = await userModel.findOne({ _id: decode.id, accesstoken: accessToken })
            req.id = decode.id
            req.role = user.role;
            req.username = user.username;
            req.email = user.email;
            req.firstname = user.firstname;
            req.lastname = user.lastname;
            req.phonenumber = user.phonenumber;
            next()
        } catch (e) {
            return res.status(401).send({
                message: apiStatusCode.status401('Lỗi xác thực!.'),
                debugInfo: 'Không xác thực được Token hoặc Token hêt hạn!.',
            })
        }
    }

    async verifyRefreshToken(req, res, next) {
        const accessToken = req.cookies.jwt_ac
        const refreshToken = req.cookies.jwt_rf
        if (!refreshToken || !accessToken) {
            return res.status(401).send({
                message: apiStatusCode.status401('Lỗi xác thực!.'),
                debugInfo: 'RefreshToken is requied!.',
            });
        }
        try {
            const decode = await jwt.verify(refreshToken, process.env.JWT_KEY_REFRESH);
            const user = await userModel.findOne({ _id: decode.id, refreshtoken: refreshToken })
            req.id = decode.id
            req.username = user.username;
            req.role = user.role;
            req.accesstoken = accessToken;
            req.refreshtoken = refreshToken;
            next()
        } catch (e) {
            return res.status(401).send({
                message: apiStatusCode.status401('Lỗi xác thực!.'),
                debugInfo: 'Token không tồn tại hoặc không đúng!.'
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
