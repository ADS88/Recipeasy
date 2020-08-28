import { User } from "../entity/User"
import { getRepository } from "typeorm"

const createUser = async (user: User) => {
  try {
    console.log(user)
    //getRepository(User).create(user)
  } catch (e) {
    throw new Error(e.message)
  }
}

export default createUser
