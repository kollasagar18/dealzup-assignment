// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Find the root element in index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Did you forget <div id='root'></div> in index.html?");
}

// ✅ Create React root and render App
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
