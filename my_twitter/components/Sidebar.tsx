import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  EnvelopeIcon,
  EllipsisHorizontalCircleIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import TwitterIcon from "./icons/TwitterIcon";
import SidebarRow from "./SidebarRow";
function SideBar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <TwitterIcon />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={QueueListIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Profile" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default SideBar;
