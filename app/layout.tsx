import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocTreeView from "./ui/DocTreeView";
import { treeType } from "../types/treeType";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Metrics from "@/metrics";
const inter = Inter({ subsets: ["latin"] });

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
          {children}
        </ThemeProvider>
        <Metrics />
      </body>
    </html>
  );
}
