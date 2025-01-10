// generate stub index.html files for dev entry
import chokidar from 'chokidar'
import { isDev, log, port, r, ensureDir, readFile, writeFile, writeJSON,del } from './utils.js'
import { getManifest } from './manifest.js'

/**
 * Stub index.html to use Vite in development
 */
async function stubIndexHtml() {
  const views = [
    'newtab',
    'options',
    'popup',
  ]

  for (const view of views) {
    await ensureDir(r(`extension/dist/${view}`))
    let data = await readFile(r(`src/module/${view}/index.html`))
    data = data
      .replace('"./main.js"', `"http://localhost:${port}/module/${view}/main.js"`)
      .replace('<div id="app"></div>', '<div id="app">Vite server did not start ..</div>')
    await writeFile(r(`extension/dist/${view}/index.html`), data)
    log('PRE', `stub ${view}`)
  }
}


async function writeManifest() {
  await writeJSON(r('extension/manifest.json'), await getManifest(), { spaces: 2 })
  log('PRE', 'write manifest.json')
}

del("extension/manifest.json")
del("extension/dist")

writeManifest()

if (isDev) {
  stubIndexHtml()
  chokidar.watch(r('src/**/*.html'))
    .on('change', () => {
      stubIndexHtml()
    })
  chokidar.watch([r('src/manifest.js'), r('package.json')])
    .on('change', () => {
      writeManifest()
    })
}
