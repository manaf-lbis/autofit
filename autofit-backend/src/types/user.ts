export interface User {
    _id: string,
    name: string,
    email: string,
    password: string,
    role: 'user' | 'admin' | 'mechanic',
    status: 'active' | 'blocked',
    createdAt?: Date,
    updatedAt?: Date
}