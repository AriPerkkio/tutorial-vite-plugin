import { defineConfig } from "vite";
import replacePlugin from "./vite-plugin-replace";

export default defineConfig({
  plugins: [
    replacePlugin({
      from: "Hello world",
      to: "Replaced value",
    }),
  ],
});
