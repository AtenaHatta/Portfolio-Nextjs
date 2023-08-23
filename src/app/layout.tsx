import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "./(main)/components/DarkModeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Atena's portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className}>
            {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
