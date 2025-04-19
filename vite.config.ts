import { dirname, resolve } from "path";

import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@config": resolve(__dirname, "./src/config"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@store": resolve(__dirname, "./src/store"),
      "@router": resolve(__dirname, "./src/router"),
    },
  },
});
