---
type: lesson
title: Transforming source code
focus: /vite-plugin-replace.ts
---

# Transforming source code

Now that we can use `transform` hook to return code for a requested module, let's try modifying the original source code of the module.

In the `vite.config.ts` we are passing the options for our plugin:

```ts
replacePlugin({
  from: "Initial value",
  to: "Replaced value",
}),
```

We can access these in our plugin's arguments:

```ts add={1} del={2}
export default function vitePluginReplace(options) {
export default function vitePluginReplace() {
  return {
    name: "replace-plugin",
```

Next we need to modify the `src` of `transform` hook with the options.

```ts
src.replaceAll(options.from, options.to);
```

Add these changes to the `vite-plugin-replace.ts` and set proper values for the plugin options in `vite.config.ts`, so that preview tab outputs `Replaced value!`.
