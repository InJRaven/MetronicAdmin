// import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    alias: {
      "@": "/src", // Alias cho '@'
      "@assets": "/src/assets", // Alias cho '@assets'
      "@pages": "/src/components/pages", // Alias cho '@pages'
      "@partials": "/src/components/partials",
      // Alias cho '@partials'
      "@base": "/src/components/ui/Base",
      "@forms": "/src/components/ui/Forms",
      "@custom": "/src/components/ui/Custom",
      "@widgets": "/src/components/widgets",

      "@context": "/src/context", // Alias cho '@context'
      "@hook": "/src/hooks", // Alias cho '@hook'
    },
  },
});
