import express, { Application, Request, Response } from "express"
import { createConnection } from "typeorm"
import { router as userRouter } from "./routes/user.routes"

const app: Application = express()

app.use("/api/v1", userRouter)

const port = 3001

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
