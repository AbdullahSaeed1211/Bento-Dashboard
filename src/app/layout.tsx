import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bento Dashboard",
  description: "Bento Dashboard created using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <div className="hidden lg:flex  min-w-[300px] border-r min-h-screen">
        <SideBar />
        </div>
        <main className="grid w-full h-full">
          <Header />
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
