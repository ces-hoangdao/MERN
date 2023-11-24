import express from 'express'
import * as UserController from '../Controllers/UserController'
import * as Middleware from '../Middleware/AuthMiddleware'
const userRouter = express.Router()

userRouter.get('/', [Middleware.isAuthentication], UserController.getUsers)
userRouter.get(
  '/:userId',
  [Middleware.isAuthentication],
  UserController.getUser
)

export default userRouter
