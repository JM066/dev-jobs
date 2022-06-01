import React, { useContext, useEffect, useState } from "react";
import { convertFromRaw, EditorState, Editor } from "draft-js";
import {
  Stack,
  Text,
  Divider,
  Heading,
  Badge,
  Button,
  Box,
} from "@chakra-ui/react";
import { SavedPostContext } from "../../store/SavePostContext";
import { JobPostState, EditorStateType } from "../../type";

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

  console.log("post ", post);
  const { isItemSaved, removePost, addPost } = useContext(SavedPostContext);
  const itemIsSaved = isItemSaved(id);
  const [editorState, setEditorState] = useState<EditorStateType>({
    ...post,
    about: EditorState.createWithContent(convertFromRaw(about)),
    responsibilities: EditorState.createWithContent(
      convertFromRaw(responsibilities)
    ),
  });
  useEffect(() => {
    // const jobData = {
    //   ...post,
    //   about: EditorState.createWithContent(convertFromRaw(about)),
    //   responsibilities: EditorState.createWithContent(
    //     convertFromRaw(responsibilities)
    //   ),
    // };
    // setEditorState(jobData);
  }, [editorState]);
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
      {showTitle && editorState && (
        <>
          <Box flex="1" textAlign="left">
            <Heading as="h3" size="sm">
              {editorState?.company?.toUpperCase()}
            </Heading>
            <Badge colorScheme="green">{editorState?.title}</Badge>
          </Box>
          <Stack spacing={8}>
            <Text> {editorState?.address}</Text>

            <Divider orientation="horizontal" />
            {/* <div style={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}>
                {responsibilities}
              </div> */}

            <Editor
              editorState={editorState?.about}
              readOnly={true}
              onChange={() => setEditorState}
            />
            <Editor
              editorState={editorState?.responsibilities}
              readOnly={true}
              onChange={() => setEditorState}
            />
          </Stack>
        </>
      )}
      {/* {editorState?.responsibilities && ( */}

      {/* )} */}

      <Stack p={5} align="flex-end">
        <Button variant="primary" onClick={toggleSavedStatusHandler}>
          {itemIsSaved ? "Remove from MyList" : "Save in MyList"}
        </Button>
      </Stack>
    </Box>
  );
}
export default JobItem;
