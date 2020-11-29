import express, { Errback, NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import router from './routes'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND })
})

app.use((error: Errback, req: Request, res: Response, next: NextFunction) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
})

export { app }
