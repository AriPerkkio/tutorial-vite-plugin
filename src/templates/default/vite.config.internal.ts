import { defineConfig, mergeConfig } from "vite";

import viteConfig from "./vite.config";

export default mergeConfig(
  defineConfig({
    // More options here?
  }),
  viteConfig
);
