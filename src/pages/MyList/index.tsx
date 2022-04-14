import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Badge,
  Heading,
} from "@chakra-ui/react";

import JobItem from "../../components/JobItem";

import { SavedPostContext } from "../../store/save-post";

import styles from "./MyList.module.scss";

function MyList() {
  const jobContext = useContext(SavedPostContext);
  const jobPosts = jobContext?.savedPost;
  const totalSaved = jobContext?.totalPost;

  if (totalSaved === 0) {
    return (
      <div className={styles.NoPostSign}>
        <Heading as="h5" size="sm">
          You have no saved posts yet.
        </Heading>
      </div>
    );
  }
  return (
    <Box p={5} w={"100%"}>
      <Heading as="h4" size="md" m={3}>
        My Job List
      </Heading>
      {jobPosts?.map((job) => (
        <Accordion key={job.id} m={2} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {job.company.toUpperCase()}
                  <Badge ml={2} colorScheme="green">
                    {job.title}
                  </Badge>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <JobItem post={job} showTitle={false} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
}
export default MyList;
