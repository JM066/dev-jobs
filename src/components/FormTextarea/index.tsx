import React from "react";
import { useController, RegisterOptions } from "react-hook-form";
import { FormControl, Textarea, FormLabel } from "@chakra-ui/react";

interface IFormTextArea {
  control: any;
  name: string;
  defaultValue?: { value: string | number; label: string } | null;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  // onChange: (value: any) => void;
  isMulti?: boolean;
  // error?: FieldError | undefined;
  // register: Omit<Partial<RegisterOptions>, "pattern">;
}
function FormTextArea({
  control,
  name,
  defaultValue = null,
  rules,
}: IFormTextArea) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });
  return (
    <FormControl required={true}>
      <FormLabel>{name}</FormLabel>
      <Textarea
        value={value}
        onChange={(vale) => {
          return onChange(value);
        }}
      />
    </FormControl>
  );
}
export default FormTextArea;
