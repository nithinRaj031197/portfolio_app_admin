import React, { useState, createContext, useContext } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component that sets the current theme state
function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  // Toggle between light and dark themes
  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  const isDarkMode = mode !== "light";

  // Pass the current theme and toggle function to the provider's value prop
  const value = { mode, toggleMode, isDarkMode };

  // Return the provider with the value prop and children
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useModeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
