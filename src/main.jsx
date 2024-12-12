import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/toaster";

const root = document.getElementById("root");
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme>
        <App />
        <Toaster />
      </Theme>
    </QueryClientProvider>
  </StrictMode>
);
