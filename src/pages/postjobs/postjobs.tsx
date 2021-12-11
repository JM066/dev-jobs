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
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/button/custom-button";
import FormTextArea from "../../components/form-textarea/form-textarea";

import { JobType } from "../../types/types";

function PostJobs() {
  const [companyName, setCompanyName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [employees, setEmployees] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [aboutJob, setAboutJob] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");
  const titles = [
    "Build Engineer",
    "Release Manager",
    "Product Manager",
    "Front End Developer",
    "Back End Developer ",
    "Security Engineer",
  ];
  const history = useHistory();
  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const jobPost = {
      companyName,
      address,
      employees,
      title,
      type,
      aboutJob,
      preferences,
      responsibilities,
    };
    onAddJob(jobPost);
  };
  const onAddJob = (jobPost: JobType) => {
    try {
      fetch(
        "https://my-project-c37fd-default-rtdb.firebaseio.com/jobpost.json",
        {
          method: "POST",
          body: JSON.stringify(jobPost),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        history.replace("/findjobs");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      p={10}
      maxW="lg"
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Stack direction={["column"]} spacing="20px">
        <form onSubmit={sumbitHandler}>
          <FormInput
            type="text"
            name="company"
            id="company"
            value={companyName}
            onChange={(e) => setCompanyName(e.currentTarget.value)}
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
              {titles.map((title, i: number) => (
                <option key={i}>{title}</option>
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
            id="aboutjobs"
            value={aboutJob}
            onChange={(e) => setAboutJob(e.currentTarget.value)}
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
            value={preferences}
            onChange={(e) => setPreferences(e.currentTarget.value)}
            label="Preferences"
            required={false}
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </Stack>
    </Box>
  );
}
export default PostJobs;
