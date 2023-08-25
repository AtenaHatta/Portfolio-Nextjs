import "./globals.css";
import { Yeseva_One } from "next/font/google";
import { ThemeContextProvider } from "./(main)/components/DarkModeProvider";

const yesevaOne = Yeseva_One({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yesevaOne",
});

export const metadata = {
  title: "Atena's portfolio",
  description: "Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={yesevaOne.className}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <ThemeContextProvider>
        <body className={yesevaOne.className}>{children}</body>
      </ThemeContextProvider>
    </html>
  );
}
