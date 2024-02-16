import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocTreeView from "./ui/DocTreeView";
import { treeType } from "../types/treeType";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ThemeButton from "@/components/ThemeButton";
import ThemeSwitch from "@/components/ThemeSwitch";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Api tools, make your system ai-enabled",
  description: "Generated by create next app",
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
      lable: "介绍",
      icon: null,

      children: [
        {
          id: 6,
          parentId: 1,
          href: "/doc/introduction",
          lable: "这是什么",
          icon: null,
          children: [],
        },
        {
          id: 7,
          parentId: 1,
          href: "/doc/benefit",
          lable: "可以带来什么好处",
          icon: null,
          children: [],
        },
        {
          id: 8,
          parentId: 1,
          href: "#",
          lable: "为什么要使用",
          icon: null,
          children: [],
        },
        {
          id: 9,
          parentId: 1,
          href: "#",
          lable: "远景规划",
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: 2,
      parentId: null,
      href: "#",
      lable: "如何使用",
      icon: null,
      children: [
        {
          id: 21,
          parentId: 2,
          href: "#",
          lable: "使用介绍",
          icon: null,
          children: [],
        },
        {
          id: 22,
          parentId: 2,
          href: "#",
          lable: "密钥生成",
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: 3,
      parentId: null,
      href: "#",
      lable: "我是一级1",
      icon: null,
      children: [],
    },
    {
      id: 4,
      parentId: null,
      href: "#",
      lable: "我是一级2",
      icon: null,
      children: [],
    },
    {
      id: 5,
      parentId: null,
      href: "#",
      lable: "我是一级3",
      icon: null,
      children: [],
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className=" dark:bg-gray-900 h-16 border-b border-gray-200 flex justify-between items-center px-12">
            <div className="header-left flex items-center space-x-4">
              <span className="text-gray-800">Aileg.io</span>
            </div>
            <div className="header-right space-x-4 flex items-center">
              <a href="#">a</a>
              <a href="#">b</a>
              <a href="#">c</a>
              <a href="#">d</a>
              <ThemeSwitch />
            </div>
          </header>

          <div className="flex min-h-screen ">
            <nav className="left-menu w-auto border-r border-gray-200 py-8 px-12 flex flex-shrink-0">
              <DocTreeView navItems={navItems} />
            </nav>
            <div className="py-8 px-12 container">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
