import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "./(main)/components/DarkModeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atena's portfolio",
  description: "Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <ThemeContextProvider>
        <body className={inter.className}>{children}</body>
      </ThemeContextProvider>
    </html>
  );
}
