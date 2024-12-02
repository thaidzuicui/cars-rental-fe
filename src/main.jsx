import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
