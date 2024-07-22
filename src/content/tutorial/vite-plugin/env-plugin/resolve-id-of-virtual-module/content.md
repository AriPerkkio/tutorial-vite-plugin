---
type: lesson
title: Resolving the id of a virtual module
focus: /vite.config.ts
---

# Resolving the id of a virtual module

Our plugin is now able to load the virtual module. But other Vite plugins are failing as they also attempt to load it.

To solve this we'll need to internally mark the virtual module with a special prefix so that other plugins skip it. There's [a convention](https://vitejs.dev/guide/api-plugin#virtual-modules-convention) of using `\0` in the internal module ids - let's add that!

Vite internally resolve ids for each requested module using the `resolveId` hook. Add this to the plugin:

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

Next, we need prefix the resolved id using the special `\0` marker. Once `resolveId` is called for our virtual module's entry point, we'll return it with this prefix:

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

Perfect - the error from Vite's internal `plugin:vite:import-analysis` is now gone! But `index.js` still fails to load. The `load()` hook receives the resolved ids, so we need to be checking for the `\0` prefix in it as well:

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
