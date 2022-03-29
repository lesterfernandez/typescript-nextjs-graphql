import { gql, useQuery } from "@apollo/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import {
  addApolloState,
  initializeApollo,
} from "../lib/apolloClient";
import { prisma } from "../lib/prisma";
import Register from "../modules/components/login/Register";

const testQuery = gql`
  {
    test(bool: true)
  }
`;

const Home: NextPage = () => {
  const { data } = useQuery(testQuery, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <div>{JSON.stringify(data?.test)}</div>
      <Register />
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  await apolloClient.query({ query: testQuery });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
