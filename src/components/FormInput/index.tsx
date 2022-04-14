import React from "react";

import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

interface IFormInput {
  label: string;
  error?: string;
  name: string;
  type: string;
  register: Record<string, any>;
}
function FormInput({ label, error, name, type, register }: IFormInput) {
  return (
    <FormControl isInvalid={true} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input name={name} type={type} {...register} />
      <FormErrorMessage fontSize="10px" h="12px" margin={0}>
        {error}
      </FormErrorMessage>
    </FormControl>
  );
}
export default FormInput;
