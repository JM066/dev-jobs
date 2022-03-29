import React, { useContext } from "react";

import {
  Stack,
  Text,
  Divider,
  Heading,
  Badge,
  Button,
  Box,
} from "@chakra-ui/react";
import SavedPostContext from "../../store/save-post";
import { JobPost } from "../../type";

interface Props {
  post: JobPost;
  showTitle?: boolean;
}

function JobItem({
  showTitle = true,
  post: {
    id,
    title,
    about,
    employees,
    type,
    address,
    company,
    preference,
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
        about,
        employees,
        type,
        address,
        company,
        preference,
        responsibilities,
      });
    }
  };

  return (
    <Box w="100%" borderWidth="1px" borderadius="lg" p="6">
      {showTitle && (
        <Box flex="1" textAlign="left">
          <Heading as="h3" size="sm">
            {company.toUpperCase()}
          </Heading>
          <Badge colorScheme="green">{title}</Badge>
        </Box>
      )}

      <Stack spacing={8}>
        <Text> {address}</Text>
        <Text>{about}</Text>
        <Divider orientation="horizontal" />
        <div style={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}>
          {responsibilities}
        </div>
        /<Text>{preference}</Text>
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
