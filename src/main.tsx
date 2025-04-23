import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProvidersWrapper } from "@/provider";
import App from "./views/App.tsx";
import "@/assets/scss/index.scss";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>

  // </StrictMode>
  <ProvidersWrapper>
    <App />
  </ProvidersWrapper>
);
