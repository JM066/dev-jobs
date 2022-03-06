import React from "react";

import { Box, CheckboxGroup, HStack } from "@chakra-ui/react";
import CustomCheckBox from "../../../components/custom-checkbox/custom-checkbox";

function Filter() {
  const POSITIONS = [
    { id: "build-engineer", title: "Build Engineer" },
    { id: "release-manager", title: "Release Manager" },
    { id: "product-manager", title: "Product Manager" },
    { id: "frontend", title: "Front End Developer" },
    { id: "backend", title: "Back End Developer " },
    { id: "security-engineer", title: "Security Engineer" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      console.log(e.target.value);
    }
  };
  return (
    <CheckboxGroup colorScheme="green" defaultValue={["build-engineer"]}>
      <HStack spacing="24px">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {POSITIONS.map((position, i: number) => (
            <CustomCheckBox
              key={position.id}
              id={position.id}
              title={position.title}
              onchange={handleChange}
            />
          ))}
        </Box>
      </HStack>
    </CheckboxGroup>
  );
}
export default Filter;
