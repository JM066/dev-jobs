import React from "react";
import {
  Stack,
  Text,
  Divider,
  Heading,
  Badge,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import { JobPostState } from "../../type";
interface Props {
  post: JobPostState;
  showDetail: React.Dispatch<React.SetStateAction<JobPostState>>;
}

function JobItemPreview({ post, showDetail }: Props) {
  // const { post, showDetail } = props;
  const { title, type, address, company } = post;

  return (
    // <Button onClick={showDetail}>
    <Box
      onClick={() => showDetail(post)}
      w="100%"
      borderWidth="1px"
      borderadius="lg"
      p="6"
    >
      <Box flex="1" textAlign="left">
        <Heading as="h3" size="sm">
          {company?.toUpperCase()}
        </Heading>
        <Text> {type}</Text>
        <Badge colorScheme="green">{title}</Badge>
      </Box>
      <Stack spacing={8}>
        <Text> {address}</Text>
        <Divider orientation="horizontal" />
        <UnorderedList></UnorderedList>
      </Stack>
    </Box>
    // </Button>
  );
}
export default JobItemPreview;
