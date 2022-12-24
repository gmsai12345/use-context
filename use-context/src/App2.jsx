import React, { createContext, useContext, useState } from "react";

// Create the context
const MyContext = createContext({ t: (key) => key });
// takes key as arguement and returns key

// A component that consumes the context
function MyComponent() {
  // Use the useContext hook to access the context value
  const context = useContext(MyContext);

  const { t } = context;

  return <div>{t("welcome_message")}</div>;
}

// A component that provides a context value
export default function App() {
  const translations = {
    en: {
      welcome_message: "Welcome!"
    },
    es: {
      welcome_message: "¡Bienvenido!"
    }
  };

  const [language, setLanguage] = useState("en");
  // use state is used so that that whenever button is pressed it is next variable when next variavle changes
  // it displays in that forman and translations key and value will also be displayed
  // when it is mapped
  return (
    <MyContext.Provider value={{ t: (key) => translations[language][key] }}>
      <div>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("es")}>Español</button>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}
// Another common use case for the useContext hook is managing the theme of an application.
// The useContext hook is often used to share state or values that are relevant to multiple components within a tree.
// use context used for larger scale
// Render the App component
// for theme better to use usecontext than useeffect
