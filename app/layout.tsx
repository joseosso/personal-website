import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";

const font = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Ossorio",
  description: "Jose Ossorio portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <main className="lg:pl-[14vw] md:pl-[14vw] px-8 lg:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
