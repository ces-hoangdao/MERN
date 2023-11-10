import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { connectDB } from './src/Services/ConnectDb'
import userRouter from './src/Router/UserRouter'
import authRouter from './src/Router/AuthRouter'
import dotenv from 'dotenv'

const app: Express = express()
app.use(cors())
dotenv.config()
// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Connect to the database (Mongoose)
connectDB()

// Middleware router
app.use('/api/users', userRouter)

app.use('/api/auth', authRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000')
})
