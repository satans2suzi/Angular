const userModel = require('../models/auth/user.model')
const apiStatusCode = require('../errors/apiStatusCode')



// Kiểm tra trùng username
const verifycheckDuplicateUserNameSignUp = async (req, res, next) => {
    try {
        const { username, email } = req.body;
        const [awUsername, awEmail] = await Promise.all([
            userModel.findOne({ username: username }),
            userModel.findOne({ email: email })
        ])
        if (awUsername) {
            return res.status(400).send({
                message: apiStatusCode.status400('Tạo tài khoản không thành công!.'),
                error: 'Tên tài khoản đã được sử dụng'
            })
        }
        if (awEmail) {
            return res.status(400).send({
                message: apiStatusCode.status400('Tạo tài khoản không thành công!.'),
                error: 'Email đã được sử dụng'
            })
        }
        next()
    } catch (e) {
        return res.status(500).send({ message: apiStatusCode.status500('Lỗi Server!.') })
    }
}



module.exports = verifycheckDuplicateUserNameSignUp;