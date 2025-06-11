import type { Metadata } from "next";
import { Salsa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/share/Nav";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Structure",
  description: "This is a basic Structure for start a new project. Easy to set up just copy and paste ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${salsa.variable} antialiased dark`}>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
