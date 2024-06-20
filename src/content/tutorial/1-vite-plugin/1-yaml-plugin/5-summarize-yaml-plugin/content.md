---
type: lesson
title: Summary
focus: /vite.config.ts
---

# Summary

Our custom Vite plugin can now intercept `*.yaml` file imports and convert them into Javascript.

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  <div class="mb-3">Source code loads YAML-file:</div>
  <code>import content from "./some-file.yaml"</code>
</div>

<div class="mt-6 w-full text-center">⬇️</div>

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  Vite plugin's <code>load()</code> hook intercepts <code>.yaml</code> request
</div>

<div class="mt-6 w-full text-center">⬇️</div>

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  Contents of requested file are read from file system using <code>readFileSync()</code> from <code>node:fs</code> module
</div>

<div class="mt-6 w-full text-center">⬇️</div>

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  YAML content is converted into Javascript using <code>parse()</code> from <code>yaml</code> module
</div>

<div class="mt-6 w-full text-center">⬇️</div>

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  Javascript object is serialized into text using <code>JSON.stringify()</code> and returned as default export from <code>load()</code> hook
</div>

<div class="mt-6 w-full text-center">⬇️</div>

<div class="mt-6 p-3 border-1 border-current border-dashed border-rd-md">
  Source code successfully loads Javascript object from <code>.yaml</code> file import ✅
</div>
