import { z } from 'zod'
import { zodString } from '../helpers/zod.message.js'

export default {
  userID : z.object({
    user_id: zodString('user_id')
  }),

  registerUser: z.object({
    username: zodString('username'),
    password: zodString('password'),
  }),

  loginUser: z.object({
    username: zodString('username'),
    password: zodString('password')
  }),
  
}
