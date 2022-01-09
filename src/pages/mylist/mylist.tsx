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

import JobItem from "../../components/jobItem/jobitem";

import SavedPostContext from "../../store/save-post";

import styles from "./mylist.module.scss";

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
    <div>
      <Heading as="h4" size="md" m={3}>
        My Job List
      </Heading>
      {jobPosts?.map((job) => (
        <Accordion key={job.id} defaultIndex={[0]} m={2} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {job.companyName.toUpperCase()}
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
    </div>
  );
}
export default MyList;
