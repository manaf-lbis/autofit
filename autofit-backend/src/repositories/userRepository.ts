import { User } from "../types/user";
import { IUserRepository } from "./interfaces/IUserRepository";
import { UserModel } from "../models/userModel";


export class UserRepository implements IUserRepository {

    async findAll(): Promise<User[] | null> {
       return await UserModel.find()
    }

    async findByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({email})  
    }

    async findById(id: string): Promise<User | null> {
        return await UserModel.findById(id)
    }

    async save(user: User): Promise<User> {
        const  newUser = new UserModel(user)
        return await newUser.save()
    }

    async update(id: string, update: Partial<User>): Promise<User | null> {
       return await UserModel.findByIdAndUpdate(id,update,{ new: true }) 
    }

    async delete(id: string): Promise<void> {
        await UserModel.findByIdAndDelete(id)
    }

}