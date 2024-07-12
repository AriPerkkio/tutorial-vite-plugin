---
type: lesson
title: Summary
focus: /vite.config.ts
---

# Summarize

We've now created a plugin that's able to transform our source code. The plugin is also stored in a separate file from the `vite.config.ts`. Let's summarize the process:

<ol>
  <li>The <code>vite.config.ts</code> imports custom plugin from separate file and calls it with plugin options</li>

  <li class="mt2">Plugin intercepts <code>tutorial-example.js</code> in <code>transform</code> hook</li>

  <li class="mt2"><code>transform</code> hook uses plugin options with <code>String.replaceAll</code> and modifies the passed <code>src</code></li>

  <li class="mt2">Transformed code is returned from <code>transform</code> hook and browser loads the modified file&nbsp;✅</li>
</ol>

📚 Homework: Build a Vite plugin that replaces all usage of `process.env.<variable-name>` with the actual values during build.

> 💡 Note that when transforming source code we should also process [source maps](https://web.dev/articles/source-maps). There's npm package [`magic-string`](https://www.npmjs.com/package/magic-string) that's widely used by Vite's internal and community plugins.
