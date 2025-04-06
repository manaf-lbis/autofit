import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import GoogleLoginButton from '@/components/Auth/GoogleLoginButton';
import FormInput from '@/components/shared/FormInput';
import { useForm } from 'react-hook-form';

interface FormData {
    name:string;
    email:string;
    mobile:string,
    password:string;
}

const SignupForm : React.FC = () => {

    const {register,handleSubmit,formState:{errors}} = useForm<FormData>()

    const onValidSubmit = (data: FormData) =>{
        console.log(data);
    }


  return (
    <>
     <div className="text-xs text-end">
        <span>Already registred?</span>
        <Link to="/login" className="text-blue-600 ml-1">Login Now</Link>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-10">
        <h2 className="text-xl font-semibold">Hello, How are You!</h2>
        <h5 className="text-xs font-medium">Complete Your Reistration To start!</h5>
      </div>

      <div className="grid gap-3">

        <FormInput
        id='name'
        label='Full Name'
        name='name'
        placeholder='Full name'
        register={register}
        type='text'
        validationRule={{
            required:'Enter full Name',

            minLenght:{
                value:3,
                message: 'Enter a valid Name'
            },
            validate:{
                notOnlyWhitespace: (value :any) =>{
                   return value.trim().length > 0 || 'Name must be at least 3 characters'
                },
                minTrimmedLength: (value: string) =>{
                  return  value.trim().length >= 3 || 'Name must be at least 3 characters'
                }
            }
        }}
        error={errors.name}
        />


        <FormInput  
          id="email" 
          label="Email"
          type="email"
          placeholder="Email"
          register={register}
          error={errors.email}
          name='email'
          validationRule={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email'
            },
            validate:{
                notOnlyWhitespace: (value :string) =>
                value.trim().length > 0 || 'Password cannot be empty or whitespace only',

                minTrimmedLength: (value: string) =>{
                    return  value.trim().length >= 3 || 'email must be at least 5 characters'
                }
            }
          }}
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors.password}
          register={register}
          name='password'
          validationRule={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            },
            validate:{
                notOnlyWhitespace: (value :any) =>
                value.trim().length > 0 || 'Password cannot be empty or whitespace ',

                minTrimmedLength: (value: string) =>{
                    return  value.trim().length >= 3 || 'password must be at least 6 characters'
                }
            }
          }}
        />

        <Button onClick={handleSubmit(onValidSubmit)} className="bg-af_darkBlue mt-2">Login</Button>

        <div className="flex items-center gap-4 my-4">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <GoogleLoginButton />
      </div>

    </>
  )
}

export default SignupForm