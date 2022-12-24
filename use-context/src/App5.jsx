import React, { createContext, useContext, useState } from "react";

// Create the context object
const AuthContext = createContext();

export default function App() {
  const [user, setUser] = useState({ name: "John" });
  // A component that consumes the auth context
  function UserInfo() {
    // Use the useContext hook to access the context value
    const { user } = useContext(AuthContext);
    // Use the user value to display the user's name
    return <p>Welcome, {user.name}!</p>;
  }

  // Provide the context value to consuming components
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* Render some components that consume the context value */}
      <UserInfo />
    </AuthContext.Provider>
  );
}

// Render the App component
