import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import GoogleLoginButton from '@/components/Auth/GoogleLoginButton';
import FormInput from '@/components/shared/FormInput';
import { useForm } from 'react-hook-form';

type FormData = {
  email : string,
  password : string
}

const LoginForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onValidSubmit = (data : FormData) =>{
    console.log("✅ Valid data submitted:", data);
  }



  return (
    <>
      <div className="text-xs text-end">
        <span>Not a Member?</span>
        <Link to="/signup" className="text-blue-600 ml-1">Register Now</Link>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 mb-10">
        <h2 className="text-xl font-semibold">Hello Again!</h2>
        <h5 className="text-xs font-medium">Welcome back, you’ve been missed!</h5>
      </div>

      <div className="grid gap-3">
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
            }
          }}
        />

        <Button onClick={handleSubmit(onValidSubmit)} className="bg-af_darkBlue mt-2">Login</Button>

        <div className="text-xs text-end">
          <Link to="/forgot-password" className="text-blue-600">Forgot password?</Link>
        </div>

        <div className="flex items-center gap-4 my-4">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <GoogleLoginButton />
      </div>
    </>
  );
};

export default LoginForm;
