import type { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import {
  ImplicitLoginDocument,
  ImplicitLoginQuery,
} from "../../generated/graphql";
import { initializeApollo } from "../lib/apolloClient";
import { prisma } from "../lib/prisma";
import Home from "../modules/components/Home";
import Register from "../modules/components/login/Register";

interface Props {
  username: string;
  loggedIn: boolean;
}

const Index = ({ loggedIn, username }: Props) => {
  return loggedIn ? <Home username={username} /> : <Register />;
};

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const cookies = nookies.get({ req });
  if (!cookies.sid) {
    return { props: { loggedIn: false } as Props };
  }

  const apolloClient = initializeApollo({
    ctx: { req, res, prisma },
  });

  const { data } = await apolloClient.query<ImplicitLoginQuery>({
    query: ImplicitLoginDocument,
  });

  if (!data.implicitLogin?.loggedIn) {
    return { props: { loggedIn: false } as Props };
  }

  return {
    props: {
      username: data?.implicitLogin?.username,
      loggedIn: data?.implicitLogin?.loggedIn,
    } as Props,
  };
};

export default Index;
