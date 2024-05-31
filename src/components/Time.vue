<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'

const dateStr = useDateFormat(useNow(), 'YYYY-MM-DD')
const timeStr = useDateFormat(useNow(), 'HH:mm:ss')
</script>

<template>
  <div class="color-white select-none pointer-events-none ">
    <div class="text-25 size-auto text-center  font-extrabold ">
      {{ timeStr }}
    </div>
    <div class="text-8 text-center font-semibold">
      {{ dateStr }}
    </div>
  </div>
</template>

<style scoped>

</style>
