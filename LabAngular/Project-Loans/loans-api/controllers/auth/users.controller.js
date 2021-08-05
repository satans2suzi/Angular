const usersModel = require('../../models/auth/user.model')
const mongoose = require('mongoose');
const apiStatusCode = require('../../errors/apiStatusCode')

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

    async createUser(req, res) {
        try {
            const user = new usersModel(req.body);
            await user.save();
            // const token = await user.generateAuthToken();
            res.status(201).send({
                data: user
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({
                message: new api400Error(`Something require`),
                debugInfo: errorFormatter(e.toString())
            })
        }
    }

    async loginUser(req, res) {
        try {
            const { username, password } = req.body
            const user = await usersModel.findByCredentials(username, password)

            if (!user) {
                return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }

    async getMe(req, res) {
        // View logged in user profile
        res.send({
            message: req.user,
            role: req.role,
            username: req.username,
            email: req.email,
            firstname: req.firstname,
            lastname: req.lastname
        })
    }

    async logoutUser(req, res) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
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

    async testUserContent(req, res) {
        return res.send('user content')
    }

    async testModContent(req, res) {
        return res.send('Mod Content')
    }

    async testAdminContent(req, res) {
        return res.send('Admin Content')
    }
}

module.exports = new UsersController;
