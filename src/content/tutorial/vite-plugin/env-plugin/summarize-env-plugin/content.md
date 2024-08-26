---
type: lesson
title: Summary
focus: /vite.config.ts
mainCommand: ""
terminal:
  open: true
  activePanel: 1
  panels:
    - ["terminal", "Terminal"]
---

# Summarize

We've now built a plugin for providing entry point for virtual modules. Let's summarize the process:

<ol>
  <li>Source code requests virtual module: <code class="whitespace-nowrap">import env from "virtual:tutorial-env"</code>

  <li class="mt2">Our Vite plugin's <code>resolveId()</code> is called to resolve the id for each imported module specifier. In our plugin, this hook returns an id prefixed with the <code>\0</code> marker, a convention to let other plugins know that this is a virtual module.</li>

  <li class="mt2">Our Vite plugin's <code>load()</code> is called with the resolved id. Our custom plugin recognizes this id.</li>

  <li class="mt2">Other Vite plugins see <code>\0</code> prefix and know to skip this module</li>

  <li class="mt2">A custom plugin reads the host machine's environment variables from <code>process.end</code> and collects the <code>TUTORIAL_</code> prefixed variables.</li>

  <li class="mt2">A JavaScript object is serialized into text using <code>JSON.stringify()</code> and returned as the default export from <code>load()</code> hook</li>

  <li class="mt2">The source code successfully loads the virtual module&nbsp;✅</li>
</ol>

📚 Homework: Build a Vite plugin that provides a virtual module for importing version of your package - `import { version } from "virtual:tutorial-assignment"`. It should read the `"version"` field from `package.json` and return it as a named export.
