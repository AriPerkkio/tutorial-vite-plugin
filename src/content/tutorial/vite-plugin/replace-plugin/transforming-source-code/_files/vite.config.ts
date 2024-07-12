import { defineConfig } from "vite";
import replacePlugin from "./vite-plugin-replace";

export default defineConfig({
  plugins: [
    replacePlugin({
      from: "Initial value",
      to: "Replaced value",
    }),
  ],
});
