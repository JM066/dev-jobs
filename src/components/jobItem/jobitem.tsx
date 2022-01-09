import React, { useContext } from "react";
import {
  Stack,
  Text,
  Divider,
  Heading,
  Badge,
  Button,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";

import SavedPostContext from "../../store/save-post";
import { JobPost } from "../../types/types";

interface Props {
  post: JobPost;
  showTitle?: boolean;
}

function JobItem({
  showTitle = true,
  post: {
    id,
    title,
    aboutJob,
    employees,
    type,
    address,
    companyName,
    preferences,
    responsibilities,
  },
}: Props) {
  const savedContext = useContext(SavedPostContext);
  const itemIsSaved = savedContext?.isItemSaved(id);

  const toggleSavedStatusHandler = () => {
    if (itemIsSaved) {
      savedContext?.removePost(id);
    } else {
      savedContext?.addPost({
        id,
        title,
        aboutJob,
        employees,
        type,
        address,
        companyName,
        preferences,
        responsibilities,
      });
    }
  };
  const responsibilityList = responsibilities.split(".");
  return (
    <Box w="100%" borderWidth="1px" borderadius="lg" p="6">
      {showTitle && (
        <Box flex="1" textAlign="left">
          <Heading as="h3" size="sm">
            {companyName.toUpperCase()}
          </Heading>
          <Badge colorScheme="green">{title}</Badge>
        </Box>
      )}

      <Stack spacing={8}>
        <Text> {address}</Text>
        <Text>{aboutJob}</Text>
        <Divider orientation="horizontal" />
        <UnorderedList>
          {responsibilityList.map((responsibility, i: number) => {
            return (
              responsibility.length > 1 && (
                <ListItem key={i} p={2}>{`${responsibility}.`}</ListItem>
              )
            );
          })}
        </UnorderedList>
        <Text>{preferences}</Text>
      </Stack>
      <Stack p={5} align="flex-end">
        <Button onClick={toggleSavedStatusHandler}>
          {itemIsSaved ? "Remove from MyList" : "Save in MyList"}
        </Button>
      </Stack>
    </Box>
  );
}
export default JobItem;
