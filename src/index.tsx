import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Fake backend
import "./backend";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
