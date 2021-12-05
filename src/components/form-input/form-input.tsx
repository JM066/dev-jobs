import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

interface Props {
  label: string;
  type: string;
  name: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
}
function FormInput({ ...props }: Props) {
  const { label } = props;
  return (
    <FormControl id={label} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
}
export default FormInput;
