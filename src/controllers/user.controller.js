import { errResponse, okResponse } from '../helpers/response.js'
import user from '../services/user.service.js'
import validate from '../validators/user.validator.js'

export default {
  async getUserByID(req, res) {
    try {
      const { user_id } = validate.userID.parse(req.params)
      const data = await user.getUserByID(user_id)      
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'registerController')
    }
  },

  async registerUser(req, res) {
    try {
      const registerData = validate.registerUser.parse(req.body)
      const newUser = await user.registerUser(registerData)
      return okResponse(res, 'User registered successfully!', newUser)
    } catch (error) {
      return errResponse(error, res, 'registerUserController')
    }
  },

  async loginUser(req, res) {
    try {
      const loginData = validate.loginUser.parse(req.body)
      const token = await user.loginUser(loginData)
      return okResponse(res, 'Login successful!', token)
    } catch (error) {
      return errResponse(error, res, 'loginUserController')
    }
  },
}

