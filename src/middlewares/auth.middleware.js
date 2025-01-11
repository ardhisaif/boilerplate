import { errResponse, errThrow } from '../helpers/response.js'
import { matchToken, verifyToken } from '../helpers/token.js'

export default {
  async auth(req, res, next) {
    try {
      const token = req.headers['auth_security']

      errThrow(!token, 401, 'Anda tidak memiliki hak akses, Silahkan login kembali')

      const dataToken = verifyToken(token)
      
      await matchToken(token)

      req.user = { ...dataToken, token: token }

      return next()
    } catch (error) {
      return errResponse(error, res, 'auth')
    }
  },

  // confirmLogin
  async jwt(req, res, next) {
    try {
      const token = req.headers['auth_security']

      errThrow(!token, 401, 'Anda tidak memiliki hak akses, Silahkan login kembali')

      const dataToken = verifyToken(token)

      req.user = dataToken

      return next()
    } catch (error) {
      return errResponse(error, res, 'jwt')
    }
  },
}

