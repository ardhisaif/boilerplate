import { z } from 'zod'
import { email, zodString } from '../helpers/zod.message.js'

export default {
  userID : z.object({
    user_id: zodString('user_id')
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
  
}
