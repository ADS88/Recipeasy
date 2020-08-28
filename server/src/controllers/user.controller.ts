import { Request, Response, NextFunction } from "express"
import createUser from "../services/user.service"
import { User } from "../entity/user"

const postUser = async (req: Request, res: Response, next: NextFunction) => {
  let { firstName, lastName, age } = req.body
  const user: User = new User()
  user.firstName = firstName
  user.lastName = lastName
  user.age = age
  try {
    createUser(user)
    res.sendStatus(201)
  } catch (e) {
    res.sendStatus(500)
  }
}

export default postUser
