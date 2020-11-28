import express from "express"
import { StatusCodes } from "http-status-codes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("Hello World")
})

export { app }
