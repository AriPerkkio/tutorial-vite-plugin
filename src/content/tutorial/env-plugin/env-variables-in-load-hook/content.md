---
type: lesson
title: Env variables in the load hook
focus: /vite.config.ts
mainCommand: ""
previews: []
terminal:
  open: true
  activePanel: 1
  panels:
    - ["terminal", "Terminal"]
---

# Env variables in the load hook

We are now able to intercept the loading of the virtual module and have prevented other plugins from colliding with it.

Next, we'll need to handle the actual environment variables. As environment variables are an easy way to expose secrets, let's extend our plugin to only expose variables that are prefixed with `TUTORIAL_`:

```ts
function getTutorialEnvVariables() {
  const output = {};
  const names = Object.keys(process.env);

  for (const name of names) {
    if (name.startsWith("TUTORIAL_")) {
      output[name] = process.env[name];
    }
  }

  return output;
}
```

Let's use `getTutorialEnvVariables` in the `load` hook to collect all `TUTORIAL_` prefixed environment variables and return them as a object.

```ts add={3,4} del={5}
load(id, options) {
  if (id === "\0virtual:tutorial-env") {
    const envVars = getTutorialEnvVariables();
    return `export default ${JSON.stringify(envVars)}`;
    return "export default 'This should work 🤔'";
  }
},
```

Next, let's start Vite server from the terminal while providing an environment variable:

```sh
TUTORIAL_MY_MESSAGE="Hello world" npm run dev
```

The passed environment variable should now appear in the preview tab.&nbsp;✅
