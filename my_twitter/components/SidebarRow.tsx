import React, { SVGProps } from "react";
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
function SidebarRow({ Icon, title }: Props) {
  return (
    <div
      className="group flex max-w-fit cursor-pointer 
    items-center space-x-2 md:px-2 py-3 
    rounded-full transition-all duration-200 hover:bg-gray-100"
    >
      <Icon className="h-6 w-6" />
      <p
        className="hidden 
        group-hover:text-twitter
        md:inline-flex text-base font-bold lg:text-xl"
      >
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
