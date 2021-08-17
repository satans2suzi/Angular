const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api200OK extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.OK,
        description = 'Request successful!.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

module.exports = Api200OK
