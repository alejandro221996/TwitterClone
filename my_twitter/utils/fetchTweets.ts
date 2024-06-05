import { Tweet } from "../typings";

export const fetchTweets = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://my_twitter.vercel.app";
  console.log(`http://localhost:3000/api/getTweets`);
  const res = await fetch(`http://localhost:3000/api/getTweets`);
  const data = await res.json();
  const tweets: Tweet[] = data.tweets;
  return tweets;
};
