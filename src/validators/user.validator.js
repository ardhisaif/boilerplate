import { z } from 'zod'
import { email, zodNumber, zodString } from '../helpers/zod.message.js'

export default {
  userID : z.object({
    user_id: zodNumber('user_id')
  }),

  registerUser: z.object({
    username: zodString('username'),
    email: email('email'),
    password: zodString('password'),
  }),

  loginUser: z.object({
    email: email('email'),
    password: zodString('password')
  }),

  updateUser: z.object({
    username: zodString('username').optional(),
    email: email('email').optional(),
    password: zodString('password').optional()
  }),
  
}
