import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import replacePlugin from "./vite-plugin-replace";

export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),

    replacePlugin({
      from: "Initial value",
      to: "Replaced value",
    }),
  ],
});
