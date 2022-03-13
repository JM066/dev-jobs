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
  const arr = new Array(POSITIONS.length).fill(false);
  const [checkBoxes, setCheckBoxes] = useState(arr);
  const allChecked = checkBoxes.every(Boolean);
  const isIndeterminate = checkBoxes.some(Boolean) && !allChecked;

  const checkAllBoxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allChecked = checkBoxes.map((item) => (item = e.target.checked));
    setCheckBoxes(allChecked);
  };

  const handleChange = (i: number) => {
    const updateCheckBoxes = checkBoxes.map((item, index) =>
      i === index ? !item : item
    );
    setCheckBoxes(updateCheckBoxes);
  };

  return (
    <CheckboxGroup colorScheme="green" value={checkBoxes}>
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
            onchange={(e) => checkAllBoxes(e)}
            isIndeterminate={isIndeterminate}
            checked={allChecked}
          />
          {checkBoxes.map((box, i: number) => {
            console.log("checkboxes:", checkBoxes, "check: ", i, box);
            return (
              <CustomCheckBox
                key={POSITIONS[i].id}
                id={POSITIONS[i].id}
                value={box}
                title={POSITIONS[i].title}
                onchange={() => handleChange(i)}
                checked={box}
              />
            );
          })}
        </Box>
      </HStack>
    </CheckboxGroup>
  );
}
export default Filter;
