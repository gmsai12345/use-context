import React, { createContext, useContext, useState } from "react";

// Create the context
const CountContext = createContext();

// A component that consumes the context
function Counter() {
  // Use the useContext hook to access the context value
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// A component that provides a context value
export default function App() {
  const [count, setCount] = useState(0);

  // Provide the context value to consuming components
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {/* Render some components that consume the context value */}
      <Counter />
    </CountContext.Provider>
  );
}

// Render the App component
