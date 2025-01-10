import { computed, ref } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', () => {

  const searchEngine = ref('bing')
  const backgroundUrl = ref('https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png')
  const theme = ref('light')

  function changeEngine(t) {
    searchEngine.value = t
  }
  function setBackgroundUrl(t) {
    backgroundUrl.value = t
  }
  function setTheme(t) {
    theme.value = t
  }

  return { searchEngine, changeEngine, backgroundUrl, setBackgroundUrl, theme, setTheme }
}, {
  persist: true
})

