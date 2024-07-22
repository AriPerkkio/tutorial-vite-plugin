---
type: lesson
title: The transform hook
focus: /vite-plugin-replace.ts
---

# the transform hook

Modifying the contents of a source code file is called **transforming** in Vite. To transform a module in a Vite plugin, we'll need to use `transform` hook.

```ts add={3}
{
  name: "replace-plugin",
  transform(code, id) { }
}
```

This hook is called with two options:

- `code` is the source code of the file, or the result of previous Vite plugin's transform
- `id` is the name of the module

As return value Vite expects an object with various properties.
In this tutorial we'll skip most of them and focus only on `code` property. This property should contain the transformed code that the plugin produces.

```ts
{
  name: "replace-plugin",
  transform(code, id) {
    return { code: <transformed Javascript code> }
  }
}
```

In `tutorial-example.js` we have a helper function `mountHTML()`. It can be used to modify the page on preview tab. Try changing the contents of `tutorial-example.js` using the `transform` hook so that `mountHTML` is called with `<h1>Changed!</h1>` instead.

> 💡 Note that the `transform` hook is called for every single module that Vite processes. Make sure to only transform `tutorial-example.js`. This can be detected by checking `id` for matches in the same way we did for the `load` hook in the previous chapter.
