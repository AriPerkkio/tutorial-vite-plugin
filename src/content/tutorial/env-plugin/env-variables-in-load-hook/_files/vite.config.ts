import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "env-plugin",
      resolveId(id) {
        if (id === "virtual:tutorial-env") {
          return "\0virtual:tutorial-env";
        }
      },
      load(id, options) {
        if (id === "\0virtual:tutorial-env") {
          return "export default 'This should work 🤔'";
        }
      }
    }
  ]
});
