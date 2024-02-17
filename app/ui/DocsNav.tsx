import React from "react";
import DocTreeView from "./DocTreeView";
import docsNavData from "@/data/docsNavData";

const DocsNav = () => {
  return (
    <div className="min-h-full absolute w-2/3  bg-gray-800 px-4 py-4">
      <DocTreeView navItems={docsNavData} />
    </div>
  );
};

export default DocsNav;
