import React, { InputHTMLAttributes } from "react";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;

  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function FormInput({ handleChange, label, ...props }: FormInputProps) {
  return (
    <div>
      {label ?? <label>{label}</label>}
      <input onChange={handleChange} {...props}></input>
    </div>
  );
}
export default FormInput;
