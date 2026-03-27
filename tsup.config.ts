import { defineConfig } from 'tsup';
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  async onSuccess() {
    // Bundle CSS modules into a single CSS file
    const glob = (await import('glob')).glob;
    const { copyFile, mkdir } = await import('fs/promises');
    const { dirname } = await import('path');

    const cssFiles = await glob('src/**/*.module.css');

    if (cssFiles.length > 0) {
      let combinedCSS = '';

      for (const file of cssFiles) {
        const content = await readFile(file, 'utf-8');
        combinedCSS += `/* ${file} */\n${content}\n\n`;
      }

      await writeFile(resolve('dist/index.css'), combinedCSS);
      console.log('CSS bundled successfully');
    }

    // Copy global.css to dist/styles/
    const globalCssSource = resolve('src/styles/global.css');
    const globalCssDest = resolve('dist/styles/global.css');

    await mkdir(dirname(globalCssDest), { recursive: true });
    await copyFile(globalCssSource, globalCssDest);
    console.log('Global styles copied successfully');
  },
});
