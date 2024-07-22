---
type: lesson
title: Vite Env plugin
focus: /index.js
previews: false
template: empty
mainCommand: ""
prepareCommands: []
terminal:
  activePanel: 1
  panels:
    - ["terminal", "Terminal"]
---

# Vite Env plugin

In this chapter, we'll be creating a plugin that allows us to use environment variables from a virtual module.
By "virtual" we mean a module that doesn't exist on the file system but is provided by a Vite plugin in runtime.

We'll define a module entry point for `"virtual:tutorial-env"`. Note that `virtual:` is a [virtual modules convention](https://vitejs.dev/guide/api-plugin#virtual-modules-convention).

```ts
import env from "virtual:tutorial-env";
```

But first, let's take a look at how environment variables work in Node.

- On Unix systems environment variables can be passed to commands by defining them before the command itself

  ```sh
  TUTORIAL_MESSAGE=Hello node index.js
  ```

<br aria-hidden />

- Environment variables are available in [`process.env`](https://nodejs.org/api/process.html#processenv)
  ```js
  console.log(process.env.TUTORIAL_MESSAGE);
  // Hello
  ```

Try passing a different value to `node ./index.js` in the terminal.
