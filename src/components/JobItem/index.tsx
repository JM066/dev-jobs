import React, { useContext } from "react";
// import { convertFromRaw, EditorState, Editor } from "draft-js";
import {
  Stack,
  Text,
  Divider,
  Heading,
  Badge,
  Button,
  Box,
} from "@chakra-ui/react";
import EditorItem from "../../components/TextEditor/EditorItem";
import { SavedPostContext } from "../../store/SavePostContext";
import { JobPostState } from "../../type";

interface Props {
  post: JobPostState;
  showTitle?: boolean;
}

function JobItem({ showTitle = true, post }: Props) {
  const {
    id,
    title,
    about,
    employees,
    type,
    address,
    company,
    responsibilities,
  } = post;

  const { isItemSaved, removePost, addPost } = useContext(SavedPostContext);
  const itemIsSaved = isItemSaved(id);

  const toggleSavedStatusHandler = () => {
    if (itemIsSaved) {
      removePost(id);
    } else {
      addPost({
        id,
        title,
        about,
        employees,
        type,
        address,
        company,
        responsibilities,
      });
    }
  };

  return (
    <Box w="100%" borderWidth="1px" borderadius="lg" p="6">
      {showTitle && (
        <>
          <Box flex="1" textAlign="left">
            <Heading as="h3" size="sm">
              {company?.toUpperCase()}
            </Heading>
            <Badge colorScheme="green">{title}</Badge>
          </Box>
          <Stack spacing={8}>
            <Text> {address}</Text>
            <Divider orientation="horizontal" />
            <EditorItem text={about} />
            <EditorItem text={responsibilities} />
          </Stack>
        </>
      )}

      <Stack p={5} align="flex-end">
        <Button variant="primary" onClick={toggleSavedStatusHandler}>
          {itemIsSaved ? "Remove from MyList" : "Save in MyList"}
        </Button>
      </Stack>
    </Box>
  );
}
export default JobItem;
