import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { APP_ROUTER } from "./router";

const qc = new QueryClient();

function AppProvider() {
  return (
    <QueryClientProvider client={qc}>
      <RouterProvider router={APP_ROUTER} />
    </QueryClientProvider>
  );
}

export default AppProvider;
