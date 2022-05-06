import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../../../generated/graphql";

interface Props {
  username: string;
}

const Home: React.FC<Props> = ({ username }) => {
  const [createPost] = useCreatePostMutation();
  const { data } = useGetPostsQuery();
  return (
    <VStack spacing={2}>
      <Heading>Welcome {username}</Heading>
      <Formik
        initialValues={{ newPost: "" }}
        validationSchema={Yup.object({
          newPost: Yup.string().required().min(1).max(49),
        })}
        onSubmit={(values, actions) => {
          createPost({
            variables: {
              content: values.newPost,
            },
          });
          actions.resetForm();
        }}
      >
        <>
          <HStack as={Form}>
            <Field
              as={Input}
              placeholder="new post..."
              name="newPost"
              autoComplete="off"
            />
            <Button colorScheme="purple" type="submit">
              Submit
            </Button>
          </HStack>
          <ErrorMessage
            name="newPost"
            render={msg => (
              <Text color="red.500" fontSize="sm">
                {msg}
              </Text>
            )}
          />
        </>
      </Formik>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data?.getPosts?.map((post, key) => (
          <GridItem
            key={key}
            bg="gray.100"
            padding="2"
            borderRadius={2}
          >
            <Heading size="md">{post?.content}</Heading>
            <HStack padding="2" justify="space-between" mx="auto">
              <Text fontSize="xs">{post?.author?.username}</Text>
              <Text fontSize="xs">
                Member since: {post?.author?.memberSince}
              </Text>
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default Home;
