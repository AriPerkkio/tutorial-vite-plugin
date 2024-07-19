import { defineConfig, mergeConfig, type PluginOption } from "vite";

import viteConfig from "./vite.config";

const loadedPlugins = viteConfig.plugins?.map(getName).filter(Boolean).join();

export default mergeConfig(
  defineConfig({
    define: {
      TUTORIAL_LOADED_VITE_PLUGINS: `"${loadedPlugins || "none"}"`
    },
    build: {
      target: "esnext"
    }
  }),
  viteConfig
);

function getName(plugin: PluginOption) {
  if (plugin && "name" in plugin && plugin.name.length > 0) {
    return `${plugin.name} ✅`;
  }

  return null;
}
