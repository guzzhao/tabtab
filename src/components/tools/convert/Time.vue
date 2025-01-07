<script setup>
import { useClipboard, useDateFormat, useNow } from '@vueuse/core'
import { usePageStore } from '~/stores/page';

const page = usePageStore()

const text = computed(() => {
  try {
    return useDateFormat(Number(page.baseSearchText), 'YYYY-MM-DD HH:mm:ss')
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
