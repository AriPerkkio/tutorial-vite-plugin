---
type: lesson
title: Defining custom plugin
focus: /vite.config.ts
---

# Defining custom plugin

Plugins can have various properties that are listed in [Plugin API | Vite](https://vitejs.dev/guide/api-plugin.html) documentation. The only **required property** is `name`.

Let's start by adding a custom plugin in our Vite configuration. To do this, add a new `plugins` property into the Vite configuration. The `plugins` should be an array.

Inside the `plugins` array, define a new object with `name` `'yaml-plugin'`.
