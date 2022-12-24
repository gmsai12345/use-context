import React, { createContext, useContext } from "react";
// the use context hook allows you to access context of value in function
// allows to pass components without using components
//
// Create the context
const MyContext = createContext({ value: "default" });
// we must first use this to give default value to the component

// A component that consumes the context
function MyComponent() {
  // Use the useContext hook to access the context value my context from my component

  const context = useContext(MyContext);

  return <div>Context value: {context.value}</div>;
  // value will be accessed down to get value
  // this is the current value of the context
  //
}

// A component that provides a context value
export default function App() {
  return (
    // to provide a context value to a component tree
    // use the Context.Provider component
    // give it in a format how you gave create
    <MyContext.Provider value={{ value: "some value" }}>
      <MyComponent />
    </MyContext.Provider>
  );
}

// Render the App component
