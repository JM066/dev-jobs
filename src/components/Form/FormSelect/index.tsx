import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useController, RegisterOptions } from "react-hook-form";
interface IFormSelect {
  name: string;
  label: string;
  options: { [key: string]: string }[];
  register: Omit<Partial<RegisterOptions>, "pattern">;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  placeholder: string;
  control: any;
}
function FormSelect({
  name,
  options,
  label,
  control,
  rules,
  placeholder,
}: IFormSelect) {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  return (
    <FormControl required={true}>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder={placeholder}
        required
        value={field.value}
        onChange={(value) => field.onChange(value)}
      >
        {options.map((option, i: number) => (
          <option key={i} id={option.id}>
            {option.title}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
export default FormSelect;
