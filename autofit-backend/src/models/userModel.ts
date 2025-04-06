import mongoose, { Schema, Document } from 'mongoose';
import { User } from '../types/user';

interface userDocument extends User, Omit<Document,'_id'> {}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'mechanic']
    },
    status: {
        type: String,
        enum: ['active', 'blocked']
    }
}, { timestamps: true })



export const UserModel = mongoose.model<userDocument>('User', userSchema)

