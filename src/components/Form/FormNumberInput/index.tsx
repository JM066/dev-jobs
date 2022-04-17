import React from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
} from "@chakra-ui/react";
import { useController, RegisterOptions } from "react-hook-form";

interface IFormNumberInput {
  control: any;
  name: string;
  //   register: Omit<Partial<RegisterOptions>, "pattern">;
  rules?: Omit<RegisterOptions, "valueAsDate" | "setValueAs" | "disabled">;
}
function FormNumberInput({ control, name, rules }: IFormNumberInput) {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  return (
    <FormControl isInvalid={true} isRequired>
      <FormLabel>Number of Employees</FormLabel>
      <NumberInput
        defaultValue={1}
        min={1}
        value={field.value}
        onChange={(value) => field.onChange(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
export default FormNumberInput;
