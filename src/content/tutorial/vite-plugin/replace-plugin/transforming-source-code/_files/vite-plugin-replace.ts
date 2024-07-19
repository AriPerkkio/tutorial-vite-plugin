export default function vitePluginReplace() {
  return {
    name: "replace-plugin",
    transform(src, id) {
      if (id.includes("tutorial-example.js")) {
        return { code: src };
      }
    }
  };
}
