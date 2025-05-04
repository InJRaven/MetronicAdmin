import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { MenusProvider, ThemeProvider } from "./";

const queryClient = new QueryClient();
const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
            <MenusProvider>{children}</MenusProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};
export { ProvidersWrapper };
