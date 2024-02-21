import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.scss";

const App = () => {
  return (
    <div className="container">
      <h1>Hello.</h1>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
