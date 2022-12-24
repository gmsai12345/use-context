import React, { createContext, useContext, useState } from "react";

// Create the context objects
const ThemeContext = createContext();
const LanguageContext = createContext();

export default function App() {
  const [appTheme, setAppTheme] = useState("light");
  const [appLanguage, setAppLanguage] = useState("english");

  // Use the useContext hook to access the context values
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  // Use the theme and language values to style the button
  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: language === "english" ? "black" : "white"
  };

  // Provide the context values to consuming components
  return (
    <ThemeContext.Provider value={{ theme: appTheme, setTheme: setAppTheme }}>
      <LanguageContext.Provider
        value={{ language: appLanguage, setLanguage: setAppLanguage }}
      >
        <button style={style}>Click me!</button>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
