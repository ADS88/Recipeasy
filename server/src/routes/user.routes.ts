import express, { Router, Request, Response } from "express"

export const router: Router = express.Router()
router.post("/user", (req: Request, resp: Response) => console.log("beans"))

export default router
