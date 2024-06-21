---
type: lesson
title: Environment Variables in Node
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

In this part we'll be creating a plugin that allows us to use environment variables from virtual module.
By "virtual" we mean a module that doesn't really exist on file system but is provided by a Vite plugin in runtime.

We'll be defining a module entrypoint for `"virtual:tutorial-env"`. Note that `virtual:` is a [convention of Vite virtual modules](https://vitejs.dev/guide/api-plugin#virtual-modules-convention).

```ts
import env from "virtual:tutorial-env";
```

But first let's take a look at how environment variables work in Node.

- On Unix systems environment variables can be passed to commands by defining them before command itself

  ```sh
  TUTORIAL_MESSAGE=Hello node index.js
  ```

<br aria-hidden />

- Environments variables are available in [`process.env`](https://nodejs.org/api/process.html#processenv)
  ```js
  console.log(process.env.TUTORIAL_MESSAGE);
  // Hello
  ```

Try passing a different value to `node ./index.js` in the terminal.
