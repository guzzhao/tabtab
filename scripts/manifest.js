
import { isDev, isFirefox, port, r, readJSON, writeJSON } from './utils.js'

export async function getManifest() {
  const pkg = await readJSON(r('package.json'))

  // update this file to update this manifest.json
  // can also be conditional based on your need
  const manifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    action: {
      default_icon: './assets/icon-512.png',
      default_popup: './dist/popup/index.html',
    },
    // options_ui: {
    //   page: './dist/options/index.html',
    //   open_in_tab: true,
    // },
    background: isFirefox
      ? {
        scripts: ['dist/background/index.js'],
        type: 'module',
      }
      : {
        service_worker: './dist/background/index.js',
      },
    icons: {
      16: './assets/icon-512.png',
      48: './assets/icon-512.png',
      128: './assets/icon-512.png',
    },
    permissions: [
      'tabs',
      'storage',
      'activeTab',
      'bookmarks',
      'favicon'
    ],

    // host_permissions: ['*://*/*'],
    // optional_permissions: ['bookmarks'],
    chrome_url_overrides: {
      newtab: './dist/newtab/index.html',
    },
    content_scripts: [
      {
        matches: [
          '<all_urls>',
        ],
        js: [
          'dist/contentScripts/index.global.js',
        ],
      },
    ],
    web_accessible_resources: [
      {
        resources: ['dist/contentScripts/style.css', "_favicon/*"],
        matches: ['<all_urls>'],
        "extension_ids": ["*"]
      },
    ],
    content_security_policy: {
      extension_pages: isDev
        // this is required on dev for Vite script to load
        ? `script-src \'self\' http://localhost:${port}; object-src \'self\'`
        : 'script-src \'self\'; object-src \'self\'',
    },
  }

  // FIXME: not work in MV3
  if (isDev && false) {
    // for content script, as browsers will cache them for each reload,
    // we use a background script to always inject the latest version
    // see src/background/contentScriptHMR.ts
    delete manifest.content_scripts
    manifest.permissions?.push('webNavigation')
  }

  return manifest
}
