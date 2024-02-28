import { ReactNode } from "react";
import DocTreeView from "../ui/DocTreeView";
import docsNavData from "@/data/docsNavData";
import SideBarSwitch from "../ui/SideBarSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";
import "@/app/docs/style.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="mx-auto flex h-screen flex-row  ">
        <div className="hidden  justify-end border-r-[1px] border-r-side-bar2  pl-10 pt-20  lg:flex">
          <DocTreeView navItems={docsNavData} />
        </div>
        <div className="flex w-full flex-col ">
          <div className="mr-5 flex flex-row items-center justify-end  gap-4 pt-5">
            <ThemeSwitch />
            <SideBarSwitch />
          </div>

          <div className="flex-shrink-1 mx-auto flex w-full flex-col break-words px-8  py-8 pl-10 leading-8 text-neutral-600  dark:text-neutral-400">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
