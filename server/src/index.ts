import express, { Application, Request, Response } from "express"
import { createConnection } from "typeorm"
import { router as userRouter } from "./routes/user.routes"

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express()
    this.app.use(express.json())
    this.port = appInit.port

    this.assets()
  }

  private assets() {
    this.app.use("/api/v1", userRouter)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening to requests on http://localhost:${this.port}`)
    })
  }
}

export default App
