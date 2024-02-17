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
import DocsNav from "./ui/DocsNav";
import docsNavData from "@/data/docsNavData";
import SideBarSwitch from "./ui/SideBarSwitch";

export const metadata: Metadata = {
  title: "AI Api tools, make your system ai-enabled",
  description:
    "Explore ai, API docs, and dynamic examples to get the most out of  AI's developer platform to empower your programs.",
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
          <header className="dark:bg-header  h-16 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-4 lg:px-12">
            <div className="header-left flex items-center space-x-4">
              <span className="text-gray-800 dark:text-white">Aileg.io</span>
            </div>
            <div className="header-right space-x-4 flex items-center">
              <ThemeSwitch />
              <SideBarSwitch />
            </div>
          </header>

          <div className="flex min-h-screen dark:bg-main">
            <nav className="hidden left-menu w-50 border-r border-gray-200 dark:border-gray-700  py-8 px-12 lg:flex flex-shrink-0">
              <DocTreeView navItems={docsNavData} />
            </nav>

            <div className="py-8 px-12 container ">{children}</div>
          </div>
        </ThemeProvider>
        <Metrics />
      </body>
    </html>
  );
}
