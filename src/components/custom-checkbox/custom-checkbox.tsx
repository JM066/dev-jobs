import React from "react";

import { Checkbox } from "@chakra-ui/react";

interface Props {
  id: string;
  title: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function CustomCheckBox({ id, title, onchange }: Props) {
  return (
    <Checkbox value={id} onChange={onchange}>
      {title}
    </Checkbox>
  );
}

export default CustomCheckBox;
