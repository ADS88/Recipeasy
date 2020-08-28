import { User } from "../entity/user"
import { getRepository } from "typeorm"

const createUser = async (user: User) => {
  try {
    getRepository(User).create(user)
  } catch (e) {
    throw new Error(e.message)
  }
}

export default createUser
