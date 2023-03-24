import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
 plugins: [react()],
 base: "./",
 define: {
  APP_VERSION: JSON.stringify(process.env.npm_package_version),
 },
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },
});
