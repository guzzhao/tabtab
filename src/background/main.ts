import { onMessage, sendMessage } from 'webext-bridge/background'
import type { Tabs } from 'webextension-polyfill'
import {saveBookMarkToLocal} from '~/utils/util.js'

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
  import('./contentScriptHMR')
}

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed')
})





browser.tabs.onUpdated.addListener(tab => {
})











let previousTabId = 0

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async t => {

  let { tabId } = t
  if (!previousTabId) {
    previousTabId = tabId
    return
  }




  let tab: Tabs.Tab

  try {
    tab = await browser.tabs.get(previousTabId)
    previousTabId = tabId
  }
  catch {
    return
  }

  // sendMessage('tab-prev', { title: tab.title }, { context: 'content-script', tabId })
})

onMessage('get-current-tab', async () => {

  try {
    const tab = await browser.tabs.get(previousTabId)

    return {
      title: tab?.title,
    }
  }
  catch {
    return {
      title: undefined,
    }
  }
})


browser.bookmarks.onCreated.addListener(function(id, bookmark) {
  console.log('Bookmark created:', bookmark);
});

browser.bookmarks.onRemoved.addListener(function(id, removeInfo) {
  console.log('Bookmark removed:', removeInfo);
});

browser.bookmarks.onChanged.addListener(function(id, changeInfo) {
  saveBookMarkToLocal()
});
