const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    phonenumber: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [7, 'MinLength password 7 charactor']
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['Admin', 'User'],
        default: 'User',
    },
    accesstoken: {
        type: String,
    },
    refreshtoken: {
        type: String,
    }
})
userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// userSchema.methods.generateAuthToken = async function () {
//     // Generate an auth token for the user
//     const user = this
//     const token = jwt.sign({ _id: user._id, role: user.role, username: user.username }, process.env.JWT_KEY)
//     user.tokens = user.tokens.concat({ token })
//     await user.save()
//     return token
// }

// userSchema.statics.findByCredentials = async (username, password) => {
//     // Search for a user by email and password.
//     const user = await userModel.findOne({ username })
//     if (!user) {
//         throw new Error({ error: 'Invalid login credentials' })
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password)
// if (!isPasswordMatch) {
//     throw new Error({ error: 'Invalid login credentials' })
// }
//     return user
// }
const userModel = mongoose.model('User', userSchema)
module.exports = userModel
