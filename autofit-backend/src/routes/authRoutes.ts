import { Router } from "express";
import { AuthController } from "../controllers/authController";
import { AuthService } from "../services/authService";
import { UserRepository } from "../repositories/userRepository";


const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post('/user/login', (req,res)=> authController.login(req,res))

export default router;