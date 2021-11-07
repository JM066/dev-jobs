import React, { InputHTMLAttributes } from "react";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function FormInput({ handleChange, label, ...props }: FormInputProps) {
  return (
    <div>
      <input onChange={handleChange} {...props}></input>
      {label ?? <label>{label}</label>}
    </div>
  );
}
export default FormInput;
