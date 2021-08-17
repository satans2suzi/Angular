const mongoose = require('mongoose')

const accessTokenSchema = mongoose.Schema({
    "token": {
        type: String,
        require: [true, 'Accesstoken is require!.']
    }

})

module.exports = mongoose.model('accessToken', accessTokenSchema)