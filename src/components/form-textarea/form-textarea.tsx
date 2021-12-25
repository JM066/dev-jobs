import React from "react";
import { FormControl, Text, Textarea } from "@chakra-ui/react";

interface Props {
  id: string;
  label: string;
  value: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required: boolean;
}
function FormTextArea(props: Props, ref?: React.Ref<HTMLTextAreaElement>) {
  const { id, label } = props;
  return (
    <FormControl id={id} required={true}>
      <Text mb="8px">{label}</Text>
      <Textarea ref={ref} {...props} />
    </FormControl>
  );
}
export default FormTextArea;
