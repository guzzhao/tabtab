import { defineConfig } from 'vite'
import { sharedConfig } from './vite.config.js'
import { isDev, r } from './scripts/utils'
import packageJson from './package.json'

// bundling the content script using Vite
export default defineConfig({
  ...sharedConfig,
  build: {
    watch: isDev
      ? {}
      : undefined,
    outDir: r('extension/dist/background'),
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    lib: {
      entry: r('src/background/main.js'),
      name: packageJson.name,
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        extend: true,
      },
    },
  },
})
