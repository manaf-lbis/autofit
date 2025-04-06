import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error("user not found")
        }

        const isMatch = bcrypt.compare(password, user.email);
        if (!isMatch) {
            throw new Error('email or password not match');
        }


        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        return { token, user: { _id: user._id, name: user.name, role: user.role } };

    }
}