<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div ref="time" class="text-15 size-auto text-center select-none pointer-events-none ">
    {{ formatted }}
  </div>
</template>

<style scoped>
.full{
  background-color: wheat;
}
</style>
