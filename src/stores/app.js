import { computed, ref } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', () => {

  const searchEngine = ref('bing')

  function changeEngine(t) {
    searchEngine.value = t
  }


  return { searchEngine,}
},{
  persist:true
})

