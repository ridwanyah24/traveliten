import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { Nav } from "../../components/ui/nav";
import { Providers } from "../provider";

export const metadata: Metadata = {
  title: "Travel Itenary Planenr",
  description: "Created by Ridwan Adesina Yahya",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={` antialiased bg-gray-200`}
      > <Nav/>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
