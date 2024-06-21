import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "env-plugin",
      load(id, options) {
        if (id === "virtual:tutorial-env") {
          return "export default 'This should work 🤔'";
        }
      },
    },
  ],
});
