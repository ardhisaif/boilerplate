import { errThrow } from '../helpers/response.js'
import { generateToken } from '../helpers/token.js'
import user from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export default {
  async getUserByID(userID) {
    try {
      const data = await user.getUserByID(userID)
      return data
    } catch (error) {
      throw error
    }
  },

  async registerUser(userData) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(userData.password, salt)
      userData.password = hashedPassword
      
      const isUserExist = await user.getUserByUsername(userData.username)
      errThrow(isUserExist, 400, 'User already exists!')

      const newUser = await user.registerUser(userData)

      return newUser
    } catch (error) {
      throw error
    }
  },


  async loginUser(credentials) {
    try {      
      const foundUser = await user.getUserByUsername(credentials.username)
      if (!foundUser) {
        errThrow(true, 400, 'Invalid username or password!')
      }

      const isMatch = await bcrypt.compare(credentials.password, foundUser.password)
      
      if (!isMatch) {
        errThrow(true, 400, 'Invalid username or password!')
      }

      const token = generateToken(foundUser.id, foundUser.username)
      return { token, username: foundUser.username }
    } catch (error) {
      throw error
    }
  },
}
