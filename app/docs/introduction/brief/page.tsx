import React from "react";

const brief = () => {
  return (
    <div className="flex-shrink-1 mx-auto flex w-full flex-col break-words  px-8 py-8 leading-7">
      <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Introduction
      </h1>
      <span className="mt-6  text-neutral-600  dark:text-neutral-400">
        Do you want to use AI features in your project, such as face
        recognition, voice cloning, automatic video generation, etc.? Now, you
        don’t need expensive servers for big data model training. We provide
        interfaces. You only need to simply develop to have AI functions, which
        is as easy as calling the weather forecast API.
      </span>
      <h2 className="mt-12 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
        Resources:
      </h2>
      <span className="mt-6  text-neutral-600  dark:text-neutral-400"></span>
    </div>
  );
};

export default brief;
