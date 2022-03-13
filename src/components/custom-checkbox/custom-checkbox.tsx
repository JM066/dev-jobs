import React from "react";

import { Checkbox } from "@chakra-ui/react";

interface Props {
  id: string;
  title: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIndeterminate?: boolean;
  checked: boolean;
  value?: string;
}
function CustomCheckBox({
  id,
  title,
  onchange,
  checked,
  isIndeterminate,
  value,
}: Props) {
  console.log("isChecked", checked);
  return (
    <Checkbox
      value={value}
      isIndeterminate={isIndeterminate}
      isChecked={checked}
      onChange={onchange}
    >
      {title}
    </Checkbox>
  );
}

export default CustomCheckBox;
