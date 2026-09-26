import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: { include: ["react", "react-dom/client", "react/jsx-dev-runtime", "react-router-dom"] },
});
