---
type: lesson
title: Defining the load hook
focus: /vite.config.ts
---

# Defining the load hook

Next we'll need to intercept loading of `.yaml` files. Let's start by adding a [`load`](https://rollupjs.org/plugin-development/#load) hook in our Vite plugin.

```js
{
  name: "yaml-plugin",
  load(id, options) {
  }
}
```

Vite will call the load hook of every plugin for each resolved id to the load the module code. A load hook can return custom code for an id, or skip it by to let other plugins handle it. As our plugin is only interested in `.yaml` files, we can check `id` for this extension. 

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

Our `load` function should return an object with a `code` property for these ids. This property should contain the actual code that importing this specific `.yaml` file should produce. As we don't yet know how to convert `.yaml` files into JavaScript, let's return a simple module that exports a default string first:

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
