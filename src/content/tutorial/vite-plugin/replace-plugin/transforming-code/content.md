---
type: lesson
title: Import plugin from file
focus: /vite.config.ts
---

# Vite Replace plugin

In this part we'll create a plugin that modifies our source code. This plugin will look for specific patterns in the source files and replace those with the configured value.

For example, with configuration of `{ from: "Initial value", to: "Replaced value" }` this plugin should replace all occurences of `"Initial value"` with `"Replaced value"`.

The plugin will also be in a separate file from our `vite.config.ts`.

```
├── vite-plugin-replace.ts
└── vite.config.ts
```

To use this plugin we'll be importing it from the `vite-plugin-replace.ts` and passing it's return value to our Vite configuration's `plugins`.

```ts
import replacePlugin from "./vite-plugin-replace";
```

Options are passed to the plugin as function argument.

```ts
replacePlugin({
  from: "Initial value",
  to: "Replaced value"
});
```

Import the plugin in `vite.config.ts` and pass it in `plugins`. The `vite-plugin-replace.ts` contains minimal plugin already.

Preview tab should indicate successful load of the plugin:

> Loaded Vite plugins: replace-plugin ✅
