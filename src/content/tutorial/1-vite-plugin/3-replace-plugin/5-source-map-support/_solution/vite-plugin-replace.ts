import MagicString from "magic-string";

export default function vitePluginReplace(options) {
  return {
    name: "replace-plugin",
    transform(src, id) {
      if (id.includes("tutorial-example.js")) {
        const s = new MagicString(src);
        s.replaceAll(options.from, options.to);

        return {
          code: s.toString(),
          map: s.generateMap({ hires: "boundary" }),
        };
      }
    },
  };
}
