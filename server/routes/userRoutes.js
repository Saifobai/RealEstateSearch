


const express = require('express');
const { signUp, authLoginUser } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/signup', signUp)
router.post('/login', protect, authLoginUser)

module.exports = router