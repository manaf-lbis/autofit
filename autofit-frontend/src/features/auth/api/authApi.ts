import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface User {
    id: string;
    name: string;
    email: string;
    role: 'meachnic' | 'user' | 'admin';
};

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    email: string;
    name: string;
    password: string
}

export interface loginresponse{
    status:string,
    data: {
        _id: string;
        name: string;
        role: "user" | "admin" | "mechanic";
    };

}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<loginresponse,LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials

            })
        })
    })

})

export const {useLoginMutation} = authApi 