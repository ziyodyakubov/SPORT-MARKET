"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const pathname = usePathname();

  const noLayoutRoutes = ['/login'];
  const shouldRenderLayout = !noLayoutRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>

        {/* BOXICONS LINK */}
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {shouldRenderLayout && <Header />}
        <main>
          {children}
        </main>
        {shouldRenderLayout && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;
