import React, { useState, useEffect } from "react";

import { Box, CheckboxGroup, HStack } from "@chakra-ui/react";
import { POSITIONS } from "../../../const/index";
import CustomCheckBox from "../../../components/custom-checkbox/custom-checkbox";

interface Props {
  handleFilteredPosition: (positions: Array<string>) => void;
}
function Filter({ handleFilteredPosition }: Props) {
  const arr = new Array(POSITIONS.length).fill(false);
  const [checkBoxes, setCheckBoxes] = useState(arr);
  const allChecked = checkBoxes.every(Boolean);
  const isIndeterminate = checkBoxes.some(Boolean) && !allChecked;

  useEffect(() => {
    const filtered: Array<string> = [];
    checkBoxes.forEach((item, index) => {
      return item === true && filtered.push(POSITIONS[index].id);
    });
    handleFilteredPosition(filtered);
  }, [checkBoxes]);

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
          {checkBoxes.map((checkbox, i: number) => {
            return (
              <CustomCheckBox
                key={POSITIONS[i].id}
                id={POSITIONS[i].id}
                value={checkbox}
                title={POSITIONS[i].title}
                onchange={() => handleChange(i)}
                checked={checkbox}
              />
            );
          })}
        </Box>
      </HStack>
    </CheckboxGroup>
  );
}
export default Filter;
