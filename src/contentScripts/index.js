import { onMessage } from 'webext-bridge/content-script'


(() => {
  console.info('[vitesse-webext] Hello world from content script')

  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })

})()
