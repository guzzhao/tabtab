import { computed, ref } from 'vue'
import { defineStore } from 'pinia'


export const usePageStore = defineStore('page', () => {

  const baseSearchText = ref('')

  function changeBaseSearchText(t) {
    baseSearchText.value = t
  }


  return { baseSearchText,changeBaseSearchText,}
})

