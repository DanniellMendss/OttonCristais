import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Adicione esta linha

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Cria o alias "@/..." → "./src"
    },
  },
});
