export default function vitePluginReplace(options) {
  return {
    name: "replace-plugin",
    transform(code, id) {
      if (id.includes("tutorial-example.js")) {
        return { code: code.replaceAll(options.from, options.to) };
      }
    }
  };
}
