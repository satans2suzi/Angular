const mongoose = require('mongoose')

const refreshTokenSchema = mongoose.Schema({
    "token": {
        type: String,
        require: [true, 'Refreshtoken is require!.']
    }

})

module.exports = mongoose.model('refreshToken', refreshTokenSchema)