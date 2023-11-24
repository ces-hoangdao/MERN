import User from '../Models/UserModel'
// get list of users

export const getListUsers = async () => {
  const users = await User.find()
  return users
}

export const getUser = async (userId: string) => {
  const user = await User.findById(userId)
  return user
}
