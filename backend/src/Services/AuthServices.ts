import User from '../Models/UserModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SALT_ROUNDS = 10

export const register = async ({
  username,
  email,
  password,
}: {
  username: string
  email: string
  password: string
}) => {
  try {
    // check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      throw new Error('User already exists')
    }
    const user = await User.create({
      username,
      email,
      password: bcrypt.hashSync(`${password}`, SALT_ROUNDS),
    })
    const accessToken = jwt.sign(
      { id: user._id, usernames: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIME,
      }
    )
    const data = {
      username: user.username,
      email: user.email,
      accessToken,
    }
    return data
  } catch (error) {
    throw error
  }
}

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const user = await User.findOne({ email })
    if (!user) {
      throw Error('User not found')
    }
    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      throw new Error('Incorrect password please double check!')
    }
    const accessToken = jwt.sign(
      { id: user._id, usernames: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIME,
      }
    )
    const data = {
      username: user.username,
      email: user.email,
      accessToken,
    }
    return data
  } catch (error) {
    throw error
  }
}
