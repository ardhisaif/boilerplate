import express from 'express'
import user from '../controllers/user.controller.js'
import auth from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/', auth.jwt, user.getUserByID)
router.post('/register', user.registerUser)
router.post('/login', user.loginUser)
router.put('/', auth.jwt, user.updateUser)

export default router
