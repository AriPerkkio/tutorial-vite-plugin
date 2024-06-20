---
type: lesson
title: Processing YAML files
focus: /vite.config.ts
---

# Processing YAML files

Our Vite plugin can now recognize `.yaml` files that are being loaded. Next we'll need to add logic for converting the `.yaml` files into Javascript and pass the output from `load` hook.

To get the content of loaded file we'll need to use [`readFileSync`](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) method from `node:fs`.
We can convert the YAML content into Javascript using [`yaml`](https://www.npmjs.com/package/yaml) package. It has a `parse()` function that takes YAML content as `string`.

```ts
import { readFileSync } from "node:fs";
import { parse } from "yaml";

const content = readFileSync("./content.yaml", "utf8");
const yaml = parse(content);
//    ^^^^ [{ employees: [{ id: 1, ...}, ...], projects: { id: 101, ...}, ... }]
```

The `yaml` variable now holds a Javascript object that represents our `content.yaml` contents. To return this from `load` hook, we'll need to serialize it to string with `JSON.stringify`:

```ts
return {
  code: `export default ${JSON.stringify(yaml)}`,
};
```

Add required logic to Vite plugin's load hook:

- Read requested file from file system using `readFileSync` (filename is in `id` variable)
- Convert contents of `.yaml` file into Javascript using `parse` from `yaml` package
- Serialize the Javascript object into `string` and return it as default export from the `load` hook

Contents of `content.yaml` should appear in preview as JSON. ✅
