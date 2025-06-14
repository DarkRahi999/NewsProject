import type { Metadata } from "next";
import { Salsa, Roboto_Condensed  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/share/Nav";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto_Condensed({
  variable: "--font-Roboto_Condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "News 24",
  description: "This is a news Website. It provide us news updates 24 hours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${salsa.variable} ${roboto.variable} antialiased dark`}>
        <Navbar></Navbar>
        <main className="px-18 border">{children}</main>
      </body>
    </html>
  );
}
