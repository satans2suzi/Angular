const usersModel = require('../../models/auth/user.model')
const mongoose = require('mongoose');
const apiStatusCode = require('../../errors/apiStatusCode')
var jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userModel = require('../../models/auth/user.model');
var accessTokenModel = require('../../models/auth/accessToken.model')
var refreshTokenModel = require('../../models/auth/refreshToken.model')

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

let generateAuthToken = async payload => {
    const { id, username, role } = payload;
    // Create JWT

    const [encode_accToken, encode_rfToken] = await Promise.all([
        jwt.sign({ id: id, role: role, username: username }, process.env.JWT_KEY, { expiresIn: process.env.ACC_TOKEN_TIME }),
        jwt.sign({ id: id, role: role, username: username }, process.env.JWT_KEY_REFRESH, { expiresIn: process.env.RF_TOKEN_TIME })
    ])
    return { encode_accToken, encode_rfToken }
}

const removeAccessToken = async (id_user, access_token) => {
    const data = await userModel.findOneAndUpdate(
        { _id: id_user },
        { accesstoken: '' },
        { useFindAndModify: false }
    )
}
const removeRefreshToken = async (id_user, refresh_token) => {
    const data = await userModel.findOneAndUpdate(
        { _id: id_user },
        { refreshtoken: '' },
        { useFindAndModify: false }
    )
}

class UsersController {

    async getAllUser(req, res, next) {
        try {
            const data = await usersModel.find({})
            return res.status(200).send({
                message: apiStatusCode.status200(`Lấy dữ liệu thành công`),
                data: data
            })
        } catch (err) {
            return res.status(500).send({
                message: apiStatusCode.status500(err.toString())
            })
        }
    }
    //[POST] http://localhost:3000/auth/register 
    async createUser(req, res) {
        try {
            const user = new usersModel(req.body);
            await user.save();
            // const token = await user.generateAuthToken();
            return res.status(201).send({
                message: apiStatusCode.status201('Tạo tài khoản thành công!.'),
                data: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    phonenumber: user.phonenumber,
                    role: user.role
                }
            })
        } catch (e) {
            return res.status(400).send({
                message: apiStatusCode.status400(`Thông tin nhập không đầy đủ!.`),
                error: errorFormatter(e.toString())
            })
        }
    }
    //[POST] http://localhost:3000/auth/login 
    async loginUser(req, res) {
        try {
            const { username, password } = req.body
            const user = await usersModel.findOne({ username: username })
            if (!user) {
                return res.status(401).send({
                    message: apiStatusCode.status401('Đăng nhập không thành công!.'),
                    error: 'Tài khoản không tồn tại'
                })
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (!isPasswordMatch) {
                return res.status(401).send({
                    message: apiStatusCode.status401('Đăng nhập không thành công!.'),
                    error: 'Mật khẩu không chính xác'
                })
            }
            const payload = {
                id: user._id,
                username: user.username,
                role: user.role
            };
            console.log(payload)
            const { encode_accToken, encode_rfToken } = await generateAuthToken(payload);
            await userModel.findByIdAndUpdate(
                user._id,
                {
                    accesstoken: encode_accToken,
                    refreshtoken: encode_rfToken

                },
                { useFindAndModify: false }
            )
            res.cookie('jwt_ac', encode_accToken, { httpOnly: true })
            res.cookie('jwt_rf', encode_rfToken, { httpOnly: true })
            return res.status(200).send({
                message: apiStatusCode.status200('Đăng nhập thành công'),
                data: {
                    username: username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    phonenumber: user.phonenumber,
                    role: user.role
                },
                accessToken: encode_accToken,
                refreshToken: encode_rfToken
            })
        } catch (error) {
            console.log(error)
            return res.status(500).send({
                message: apiStatusCode.status500('Lỗi Server!.'),
                error: e.toString()
            })
        }
    }

    async getMe(req, res) {
        // View logged in user profile
        return res.status(200).send({
            message: apiStatusCode.status200('Lấy dữ liệu thành công!.'),
            data: {
                role: req.role,
                username: req.username,
                email: req.email,
                firstname: req.firstname,
                lastname: req.lastname,
                phonenumber: req.phonenumber
            }
        })
    }

    async logoutUser(req, res) {
        try {
            await Promise.all([
                removeAccessToken(req.id, req.cookies.jwt_ac),
                removeRefreshToken(req.id, req.cookies.jwt_rf)
            ])
            return res.status(200).send({
                message: apiStatusCode.status200('Đăng xuất thành công')
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }

    async logoutAll(req, res) {
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async refreshTK(req, res) {
        try {
            const payload = {
                id: req.id,
                username: req.username,
                role: req.role
            };
            console.log(payload);
            const [, , { encode_accToken, encode_rfToken }] = await Promise.all([
                removeAccessToken(req.id, req.accesstoken),
                removeRefreshToken(req.id, req.refreshtoken),
                generateAuthToken(payload)
            ])
            await userModel.findByIdAndUpdate(
                req.id,
                {
                    accesstoken: encode_accToken,
                    refreshtoken: encode_rfToken
                }
                ,
                { useFindAndModify: false }
            )
            res.cookie('jwt_ac', encode_accToken)
            res.cookie('jwt_rf', encode_rfToken)
            return res.send({
                rf_token: req.refreshtoken,
                ac_token: req.accesstoken,
                new_ac_token: encode_accToken,
                new_rf_token: encode_rfToken
            })
        } catch (e) {
            res.send(e)
        }

    }

}

module.exports = new UsersController;
