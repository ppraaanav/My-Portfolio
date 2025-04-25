
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
};
