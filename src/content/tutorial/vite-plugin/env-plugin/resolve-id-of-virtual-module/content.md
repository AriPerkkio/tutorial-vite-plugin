---
type: lesson
title: Resolving id of virtual module
focus: /vite.config.ts
---

# Resolving id of virtual module

Our plugin is now able to load the virtual module. But there are other Vite plugins failing as they also attempt to load it.

To solve this we'll need to internally mark the virtual module with a special prefix so that other plugins will know to skip it. There's [a convention](https://vitejs.dev/guide/api-plugin#virtual-modules-convention) of using `\0` in the internal module ids - let's add that!

Vite will internally resolve ids for each requested module using the `resolveId` hook. Add this to the plugin:

```ts add={3}
{
  name: "env-plugin",
  resolveId(id) { },
  load(id, options) {
    if (id === "virtual:tutorial-env") {
      return "export default 'This should work 🤔'";
    }
  },
}
```

Next we'll need to use the special `\0` prefix in the resolved id. We can simply look for our virtual module's entrypoint and return that with the prefix:

```ts
{
  name: "env-plugin",
  resolveId(id) {
    if (id === "virtual:tutorial-env") {
      return "\0virtual:tutorial-env";
    }
  },
  load(id, options) {
    if (id === "virtual:tutorial-env") {
      return "export default 'This should work 🤔'";
    }
  },
}
```

Perfect - the error from Vite's internal `plugin:vite:import-analysis` is now gone! But `index.js` still fails to load.

To fix this we'll need to apply the `\0` prefix in the `load()` hook as well:

```ts add={9} del={10}
{
  name: "env-plugin",
  resolveId(id) {
    if (id === "virtual:tutorial-env") {
      return "\0virtual:tutorial-env";
    }
  },
  load(id, options) {
    if (id === "\0virtual:tutorial-env") {
    if (id === "virtual:tutorial-env") {
      return "export default 'This should work 🤔'";
    }
  },
}
```

The code returned from `load` hook is now visible in the browser!&nbsp;✅
