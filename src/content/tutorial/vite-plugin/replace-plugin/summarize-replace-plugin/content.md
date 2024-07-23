---
type: lesson
title: Summary
focus: /vite.config.ts
---

# Summarize

We've now created a plugin that's able to transform our source code. The plugin is also defined in a separate file from the `vite.config.ts`. Let's summarize the process:

<ol>
  <li>The <code>vite.config.ts</code> imports a custom plugin constructor from a separate module and calls it with plugin options</li>

  <li class="mt2">The Plugin intercepts <code>tutorial-example.js</code> in the <code>transform</code> hook</li>

  <li class="mt2">In the <code>transform</code> hook, we use the plugin options with <code>String.replaceAll</code> to modify the passed source <code>code</code></li>

  <li class="mt2">Transformed code is returned from the <code>transform</code> hook and the browser loads the modified module&nbsp;✅</li>
</ol>

📚 Homework: Build a Vite plugin that replaces all usage of `process.env.<variable-name>` with the actual values during build.

> 💡 Note that when transforming source code we should also process [source maps](https://web.dev/articles/source-maps). There's npm package [`magic-string`](https://www.npmjs.com/package/magic-string) that's widely used by Vite's internals and community plugins.
