---
type: lesson
title: Importing YAML files
focus: /index.js
---

# Welcome to the Vite Plugin API tutorial

Hey there, and welcome to the Vite Plugin API tutorial&nbsp;👋!

We'll create custom Vite plugins step by step, starting with a custom Vite plugin for loading `.yaml` files.

Our goal is to be able to import a `content.yaml` file in a module and use it as plain JavaScript object:

```js [index.js]
import content from "./content.yaml";

console.log(content);
// > [{  employees: [{ id: 1, ... }, ...], projects: [{ id: 101, ...}, ...] }]
```

Starting with the content as a variable in `index.js`, try changing the code to import it from the YAML file instead:

```js [index.js] add={1} del={2}
import content from "./content.yaml";
const content = ["Initial content"];

export default content;
```

We should run into an error when Vite fails to load `.yaml` file.&nbsp;❌
