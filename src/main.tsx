import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import setupAxios from "./common/axios";
import { BrowserRouter, HashRouter } from "react-router-dom";
setupAxios();
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HashRouter>
  </React.StrictMode>
);
