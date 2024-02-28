import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocTreeView from "./ui/DocTreeView";
import { treeType } from "../types/treeType";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ThemeSwitch from "@/components/ThemeSwitch";
import Metrics from "@/metrics";
const inter = Inter({ subsets: ["latin"] });
import { MdMenu } from "react-icons/md";
import docsNavData from "@/data/docsNavData";
import SideBarSwitch from "./ui/SideBarSwitch";

export const metadata: Metadata = {
  title: "Easy to empower your program by aileg",
  description:
    "Explore AI and enhance your programs with the AI leg developer platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen w-screen overflow-hidden dark:bg-main ">
            <header className="flex  h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800 dark:bg-header lg:px-6">
              <div className="header-left flex items-center space-x-4">
                <span className="text-gray-800 dark:text-white">Aileg.io</span>
              </div>
              <div className="header-right flex items-center space-x-4">
                <ThemeSwitch />
                <SideBarSwitch />
              </div>
            </header>

            <div className="flex ">
              <nav className="left-menu hidden h-screen  flex-shrink-0 flex-col   overflow-scroll border-r border-gray-200  px-6 py-8 dark:border-gray-800 lg:flex  ">
                <DocTreeView navItems={docsNavData} />
              </nav>

              <div className=" flex   h-screen overflow-scroll">{children}</div>
            </div>
          </div>
        </ThemeProvider>
        <Metrics />
      </body>
    </html>
  );
}
