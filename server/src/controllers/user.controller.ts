import { Request, Response, NextFunction } from "express"
import createUser from "../services/user.service"
import { User } from "../entity/User"

const postUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { firstName, lastName, age } = req.body
    const user: User = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    createUser(user)
  } catch (e) {
    res.sendStatus(500)
  }
}

export default postUser
