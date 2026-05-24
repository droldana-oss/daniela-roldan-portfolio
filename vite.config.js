import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/daniela-roldan-portfolio/",
  plugins: [react(), tailwindcss()],
});
