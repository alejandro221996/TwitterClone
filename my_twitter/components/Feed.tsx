import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import TweetBox from "./TweetBox";
import NavSection from "./NavSection";
function Feed() {
  return (
    <div className="col-span-7 border-2 lg:col-span-5 border-xl">
      <div className="flex  items-center justify-between">
        <h1 className="p-5 pl-4 pt-2 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      {/* TweetBox */}
      <NavSection />
      <TweetBox />
    </div>
  );
}

export default Feed;
