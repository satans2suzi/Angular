var express = require('express');
var router = express.Router();
var authJWT = require('../../middleware/auth.middleware')
const checkDuplicateUserName = require('../../middleware/verifySignUp.middleware')
const authController = require('../../controllers/auth/users.controller')

// Lấy danh sách User
router.get('/list', authJWT.verifyToken, authJWT.isAdmin, authController.getAllUser)
// router.get('/list', authController.getAllUser)

// Đăng ký tài khoản http://localhost:3000/api/auth/register
router.post('/register', checkDuplicateUserName, authController.createUser)

// Đăng nhập tài khoản http://localhost:3000/api/auth/login
router.post('/login', authController.loginUser)

// Lấy thông tin tài khoản
router.get('/me', authJWT.verifyToken, authController.getMe)

// Đăng xuất tài khoản
router.post('/logout', authJWT.verifyToken, authController.logoutUser)

// Đăng xuất tất cả tài khoản
router.post('/me/logoutall', authController.logoutUser)

// Refresh token
router.post('/refreshtoken', authJWT.verifyRefreshToken, authController.refreshTK)


// Test user Content

module.exports = router;
