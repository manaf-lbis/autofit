import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldError } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  error?:FieldError,
  register:any,
  name : string,
  validationRule :any  // {required : 'message'}
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, placeholder, error, register, name, validationRule }) => {

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input {...register(name,validationRule)}  id={id} type={type} placeholder={placeholder} />
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default FormInput;