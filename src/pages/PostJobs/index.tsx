import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Stack, Box, Button } from "@chakra-ui/react";
import { createNewPost } from "../../firebase/firebase.utils";
import FormInput from "../../components/Form/FormInput";
import FormTextArea from "../../components/Form/FormTextarea";
import FormRadio from "../../components/Form/FormRadio";
import FormSelect from "../../components/Form/FormSelect";
import FormNumberInput from "../../components/Form/FormNumberInput";
// import TextEditor from "../../components/TextEditor";
import { RADIO_OPTIONS, POSITIONS } from "../../const/index";
import { Job } from "../../type";

function PostJobs() {
  // const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    company: yup
      .string()
      .max(20, "Must be no more than 20 characters")
      .required("Company Name is required"),
    address: yup.string().required("Address is required"),
    title: yup.string().required("Position is required"),
    employees: yup.number().required("Please provide a number of employees"),
    about: yup.string().required("Job description is required"),
    responsibilities: yup.string().required("Please provide responsibilities"),
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Job>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Job) => {
    setIsLoading(true);
    try {
      await createNewPost(data);
      setIsLoading(false);
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
        w={"50%"}
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

            <FormSelect
              name="title"
              label="Position"
              control={control}
              placeholder="Select Positions"
              options={POSITIONS}
              register={register("title")}
            />
            <FormRadio
              name="type"
              options={RADIO_OPTIONS}
              control={control}
              defaultValue="full-time"
            />
            <FormNumberInput name="employees" control={control} />
            <FormTextArea
              name="about"
              control={control}
              register={register("about")}
              isMulti
              placeholder="About Company"
            />
            <FormTextArea
              name="responsibilities"
              control={control}
              register={register("responsibilities")}
              isMulti
              placeholder="What are the requirements"
            />
            <FormTextArea
              name="preferences"
              control={control}
              register={register("preferences")}
              isMulti
              placeholder="Any preference"
            />
            <Button variant="secondary" type="submit" isLoading={isLoading}>
              Post
            </Button>
          </Stack>
        </form>
      </Stack>
      {/* <TextEditor /> */}
    </Box>
  );
}
export default PostJobs;
