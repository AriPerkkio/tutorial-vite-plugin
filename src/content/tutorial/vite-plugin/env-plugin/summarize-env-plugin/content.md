---
type: lesson
title: Summary
focus: /vite.config.ts
mainCommand: ""
terminal:
  activePanel: 1
  panels:
    - ["terminal", "Terminal"]
---

# Summarize

We've now built a plugin for providing entrypoint for virtual modules. Let's summarize the process:

<ol>
  <li>Source code requests virtual module: <code class="whitespace-nowrap">import env from "virtual:tutorial-env"</code>

  <li class="mt2">Vite plugin's <code>resolveId()</code> is called to ask an internal id for the file. Hook returns an id and prefixes it with <code>\0</code>.</li>

  <li class="mt2">Vite plugin's <code>load()</code> is called with the internal id. Our custom plugin recognizes this id.</li>

  <li class="mt2">Other Vite plugins see <code>\0</code> prefix and know to skip this module</li>

  <li class="mt2">Custom plugin reads host machine's environment variables from <code>process.end</code> and collects the <code>TUTORIAL_</code> prefixed variables.</li>

  <li class="mt2">Javascript object is serialized into text using <code>JSON.stringify()</code> and returned as default export from <code>load()</code> hook</li>

  <li class="mt2">Source code successfully loads the virtual module&nbsp;✅</li>
</ol>

📚 Homework: Build a Vite plugin that provides virtual module for importing version of your package - `import { version } from "virtual:tutorial-assignment"`. It should read the `"version"` field from `package.json` and return it as named export.
