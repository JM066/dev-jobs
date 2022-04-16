import React from "react";
import { useController } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
interface IFormRadio {
  options: { [key: string]: string }[];
  control: any;
  name: string;
  defaultValue: string;
}

function FormRadio({ options, control, name, defaultValue }: IFormRadio) {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue,
  });

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend">Type</FormLabel>
      <RadioGroup
        defaultValue={field.value}
        vaule={field.value}
        onChange={(value) => field.onChange(value)}
      >
        <HStack spacing="24px">
          {options.map((option, i) => (
            <Radio key={i} value={option.id}>
              {option.value}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}
export default FormRadio;
