import React from "react";
// import { useController, RegisterOptions } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import TextEditor from "../../../components/TextEditor";
interface IFormTextArea {
  control: any;
  name: string;
  register: Omit<Partial<RegisterOptions>, "pattern">;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  isMulti?: boolean;
  placeholder: string;
}
function FormTextArea({ control, name, rules, placeholder }: IFormTextArea) {
  // const { field, fieldState } = useController({
  //   name,
  //   control,
  //   rules,
  //   defaultValue: "",
  // });
  return (
    <FormControl required={true}>
      {/* <Textarea
        placeholder={placeholder}
        value={field.value}
        ref={field.ref}
        onChange={(value) => {
          return field.onChange(value);
        }}
      ></Textarea> */}
      <TextEditor />
      <FormErrorMessage fontSize="10px" h="12px" margin={0}>
        {/* {fieldState?.error} */}
      </FormErrorMessage>
    </FormControl>
  );
}
export default FormTextArea;
