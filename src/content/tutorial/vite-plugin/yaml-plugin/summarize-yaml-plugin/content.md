---
type: lesson
title: Summary
focus: /vite.config.ts
---

# Summary

Our custom Vite plugin can now intercept `*.yaml` file imports and load them as JavaScript modules.

Before you head on to create your own plugins for loading some other non-Javascript files, let's summarize what we've done:

<ol>
  <li>Source code loads YAML-file: <code class="whitespace-nowrap">import content from "./some-file.yaml"</code>

  <li class="mt2">Vite plugin's <code>load()</code> hook intercepts <code>.yaml</code> request</li>

  <li class="mt2">Contents of requested file are read from file system using <code>readFileSync()</code> from <code>node:fs</code> module</li>

  <li class="mt2">YAML content is converted into Javascript using <code>parse()</code> from <code>yaml</code> module</li>

  <li class="mt2">Javascript object is serialized into text using <code>JSON.stringify()</code> and returned as default export from <code>load()</code> hook</li>

  <li class="mt2">Source code successfully loads Javascript object from <code>.yaml</code> file import&nbsp;✅</li>
</ol>

📚 Homework: Build a Vite plugin that can import [`.csv` files](https://en.wikipedia.org/wiki/Comma-separated_values) directly into Javascript. You can even build your own minimal CSV-parser!

Tip: Before creating your own plugin, search for popular Vite or compatible Rollup plugins. For YAML support, you can directly add the official [@rollup/plugin-yaml](https://www.npmjs.com/package/@rollup/plugin-yaml) to your Vite config.
