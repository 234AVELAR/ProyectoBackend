const express = require('express')
const { registerUser, loginUser } = require('../controllers/authController')
const router = express.Router()

router.post('auth/register', registerUser)
router.post('auth/SignIn', loginUser)

module.exports = router
