import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import App1 from "./App1";
import App2 from "./App2";
import App4 from "./App4";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App1 />
    <App2 />
    <App4 />
  </StrictMode>
);
