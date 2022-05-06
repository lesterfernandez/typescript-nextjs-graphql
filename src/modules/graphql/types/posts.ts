import {
  extendType,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import {
  createPostResolver,
  getPostsResolver,
} from "../resolvers/postsResolvers";

export const createPost = extendType({
  type: "Mutation",
  definition: t => {
    t.field("createPost", {
      type: post,
      args: { content: nonNull(stringArg()) },
      resolve: createPostResolver,
    });
  },
});

export const getPosts = extendType({
  type: "Query",
  definition: t => {
    t.field("getPosts", {
      type: list(post),
      resolve: getPostsResolver,
    });
  },
});

const post = objectType({
  name: "post",
  definition: t => {
    t.string("content");
    t.field("author", {
      type: author,
    });
  },
});

const author = objectType({
  name: "author",
  definition: t => {
    t.string("memberSince");
    t.string("username");
  },
});
