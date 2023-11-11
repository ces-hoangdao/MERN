import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTIONS_STRING)
    console.log('connect DB success')
  } catch (error) {
    console.log('connect database error: ' + error)
  }
}
