import { User } from "../entity/user"
import {
  getRepository,
  createConnection,
  getConnection,
  Connection,
} from "typeorm"

const createUser = async (user: User) => {
  try {
    await user.save()
  } catch (e) {
    throw new Error(e.message)
  }
}

export default createUser
