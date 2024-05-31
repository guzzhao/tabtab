<script setup>
import { useClipboard, useDateFormat, useNow } from '@vueuse/core'

const searchText = inject('searchText')

const text = computed(() => {
  try {
    console.log('time', searchText.value)
    return useDateFormat(Number(searchText.value), 'YYYY-MM-DD HH:mm:ss')
  }
  catch (e) {
    return '错误'
  }
})
</script>

<template>
  <div>
    time11:{{ text }}
  </div>
</template>

<style scoped>

</style>
