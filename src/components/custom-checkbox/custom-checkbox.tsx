import React from "react";

import { Checkbox } from "@chakra-ui/react";

interface Props {
  id: string;
  title: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
function CustomCheckBox({ id, title, onchange, checked }: Props) {
  return (
    <Checkbox value={id} isChecked={checked} onChange={onchange}>
      {title}
    </Checkbox>
  );
}

export default CustomCheckBox;
