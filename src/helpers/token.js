import jwt from 'jsonwebtoken'
import { errThrow } from './response.js'

const secretPublic = process.env.SECRET_PUBLIC
const secretPrivate = process.env.SECRET_PRIVATE

export function generateToken(user_id, username) {
  try {
    const data = { user_id, username }
    const config = { expiresIn: '7d', algorithm: 'RS256' }
    
    const token = jwt.sign(data, secretPrivate, config)

    return token
  } catch (error) {
    throw error
  }
}

export async function matchToken(token) {
  try {
    const dataUser = verifyToken(token)
    const isInvalidDataToken = !dataUser.device_id || !dataUser.user_id

    errThrow(isInvalidDataToken, 401, 'Data token is invalid')

    return true
  } catch (error) {
    throw error
  }
}

export function verifyToken(token) {
  try {
    const data = jwt.verify(token, secretPublic)

    return data
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      error.status = 401
      error.message = 'Expired token, Silahkan login kembali'
    }
    throw error
  }
}

export async function jwtVerify(token) {
  try {
    verifyToken(token)
    return true
  } catch (error) {
    return false
  }
}
