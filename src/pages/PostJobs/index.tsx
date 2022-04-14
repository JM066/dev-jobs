import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
  Button,
} from "@chakra-ui/react";
import { createNewPost } from "../../firebase/firebase.utils";
import FormInput from "../../components/FormInput";
import FormTextArea from "../../components/FormTextarea";

import { POSITIONS } from "../../const/index";
import { JobPost } from "../../type";

function PostJobs() {
  // const [company, setCompany] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  const [employees, setEmployees] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  // const [about, setabout] = useState<string>("");
  // const [responsibilities, setResponsibilities] = useState<string>("");
  // const [preference, setPreference] = useState<string>("");

  // const history = useHistory();

  const schema = yup.object().shape({
    company: yup
      .string()
      .max(20, "Must be no more than 20 characters")
      .required("Company Name is required"),
    address: yup.string().required("Address is required"),
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<JobPost>({ resolver: yupResolver(schema) });

  // const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const jobPost = {
  //     company,
  //     address,
  //     employees,
  //     title,
  //     type,
  //     about,
  //     preference,
  //     responsibilities,
  //   };
  //   createNewPost(jobPost);
  //   history.replace("/findjobs");
  // };
  const onSubmit = async (data: JobPost) => {
    try {
      const post = await createNewPost(data);
      console.log("post", post);
      reset();
    } catch (error) {
      console.log(error);
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="20px">
            <FormInput
              type="text"
              name="company"
              label="Company Name"
              error={errors?.company?.message}
              register={register("company")}
            />
            <FormInput
              type="text"
              name="address"
              label="Company Address"
              error={errors?.address?.message}
              register={register("address")}
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

            <FormTextArea name="about" control={control} isMulti />
            <FormTextArea name="responsibilities" control={control} isMulti />
            <FormTextArea name="preferences" control={control} />
            <Button type="submit"> Post </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
export default PostJobs;
