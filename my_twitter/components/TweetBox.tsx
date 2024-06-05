import React, { useState } from "react";
import {
  PhotoIcon,
  MagnifyingGlassIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 px-5 pb-2 pt-0 border-y-2">
      <img
        className="mt-2 h-14 w-14 rounded-full object-cover hidden md:inline"
        src="https://pbs.twimg.com/profile_images/1120010201388789760/qd18_5oX_normal.jpg"
        alt=""
      />
      <div className="flex flex-1 items-center lg:pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-4 text-twitter flex-1">
              <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <MagnifyingGlassIcon className="h-5 w-5" />
              <FaceSmileIcon className="h-5 w-5" />
              <CalendarDaysIcon className="h-5 w-5" />
              <MapPinIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40 rounded-full"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
