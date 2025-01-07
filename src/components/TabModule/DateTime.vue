<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'

const dateStr = useDateFormat(useNow(), 'YYYY-MM-DD')
const timeStr = useDateFormat(useNow(), 'HH:mm:ss')

const isFull = ref(false)
const time = ref()
const { isFullscreen, enter, exit } = useFullscreen(time)

function toggleFullscreen() {
  isFull.value = !isFull.value
}

watch(isFull, (newValue) => {
  if (newValue)
    enter()
  else
    exit()
})



</script>

<template>
  <!-- 时间白色大字 -->
  <div class=" text-white select-none  mb-5" @dblclick="toggleFullscreen">
    <div class="text-center">
      <div class="text-9xl font-bold select-none " :class="{ full: isFullscreen }" ref="time">
        {{ timeStr }}
      </div>
      <div class="text-3xl font-semibold">
        {{ dateStr }}
      </div>
    </div>

  </div>
</template>

<style scoped>
.full {
  font-size: 20rem;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;



}
</style>
