<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'

const isFull = defineModel()

const time = ref()
const { isFullscreen, enter, exit, toggle } = useFullscreen(time)

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
    <div
      ref="time" class=" flex items-center justify-center h-full bg-white text-10 " :class="{ full: isFullscreen }"
      @click="toggleFullscreen"
    >
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
