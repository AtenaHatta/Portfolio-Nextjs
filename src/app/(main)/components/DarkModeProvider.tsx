"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type DarkMode = "dark" | "light";

type ThemeContext = {
  darkMode: DarkMode;
  setDarkMode: React.Dispatch<React.SetStateAction<DarkMode>>;
};
const DarkModeContext = createContext<ThemeContext | null>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<DarkMode>("light");

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error(
      "Use theme context must be used within a themeContextProvider"
    );
  }
  return context;
};
