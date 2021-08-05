const userModel = require('../models/auth/user.model')
const apiStatusCode = require('../errors/apiStatusCode')



// Kiểm tra trùng username
const verifycheckDuplicateUserNameSignUp = async (req, res, next) => {
    try {
        const [awUsername, awEmail] = await Promise.all([
            userModel.findOne({ username: req.body.username }),
            userModel.findOne({ email: req.body.email })
        ])
        if (awUsername) {
            return res.status(400).send({
                message: apiStatusCode.status400('Yêu cầu không hợp lệ!.'),
                debugInfo: 'Duplicate username'
            })
        }
        if (awEmail) {
            return res.status(400).send({
                message: apiStatusCode.status400('Yêu cầu không hợp lệ!.'),
                debugInfo: 'Duplicate email'
            })
        }
        next()
    } catch (e) {
        return res.status(500).send({ message: apiStatusCode.status500('Lỗi Server!.') })
    }
}



module.exports = verifycheckDuplicateUserNameSignUp;