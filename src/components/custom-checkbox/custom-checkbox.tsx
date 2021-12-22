import React from "react";

import { Checkbox } from "@chakra-ui/react";

interface Props {
  items: {
    id: string;
    title: string;
  };
}
function CustomCheckBox({ items: { id, title } }: Props) {
  return <Checkbox value={id}>{title}</Checkbox>;
}

export default CustomCheckBox;
