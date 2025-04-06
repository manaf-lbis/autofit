import React from 'react'
import FormInput from '@/components/shared/FormInput'
import { useForm } from 'react-hook-form'
import { Vault } from 'lucide-react'



interface Password {
    password : string,
}

const NewPassword = () => {

  const {register,handleSubmit,formState:{errors}} = useForm<Password>()


  return (

    <div>
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


    </div>
  )
}

export default NewPassword