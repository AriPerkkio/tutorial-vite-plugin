---
type: lesson
title: Defining transform hook
focus: /vite-plugin-replace.ts
---

# Transform hook

Modifying contents of a source code file is called **transforming** in Vite. To do this in a Vite plugin, we'll need to use `transform` hook.

```ts add={3}
{
  name: "replace-plugin",
  transform(code, id) { }
}
```

This hooks is called with two options:

- `src` is the source code of the file, or the result of previous Vite plugin's transform
- `id` is the name of the module

As return value Vite expects an object with various properties.
In this tutorial we'll skip most of them and focus only on `code` property. This property should contain the transformed code that the plugin produces.

```ts
{
  name: "replace-plugin",
  transform(src, id) {
    return { code: <transformed Javascript code> }
  }
}
```

In `tutorial-example.js` we have a helper function `mountHTML()`. It can be used to modify the page on preview tab. Try changing the contents of `tutorial-example.js` using `transform` hook so that `mountHTML` is called with `<h1>Changed!</h1>` instead.

> 💡 Note that `transform` hook is called for every single file that Vite processes. Make sure to specifically transform only `tutorial-example.js`. This can be detected by checking `id` for matches exactly as we did with the `load` hook.
