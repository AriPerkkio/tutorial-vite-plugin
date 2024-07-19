import { readFileSync } from "node:fs";
import { parse } from "yaml";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "yaml-plugin",
      load(id, options) {
        if (id.endsWith(".yaml")) {
          const content = readFileSync(id, "utf8");
          const yaml = parse(content);

          return {
            code: `export default ${JSON.stringify(yaml)}`
          };
        }
      }
    }
  ]
});
