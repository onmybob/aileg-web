import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import Link from "next/link";
import SideBarSwitch from "./ui/SideBarSwitch";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-col ">
        <div className="mr-5 flex flex-row items-center justify-end  gap-4 pt-5">
          <ThemeSwitch />
          <SideBarSwitch />
        </div>
      </div>
      <div className="container mx-auto flex  flex-col items-center pt-60 ">
        <div className="text-3xl  font-semibold text-neutral-700 dark:text-neutral-500   lg:text-7xl">
          Meet AI with aileg.
        </div>
        <div className="mt-10 w-[220px]  text-center leading-8 text-neutral-500  lg:w-[520px]">
          Need AI to your program? Calling our AI apis can add energy to your
          program, which is a very fast and convenient way.
        </div>
        <Link href="/docs/introduction">
          <button className="mt-10 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition duration-500 hover:scale-90">
            GET STARTED
          </button>
        </Link>
      </div>
    </main>
  );
}
