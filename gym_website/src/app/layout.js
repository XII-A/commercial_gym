import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import SubToTips from "@/components/SubscribeToTips/SubToTips";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitness",
  description: "Achieve your dreams with Fitness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id="home">
        <Navbar />
        {children}
        <SubToTips />
        <Footer />
      </body>
    </html>
  );
}
