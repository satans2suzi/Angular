const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class ApiStatusCode extends BaseError {

    status200(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.OK,
            description: 'Request successful!.'
        }
        return info;
    }

    status201(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.CREATED,
            description: 'Created!.'
        }
        return info;
    }

    status204(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.NO_CONTENT,
            description: 'No Content!.'
        }
        return info;
    }

    status400(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.BAD_REQUEST,
            description: 'Bad Request!.'
        }
        return info;
    }

    status401(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.UNAUTHORIZED,
            description: 'Unauthorized!.'
        }
        return info;
    }

    status403(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.FORBIDDEN,
            description: 'Request successful!.',
        }
        return info;
    }

    status404(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.NOT_FOUND,
            description: 'Not Found!.',
        }
        return info;
    }

    status500(name) {
        const info = {
            name: name,
            statusCode: httpStatusCodes.INTERNAL_SERVER,
            description: 'Internal Server Error!.',
        }
        return info;
    }
}


module.exports = new ApiStatusCode