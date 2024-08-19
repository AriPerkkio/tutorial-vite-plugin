import { unoCSSConfig } from '@tutorialkit/astro';
import { globSync } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

const iconPaths = globSync('./icons/languages/*.svg');

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const collectionName = basename(dirname(iconPath));
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

export default defineConfig({
  ...unoCSSConfig,
  content: {
    pipeline: {
      include: [
        // default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,

        // our tutorialkit packages
        "**/@tutorialkit/astro/default/**/*.astro",
        "**/@tutorialkit/components-react/**/*.js"
      ]
    }
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: {
        dark: '[data-theme="dark"]',
      },
    }),
    presetIcons({
      collections: {
        ...customIconCollection,
      },
    }),
  ],
});
