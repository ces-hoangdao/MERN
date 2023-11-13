import { Request, Response } from 'express'
import * as AuthService from '../Services/AuthServices'
import { HTTP_STATUS } from '../constants/HttpStatus'

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body
    const userData = await AuthService.register({
      username,
      email,
      password,
    })
    return res.status(HTTP_STATUS.CREATED).send(userData)
  } catch (error) {
    const errorMessage = error.message
    return res.status(HTTP_STATUS.INTERNAL_SERVER).send({ error: errorMessage })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const response = await AuthService.login({ email, password })
    return res.status(HTTP_STATUS.OK).send(response)
  } catch (error) {
    const errorMessage = error.message
    return res.status(HTTP_STATUS.INTERNAL_SERVER).send({ error: errorMessage })
  }
}
