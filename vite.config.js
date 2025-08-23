import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Mantém caminhos absolutos funcionando no Vercel
  server: { port: 5173, open: true },
});