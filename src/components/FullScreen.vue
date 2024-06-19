<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'

const isFull = ref(false)
const time = ref()
const { isFullscreen, enter, exit, toggle } = useFullscreen(time)

function clickFull() {
  isFull.value = !isFull.value
}


// const show = ref('time')
const formatted = useDateFormat(useNow(), 'HH:mm:ss')

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
  <div>
    

    <MaterialSymbolsFullscreen @click="clickFull" />

    <div ref="time" class=" text-center  bg-white" :class="{ full: isFullscreen }" @click="toggleFullscreen">
      <p>
        {{ formatted }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.full {
  font-size: 15rem;

}
</style>
