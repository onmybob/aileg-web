import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocTreeView from "./ui/DocTreeView";
import { treeType } from "../types/treeType";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ThemeSwitch from "@/components/ThemeSwitch";
const inter = Inter({ subsets: ["latin"] });
import { initialize } from "react-native-clarity";

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
  const navItems: treeType[] = [
    {
      id: 1,
      parentId: null,
      href: "",
      lable: "Introduction",
      icon: null,

      children: [
        {
          id: 6,
          parentId: 1,
          href: "/docs/brief",
          lable: "What is aileg?",
          icon: null,
          children: [],
        },
        {
          id: 7,
          parentId: 1,
          href: "/docs/benefit",
          lable: "Design goals",
          icon: null,
          children: [],
        },
        {
          id: 8,
          parentId: 1,
          href: "/docs/changelog",
          lable: "Changelog",
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: 2,
      parentId: null,
      href: "#",
      lable: "Quickstart",
      icon: null,
      children: [
        {
          id: 21,
          parentId: 2,
          href: "#",
          lable: "Overview",
          icon: null,
          children: [],
        },
        {
          id: 22,
          parentId: 2,
          href: "#",
          lable: "HTTP Headers",
          icon: null,
          children: [],
        },
        {
          id: 23,
          parentId: 2,
          href: "#",
          lable: "Response Headers",
          icon: null,
          children: [],
        },
        {
          id: 24,
          parentId: 2,
          href: "#",
          lable: "Hello World",
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: 4,
      parentId: null,
      href: "#",
      lable: "Computer vision",
      icon: null,
      children: [
        {
          id: 41,
          parentId: 4,
          href: "#",
          lable: "Face recognition",
          icon: null,
          children: [],
        },
        {
          id: 42,
          parentId: 4,
          href: "#",
          lable: "Face generation",
          icon: null,
          children: [],
        },
        {
          id: 43,
          parentId: 4,
          href: "#",
          lable: "Skin beauty",
          icon: null,
          children: [],
        },
        {
          id: 44,
          parentId: 4,
          href: "#",
          lable: "License Plate Recognition",
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: 3,
      parentId: null,
      href: "#",
      lable: "Data and Analytics",
      icon: null,
      children: [],
    },

    {
      id: 5,
      parentId: null,
      href: "#",
      lable: "Language processing",
      icon: null,
      children: [],
    },
    {
      id: 6,
      parentId: null,
      href: "#",
      lable: "Voice",
      icon: null,
      children: [],
    },
  ];
  initialize("l2jzdbletw");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="dark:bg-black  h-16 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-12">
            <div className="header-left flex items-center space-x-4">
              <span className="text-gray-800 dark:text-white">Aileg.io</span>
            </div>
            <div className="header-right space-x-4 flex items-center">
              <ThemeSwitch />
            </div>
          </header>

          <div className="flex min-h-screen dark:bg-black">
            <nav className="left-menu w-auto border-r border-gray-200 dark:border-gray-700  py-8 px-12 flex flex-shrink-0">
              <DocTreeView navItems={navItems} />
            </nav>
            <div className="py-8 px-12 container">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
