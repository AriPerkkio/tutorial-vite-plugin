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
          const envVars = getTutorialEnvVariables();
          return `export default ${JSON.stringify(envVars)}`;
        }
      }
    }
  ]
});

function getTutorialEnvVariables() {
  const output = {};
  const names = Object.keys(process.env);

  for (const name of names) {
    if (name.startsWith("TUTORIAL_")) {
      output[name] = process.env[name];
    }
  }

  return output;
}
