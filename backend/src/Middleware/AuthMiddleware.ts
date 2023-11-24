import { Request, Response, NextFunction } from 'express'
import { HTTP_STATUS } from '../constants/HttpStatus'
import jwt, { TokenExpiredError } from 'jsonwebtoken'

export const isAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.headers['authorization'].split(' ')[1]
    if (!accessToken) {
      return res.status(HTTP_STATUS.FORBIDDEN).send('No token provided')
    }
    const decodeJwt = jwt.verify(accessToken, process.env.JWT_SECRET)
    // req.userId = decodeJwt._id
    next()
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .send({ error: 'Token expired' })
    }
  }
}
