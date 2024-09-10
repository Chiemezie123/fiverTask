import type { Metadata } from "next";
import { formular } from "./fonts";
import "./globals.css";
import StickyHeader from "./components/Header/sticky_header";
import Header2 from "./components/Header/Header2";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "a designer portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={formular.className}>
      <Header2/>
        {children}
        
      </body>
    </html>
  );
}
