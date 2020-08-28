import { Request, Response, NextFunction } from "express"
import createUser from "../services/user.service"
import { User } from "../entity/user"

const postUser = async (req: Request, res: Response, next: NextFunction) => {
  let { firstName, lastName, age } = req.body
  const user: User = User.create({
    firstName: firstName,
    lastName: lastName,
    age: age,
  })
  try {
    await createUser(user)
    res.sendStatus(201)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

export default postUser
