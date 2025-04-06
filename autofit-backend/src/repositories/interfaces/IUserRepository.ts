import { IBaseRerpository } from "./IBaseRepository"
import { User } from "../../types/user"

export interface IUserRepository extends IBaseRerpository <User> {
    findByEmail(email :string) : Promise<User | null>
}

