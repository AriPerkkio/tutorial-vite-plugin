---
type: lesson
title: Defining load hook
focus: /vite.config.ts
---

# Defining load hook

Next we'll need to intercept loading of `.yaml` files. Let's start by adding a [`load`](https://rollupjs.org/plugin-development/#load) hook in our Vite plugin.

```js
{
  name: "yaml-plugin",
  load(id, options) {
  }
}
```

Vite will call this hook with all the loaded files. As our plugin is only interested in `.yaml` files, we can check `id` for this extension.

```js
{
  name: "yaml-plugin",
  load(id, options) {
    if(id.endsWith('.yaml')) {
      // id === "/home/tutorial/content.yaml"
    }
  }
}
```

Our `load` function should return an object with `code` property. This property should contain the actual code that importing this specific `.yaml` file should produce. As we don't yet know how to convert `.yaml` files into Javascript, we can return something simpler here.

```js
{
  name: "yaml-plugin",
  load(id, options) {
    if(id.endsWith('.yaml')) {
      return {
        code: `export default "Trying to load '${id}' file.";`,
      };
    }
  }
}
```
