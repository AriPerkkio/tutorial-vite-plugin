---
type: lesson
title: Import plugin from file
focus: /vite.config.ts
---

# Vite Replace plugin

In this chapter we'll create a plugin that modifies loaded source code. This plugin will look for specific patterns in the source files and replace those with the configured value.

For example, when configured with `{ from: "Initial value", to: "Replaced value" }` this plugin should replace all occurrences of `"Initial value"` with `"Replaced value"`.

The plugin will also be in a separate file from our `vite.config.ts`.

```
├── vite-plugin-replace.ts
└── vite.config.ts
```

To use this plugin we'll be importing it from the `vite-plugin-replace.ts` module and passing it's return value to our Vite configuration's `plugins`.

```ts
import replacePlugin from "./vite-plugin-replace";
```

`replacePlugin` is a plugin constructor. We'll call it with options to create a plugin instance.

```ts
replacePlugin({
  from: "Initial value",
  to: "Replaced value"
});
```

Import the plugin constructor in `vite.config.ts` and call it to add a new plugin in the `plugins` array. The `vite-plugin-replace.ts` contains a minimal plugin already.

The preview tab should indicate a successful load of the plugin:

> Loaded Vite plugins: replace-plugin ✅
