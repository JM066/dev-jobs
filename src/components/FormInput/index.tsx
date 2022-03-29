import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

interface Props {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}
function FormInput({ ...props }: Props) {
  const { label, id } = props;
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
}
export default FormInput;
