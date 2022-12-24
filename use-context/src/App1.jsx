import React, { createContext, useContext } from "react";

// Create the context
const MyContext = createContext({
  authenticatedUser: null,
  theme: { backgroundColor: "white", textColor: "black" }
});
// use context is same like use state but with many value
// and we get it in many array and we change it in the return tag
// A component that consumes the context
function MyComponent() {
  // Use the useContext hook to access the context value
  const context = useContext(MyContext);
  const { authenticatedUser, theme } = context;

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      {authenticatedUser ? (
        <div>Welcome, {authenticatedUser.name}</div>
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  );
}

// A component that provides a context value
export default function App() {
  return (
    <MyContext.Provider
      value={{
        authenticatedUser: { name: "John Doe" },
        theme: { backgroundColor: "lightblue", textColor: "white" }
      }}
    >
      <MyComponent />
    </MyContext.Provider>
  );
}

// Render the App component
