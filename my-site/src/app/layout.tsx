import "./globals.css";
import type { Metadata } from "next";
import Taskbar from "@/components/Taskbar";

export const metadata: Metadata = {
  title: "Jeffrey Wan",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white font-sans">
        <Taskbar />
        {children}
      </body>
    </html>
  );
}
