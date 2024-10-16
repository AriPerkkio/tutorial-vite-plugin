---
type: lesson
title: Defining a custom plugin
focus: /vite.config.ts
---

# Defining a custom plugin

A plugin is a plain object that defines hooks to modify the way Vite resolves ids, loads and transforms modules, and more. It can have various properties that are listed in the [Plugin API | Vite](https://vitejs.dev/guide/api-plugin.html) documentation. The only **required property** is `name`.

Let's start by adding a custom plugin in our Vite config file. To do this, add a new `plugins` array property in the exported config object.

Then, let's add a new object with `name` `'yaml-plugin'` inside the `plugins` array.

A successfully defined plugin should be reported in the Preview tab:

> Loaded Vite plugins: yaml-plugin ✅
