import Link from "next/link";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="pt-32">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
