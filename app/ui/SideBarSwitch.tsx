"use client";

import { MdMenu } from "react-icons/md";
import DocTreeView from "./DocTreeView";
import docsNavData from "@/data/docsNavData";
import React from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

function SideBarSwitch() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center">
      <button onClick={() => setOpen(!open)} className="lg:hidden peer">
        <IoIosMenu size={34} />
      </button>

      <div
        className={`${
          open ? "block" : "hidden"
        } h-full w-full absolute left-0 top-0  duration-200`}
      >
        <div className="bg-side-bar2  w-full h-full opacity-90"></div>
        <div className="h-screen duration-500 border-l border-gray-700 absolute w-2/3  dark:bg-side-bar bg-gray-100 shadow-lg shadow-gray-800 right-0 top-0 ">
          <div className="h-16 flex justify-end px-4 items-center ">
            <button
              onClick={() => setOpen(false)}
              className="rounded dark:bg-gray-700 text-gray-500 dark:hover:text-white bg-gray-300 hover:text-black"
            >
              <IoIosClose size={30} />
            </button>
          </div>
          <div className="px-8 py-4 ">
            <DocTreeView navItems={docsNavData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarSwitch;
