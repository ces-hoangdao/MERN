import { Request, Response } from 'express'
import User from '../Models/UserModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SALT_ROUNDS = 10

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body
    await User.create({
      username,
      email,
      password: bcrypt.hashSync(`${password}`, SALT_ROUNDS),
      role: 'regular',
    })
    return res.status(200).send('register')
  } catch (error) {
    console.log('error', error)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
      return res.status(400).send('user not found')
    }
    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(400).send('incorrect password')
    }
    //create json token
    const accessToken = jwt.sign(
      { id: user._id, usernames: user.username, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIME,
      }
    )

    return res.status(200).send({ accessToken: accessToken })
  } catch (error) {
    console.log('error', error)
  }
}
