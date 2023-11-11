import express from 'express'
import { register, login } from '../Controllers/AuthController'
const authRouter = express.Router()

authRouter.post('/sign-up', register)
authRouter.post('/login', login)

export default authRouter
