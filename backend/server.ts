import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { connectDB } from './src/Services/ConnectDb'
import userRouter from './src/Router/UserRouter'
import authRouter from './src/Router/AuthRouter'
import dotenv from 'dotenv'
import path from 'path'

const app: Express = express()

dotenv.config()
app.use(cors())
// Set static folder
app.use(express.static(path.join(__dirname, 'public')))
// Body parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
// Connect to the database (Mongoose)
connectDB()

// Middleware router
app.use('/api/users', userRouter)

app.use('/api/auth', authRouter)

// Return index file if requested url does not match api
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
