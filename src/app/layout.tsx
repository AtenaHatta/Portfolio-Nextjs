"use client";
import Navbar from "./(main)/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Contact from "./(main)/components/Contact/Contact";
import { ThemeContextProvider } from "./(main)/components/DarkModeProvider";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio",
//   description: "Atena's portfolio",
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className}>
          <div
            className={`${darkMode ? "dark:bg-black dark:text-white" : ""} `}
          >
            <Navbar />
            {children}
            <Contact />
          </div>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
