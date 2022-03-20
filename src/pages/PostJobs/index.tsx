import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Stack,
  Box,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { createNewPost } from "../../firebase/firebase.utils";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/Button";
import FormTextArea from "../../components/FormTextarea";

import { POSITIONS } from "../../const/index";

function PostJobs() {
  const [company, setCompany] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [employees, setEmployees] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [about, setabout] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState<string>("");
  const [preference, setPreference] = useState<string>("");
  // const preferencesRef = useRef();

  const history = useHistory();
  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const jobPost = {
      company,
      address,
      employees,
      title,
      type,
      about,
      preference,
      responsibilities,
    };
    createNewPost(jobPost);
    history.replace("/findjobs");
  };

  return (
    <Box
      p={10}
      w={"100%"}
      flex="1"
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        p={10}
        w={"70%"}
        shadow="md"
        borderRadius="md"
        borderWidth="1px"
        direction={["column"]}
      >
        <form onSubmit={sumbitHandler}>
          <Stack spacing="20px">
            <FormInput
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.currentTarget.value)}
              label="Company Name"
              required
            />
            <FormInput
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.currentTarget.value)}
              label="Address"
              required
            />

            <FormLabel>Number of Employees</FormLabel>
            <NumberInput
              defaultValue={1}
              min={1}
              value={employees}
              onChange={(value) => setEmployees(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormControl id="DevOps Titles">
              <FormLabel>DevOps Titles</FormLabel>
              <Select
                placeholder="Select Position"
                required
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              >
                {POSITIONS.map((title, i: number) => (
                  <option key={i} id={title.id}>
                    {title.id}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">Type</FormLabel>
              <RadioGroup defaultValue="full" vaule={type} onChange={setType}>
                <HStack spacing="24px">
                  <Radio value="full-time">Full Time</Radio>
                  <Radio value="part-time">Part Time</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormTextArea
              name="about"
              id="abouts"
              value={about}
              onChange={(e) => setabout(e.currentTarget.value)}
              label="About the Job"
              required
            />
            <FormTextArea
              name="responsibilities"
              id="responsibility"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.currentTarget.value)}
              label="Responsibilities"
              required
            />
            <FormTextArea
              name="preferences"
              id="preferences"
              value={preference}
              onChange={(e) => setPreference(e.currentTarget.value)}
              label="Preferences"
              required={false}
              // ref={preferencesRef}
            />
            <CustomButton type="submit"> Post </CustomButton>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
export default PostJobs;
