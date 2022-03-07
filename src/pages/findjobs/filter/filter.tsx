import React, { useState } from "react";

import { Box, CheckboxGroup, HStack } from "@chakra-ui/react";
import CustomCheckBox from "../../../components/custom-checkbox/custom-checkbox";

function Filter() {
  const POSITIONS = [
    { id: "backend", title: "Back End Developer " },
    { id: "build-engineer", title: "Build Engineer" },
    { id: "frontend", title: "Front End Developer" },
    { id: "product-manager", title: "Product Manager" },
    { id: "release-manager", title: "Release Manager" },
    { id: "security-engineer", title: "Security Engineer" },
  ];

  const [checkBoxes, setCheckBoxes] = useState(
    new Array(POSITIONS.length).fill(false)
  );
  const allChecked = checkBoxes.every(Boolean);
  console.log("checkBOx", checkBoxes, allChecked);

  const handleChange = (i: number) => {
    const updateCheckBoxes = checkBoxes.map((item, index) =>
      index === i ? !item : item
    );
    setCheckBoxes(updateCheckBoxes);
  };
  const checkAll = () => {
    const checkAllBoxes = checkBoxes.map((item, index) =>
      item ? !item : item
    );
    console.log("checkall", checkAllBoxes);
    setCheckBoxes(checkAllBoxes);
  };
  return (
    <CheckboxGroup colorScheme="green">
      <HStack spacing="24px">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <CustomCheckBox
            id="all"
            title="Check All"
            onchange={checkAll}
            checked={allChecked}
          />
          {POSITIONS.map((position, i: number) => (
            <CustomCheckBox
              key={position.id}
              id={position.id}
              title={position.title}
              onchange={() => handleChange(i)}
              checked={checkBoxes[i]}
            />
          ))}
        </Box>
      </HStack>
    </CheckboxGroup>
  );
}
export default Filter;
