const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// 获取所有用户
router.get('/', UserController.getAllUsers);

// 创建新用户
router.post('/', UserController.createUser);

module.exports = router;
