import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";


export const metadata: Metadata = {
  title: "Travel Itenary Planner",
  description: "Created By Ridwan Adesina Yahya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-gray-200`}
      >
       <Providers>{children}</Providers>
       </body>
    </html>
  );
}
