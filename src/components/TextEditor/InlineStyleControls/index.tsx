import React from "react";
import { Button } from "@chakra-ui/react";
const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
];
interface IBlockStyleControls {
  onToggle: (style: string) => void;
}

function InlineStyleControls({ onToggle }: IBlockStyleControls) {
  return (
    <div>
      {INLINE_STYLES.map((type) => (
        <Button
          colorScheme="gray"
          p={1}
          mr={1}
          variant="outline"
          key={type.label}
          onClick={() => onToggle(type.style)}
        >
          {type.label}
        </Button>
      ))}
    </div>
  );
}

export default InlineStyleControls;
