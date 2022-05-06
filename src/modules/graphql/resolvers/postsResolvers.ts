import { FieldResolver } from "nexus";
import { isAuth } from "../../utils/auth";

export const createPostResolver: FieldResolver<
  "Mutation",
  "createPost"
> = async (_, { content }, { req, prisma }) => {
  const decodedJWT = await isAuth(req);
  const newPost = await prisma.post.create({
    data: {
      content,
      authorUsername: decodedJWT.username,
    },
    select: {
      author: {
        select: {
          memberSince: true,
        },
      },
    },
  });
  return {
    author: {
      memberSince: newPost.author.memberSince.toDateString(),
      username: decodedJWT.username,
    },
    content,
  };
};

export const getPostsResolver: FieldResolver<
  "Query",
  "getPosts"
> = async (_, __, { prisma, req }) => {
  await isAuth(req);
  const posts = await prisma.post.findMany({
    select: {
      author: {
        select: {
          username: true,
          memberSince: true,
        },
      },
      content: true,
    },
    orderBy: {
      id: "desc",
    },
  });
  return [...posts].map(post => ({
    ...post,
    author: {
      ...post.author,
      memberSince: post.author.memberSince.toDateString(),
    },
  }));
};
