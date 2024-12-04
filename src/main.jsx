import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
