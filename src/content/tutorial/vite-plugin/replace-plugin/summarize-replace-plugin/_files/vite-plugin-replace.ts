export default function vitePluginReplace(options) {
  return {
    name: "replace-plugin",
    transform(src, id) {
      if (id.includes("tutorial-example.js")) {
        return { code: src.replaceAll(options.from, options.to) };
      }
    },
  };
}
