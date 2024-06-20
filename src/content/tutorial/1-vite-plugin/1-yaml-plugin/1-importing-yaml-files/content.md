---
type: lesson
title: importing-yaml-files
focus: /index.js
---

# Welcome to Vite Plugin tutorial

Hey there, and welcome to Vite Plugin tutorial 👋!

In this tutorial we'll go through steps for creating custom Vite plugins. We'll start by creating a custom Vite plugin for loading `.yaml` files.

Our goal is to be able to import `content.yaml` file in a Javascript file and use it as plain Javascript object.

```js [index.js]
import content from "./content.yaml";

console.log(content);
// > [{ employees: [{ id: 1, ...}, ...], projects: { id: 101, ...}, ... }]
```

Try doing this in `index.js`:

```js [index.js] add={1} del={2}
import content from "./content.yaml";
const content = ["Initial content"];

export { content };
```

At this point we should run into error when Vite fails to load `.yaml` file. ❌
