import express, { Router, Request, Response } from "express"
export const router: Router = express.Router()

router.post("/user", (req: Request, resp: Response) => console.log("beans"))
router.get("/user", (req: Request, resp: Response) => resp.json({"message": "Hello"}))

export default router
