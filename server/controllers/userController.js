

const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const signUp = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body
    // validation 
    if (!name || !email || !password) {
        res.status(404);
        throw new Error('Please provide all the required fields');
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error(`${name} already exists`);
    }
    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        const token = generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})




// @desc    Login user and get token
// @route POST /api/
const authLoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Validate email and password
    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide an email and password');
    }
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        const token = generateToken(res, user._id)
        res.status(201).json({
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } else {
        res.status(401)
        throw new Error('Invalid user information')
    }

})

module.exports = { signUp, authLoginUser }