import express, { Router, Request, Response } from "express"
import postUser from "../controllers/user.controller"

export const router: Router = express.Router()
router.post("/user", postUser)

export default router
