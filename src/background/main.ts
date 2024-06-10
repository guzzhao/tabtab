import { onMessage, sendMessage } from 'webext-bridge/background'
import type { Tabs } from 'webextension-polyfill'

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
  // eslint-disable-next-line no-console
  console.log(tab, 'tab')
})


browser.tabs.onCreated.addListener(function (tab) {
  // 当用户创建新标签页时，显示一个通知
  console.log(tab)
  if (tab.pendingUrl == "edge://newtab/") {

    browser.bookmarks.getTree().then(e => {
      console.log(e, "asd")
    })

  }


});









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
    console.log(tab, "123")

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


