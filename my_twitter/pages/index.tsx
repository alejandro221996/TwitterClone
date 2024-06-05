import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typings";

interface Props {
  tweets: Tweet[];
}
const Home = ({ tweets }: Props) => {
  console.log(tweets);
  return (
    <div className="mx-auto lg:max-w-6xl overflow-hidden max-h-screen ">
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="grid grid-cols-10">
        <SideBar />
        {/* SideBar */}
        <Feed />
        {/* Feed */}
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  };
};
