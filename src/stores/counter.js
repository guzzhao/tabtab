import { computed, ref } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function count100() {
    count.value = count.value * 100
  }
  return { count, doubleCount, increment, count100 }
})

