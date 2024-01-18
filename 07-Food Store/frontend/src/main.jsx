import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import AppContext from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
      <GlobalStyle />
    </AppContext>
  </React.StrictMode>
);

// Global styles


