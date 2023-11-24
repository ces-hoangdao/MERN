import { Request, Response } from 'express'
import * as UserService from '../Services/UserServices'
import { HTTP_STATUS } from '../constants/HttpStatus'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getListUsers()
    return res.status(HTTP_STATUS.OK).send(users)
  } catch (error) {
    const errorMessage = error.message
    return res.status(HTTP_STATUS.INTERNAL_SERVER).send({ error: errorMessage })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await UserService.getUser(userId)
    return res.status(HTTP_STATUS.OK).send(user)
  } catch (error) {
    const errorMessage = error.message
    return res.status(HTTP_STATUS.INTERNAL_SERVER).send({ error: errorMessage })
  }
}
