import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import authRoute from './routes/authRoutes'

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use('/auth', authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Server started Running on ${PORT}`))