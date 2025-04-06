import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
    private authService: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
    };


    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;   
            const result = await this.authService.login(email, password)

            res.cookie('jwt',result.token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 1000 
            })

            res.status(200).json({ status: 'success', data: result.user })

        } catch (error:any) {
            res.status(400).json({status:'error',message:error.message})

        }
    }


}