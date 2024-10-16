---
type: lesson
title: Processing YAML files
focus: /vite.config.ts
---

# Processing YAML files

Our Vite plugin can now properly intercept `.yaml` files that are being loaded. Next we'll need to add logic for converting the `.yaml` files into JavaScript and return that as the output of our `load` hook.

To get the content of requested file we can use [`readFileSync`](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) method from `node:fs`.
We can convert the YAML content into JavaScript using the [`yaml`](https://www.npmjs.com/package/yaml) npm package. It has a `parse()` function that takes YAML content as `string` and returns a JavaScript object.

```ts
import { readFileSync } from "node:fs";
import { parse } from "yaml";

const content = readFileSync("./content.yaml", "utf8");
const yaml = parse(content);
//    ^^^^ [{ employees: [{ id: 1, ...}, ...], projects: [{ id: 101, ...}] }]
```

The `yaml` variable now holds an object that represents our `content.yaml` contents. To return this from the `load` hook, we'll need to serialize it to a string with [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify):

```ts
return {
  code: `export default ${JSON.stringify(yaml)}`
};
```

Add the required logic to Vite plugin's load hook:

- Read requested file from file system using `readFileSync` (the filename is the `id` parameter).
- Convert contents of `.yaml` file into Javascript using `parse` from `yaml` package.
- Serialize the JavaScript object into a `string` and return it as the default export of a module from the `load` hook.

The contents of `content.yaml` should appear in the preview as JSON.&nbsp;✅
