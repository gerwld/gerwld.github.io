import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

export default defineConfig({
 plugins: [preact()],
 esbuild: {
  jsxFactory: "h",
  jsxFragment: "Fragment",
  jsxInject: `import { h, Fragment } from 'preact'`,
 },
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
