

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser}/>
        {children}
        <Script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=768cfa19b1bb632dcd2d2a08696b9d29&libraries=services,clusterer&autoload=false"/>
        </body>

    </html>
  );
}
