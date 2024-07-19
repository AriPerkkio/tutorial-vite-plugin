---
type: lesson
title: Importing virtual module
focus: /index.js
---

# Importing virtual module

Now that we know how environment variables work, let's continue with our custom plugin!

Add an import for the virtual module in `index.js`. At this point it should break our Vite setup but that's fine!

```ts add={1,2} del={3}
import env from "virtual:tutorial-env";
const output = env;
const output = "Initial output";

export default output;
```

To fix the loading error we'll need to create a Vite plugin that can handle this special `virtual:tutorial-env` import.
Let's add a new plugin with the name `env-plugin`.

```ts
export default defineConfig({
  plugins: [
    {
      name: "env-plugin"
    }
  ]
});
```

In the previous lessons we saw that a plugin can intercept module request in the `load()` hook. Let's try using the same trick here.

```ts
{
  name: "env-plugin",
  load(id, options) {
    if (id === "virtual:tutorial-env") {
      return "export default 'This should work 🤔'";
    }
  },
},
```

Even when we are handling the loading of the file, Vite keeps showing an error. Note how this error is thrown by another Vite plugin - Vite's internal `plugin:vite:import-analysis`.

> [plugin:vite:import-analysis] Failed to resolve import "virtual:tutorial-env" from "index.js". Does the file exist?

Let's look at this error more in the next lesson!
