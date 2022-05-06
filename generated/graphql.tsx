import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<RegisterResponse>;
  createPost?: Maybe<Post>;
  login?: Maybe<LoginResponse>;
};


export type MutationCreateAccountArgs = {
  credentials: LoginCredentials;
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
};


export type MutationLoginArgs = {
  credentials: LoginCredentials;
};

export type Query = {
  __typename?: 'Query';
  getPosts?: Maybe<Array<Maybe<Post>>>;
  implicitLogin?: Maybe<ImplicitLoginResponse>;
  test?: Maybe<Scalars['Boolean']>;
};


export type QueryTestArgs = {
  bool: Scalars['Boolean'];
};

export type Author = {
  __typename?: 'author';
  memberSince?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ImplicitLoginResponse = {
  __typename?: 'implicitLoginResponse';
  loggedIn: Scalars['Boolean'];
  username?: Maybe<Scalars['String']>;
};

export type LoginCredentials = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'loginResponse';
  message?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'post';
  author?: Maybe<Author>;
  content?: Maybe<Scalars['String']>;
};

export type RegisterResponse = {
  __typename?: 'registerResponse';
  message: Scalars['String'];
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', test?: boolean | null };

export type RegisterAccountMutationVariables = Exact<{
  credentials: LoginCredentials;
}>;


export type RegisterAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'registerResponse', message: string } | null };

export type LoginMutationVariables = Exact<{
  credentials: LoginCredentials;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'loginResponse', username?: string | null } | null };

export type ImplicitLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type ImplicitLoginQuery = { __typename?: 'Query', implicitLogin?: { __typename?: 'implicitLoginResponse', loggedIn: boolean, username?: string | null } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', getPosts?: Array<{ __typename?: 'post', content?: string | null, author?: { __typename?: 'author', username?: string | null, memberSince?: string | null } | null } | null> | null };

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'post', content?: string | null, author?: { __typename?: 'author', username?: string | null, memberSince?: string | null } | null } | null };


export const TestDocument = gql`
    query Test {
  test(bool: false)
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQuery(baseOptions?: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options);
      }
export function useTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, options);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
export const RegisterAccountDocument = gql`
    mutation RegisterAccount($credentials: loginCredentials!) {
  createAccount(credentials: $credentials) {
    message
  }
}
    `;
export type RegisterAccountMutationFn = Apollo.MutationFunction<RegisterAccountMutation, RegisterAccountMutationVariables>;

/**
 * __useRegisterAccountMutation__
 *
 * To run a mutation, you first call `useRegisterAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAccountMutation, { data, loading, error }] = useRegisterAccountMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useRegisterAccountMutation(baseOptions?: Apollo.MutationHookOptions<RegisterAccountMutation, RegisterAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterAccountMutation, RegisterAccountMutationVariables>(RegisterAccountDocument, options);
      }
export type RegisterAccountMutationHookResult = ReturnType<typeof useRegisterAccountMutation>;
export type RegisterAccountMutationResult = Apollo.MutationResult<RegisterAccountMutation>;
export type RegisterAccountMutationOptions = Apollo.BaseMutationOptions<RegisterAccountMutation, RegisterAccountMutationVariables>;
export const LoginDocument = gql`
    mutation Login($credentials: loginCredentials!) {
  login(credentials: $credentials) {
    username
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ImplicitLoginDocument = gql`
    query ImplicitLogin {
  implicitLogin {
    loggedIn
    username
  }
}
    `;

/**
 * __useImplicitLoginQuery__
 *
 * To run a query within a React component, call `useImplicitLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useImplicitLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImplicitLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useImplicitLoginQuery(baseOptions?: Apollo.QueryHookOptions<ImplicitLoginQuery, ImplicitLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImplicitLoginQuery, ImplicitLoginQueryVariables>(ImplicitLoginDocument, options);
      }
export function useImplicitLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImplicitLoginQuery, ImplicitLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImplicitLoginQuery, ImplicitLoginQueryVariables>(ImplicitLoginDocument, options);
        }
export type ImplicitLoginQueryHookResult = ReturnType<typeof useImplicitLoginQuery>;
export type ImplicitLoginLazyQueryHookResult = ReturnType<typeof useImplicitLoginLazyQuery>;
export type ImplicitLoginQueryResult = Apollo.QueryResult<ImplicitLoginQuery, ImplicitLoginQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts {
  getPosts {
    author {
      username
      memberSince
    }
    content
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($content: String!) {
  createPost(content: $content) {
    author {
      username
      memberSince
    }
    content
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;