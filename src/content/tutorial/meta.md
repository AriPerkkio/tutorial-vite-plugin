---
type: tutorial
parts:
  - yaml-plugin
  - env-plugin
  - replace-plugin
mainCommand: ["npm run dev", "Starting http server"]
prepareCommands:
  - ["npm install", "Installing dependencies"]
editPageLink: https://github.com/AriPerkkio/tutorial-vite-plugin/blob/main/src/content/tutorial/${path}?plain=1
i18n:
  partTemplate: ${title}
downloadAsZip: true
---
