export default function vitePluginReplace() {
  return {
    name: "replace-plugin",
    transform(code, id) {
      if (id.includes("tutorial-example.js")) {
        return { code: "mountHTML('<h1>Changed!</h1>')" };
      }
    }
  };
}
