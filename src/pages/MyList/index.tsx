import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import {  } from "src/reducer/SavePostSlice";
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
import { ReducerType } from "../../reducer/index";
import JobItem from "../../components/JobItem";
import styles from "./MyList.module.scss";

function MyList() {
  // const dispatch = useDispatch();

  // const { getSavedPostRequest } = savedPostsActions;

  const storedJobs = useSelector(
    (store: ReducerType) => store.savePostReducer.savedPost
  );

  useEffect(() => {
    // dispatch(getSavedPostRequest());
    console.log("stored", storedJobs);
  }, [storedJobs]);

  if (storedJobs.length === 0) {
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

      {storedJobs.map((job: any, i: number) => (
        <Accordion key={i} m={2} allowMultiple>
          <AccordionItem>
            {/* <h2> */}
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {job.company?.toUpperCase()}
                <Badge ml={2} colorScheme="green">
                  {job.title}
                </Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            {/* </h2> */}
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
