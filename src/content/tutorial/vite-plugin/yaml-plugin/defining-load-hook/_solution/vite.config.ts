import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "yaml-plugin",
      load(id, options) {
        if (id.endsWith(".yaml")) {
          return {
            code: `export default "Trying to load '${id}' file.";`,
          };
        }
      },
    },
  ],
});
