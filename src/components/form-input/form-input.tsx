import React, { InputHTMLAttributes } from "react";
import { Input } from "@chakra-ui/react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;

  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function FormInput({ handleChange, label }: FormInputProps) {
  return (
    <div>
      {label ?? <label>{label}</label>}
      <Input pr="4.5rem" type={label} onChange={handleChange} />
    </div>
  );
}
export default FormInput;
