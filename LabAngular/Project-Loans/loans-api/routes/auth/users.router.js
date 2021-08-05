var express = require('express');
var router = express.Router();
const authJWT = require('../../middleware/auth.middleware')
const checkDuplicateUserName = require('../../middleware/verifySignUp.middleware')
const authController = require('../../controllers/auth/users.controller')

// Lấy danh sách User
router.get('/list', authJWT.checkAuth, authJWT.isAdmin, authController.getAllUser)

// Đăng ký tài khoản http://localhost:3000/api/auth/register
router.post('/register', checkDuplicateUserName, authController.createUser)

// Đăng nhập tài khoản http://localhost:3000/api/auth/login
router.post('/login', authController.loginUser)

// Lấy thông tin tài khoản
router.get('/me', authJWT.checkAuth, authController.getMe)

// Đăng xuất tài khoản
router.post('/me/logout', authController.logoutUser)

// Đăng xuất tất cả tài khoản
router.post('/me/logoutall', authController.logoutUser)

// Test user Content
router.get('/test/usercontent', authController.testUserContent)
router.get('/test/modcontent', authController.testModContent)
router.get('/test/admincontent', authController.testAdminContent)

module.exports = router;
