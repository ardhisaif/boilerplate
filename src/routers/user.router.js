import express from 'express'
import user from '../controllers/user.controller.js'
const router = express.Router()

router.get('/:user_id', user.getUserByID)
router.post('/register', user.registerUser)
router.post('/login', user.loginUser)

export default router
