<script setup>
import FullScreen from './FullScreen.vue'
import MaterialSymbolsSettings from '~icons/material-symbols/settings'
import MaterialSymbolsFullscreen from '~icons/material-symbols/fullscreen'
// import { fullscreen } from '~/logic'

const isFull = ref(false)

function clickFull() {
  isFull.value = !isFull.value
}




</script>

<template>
  <div class="expand flex-row items-end ">
    <div class="flex">
      <div>
        <MaterialSymbolsSettings class="" />
      </div>
      <div>
        <MaterialSymbolsFullscreen @click="clickFull" />
      </div>
    </div>

    <FullScreen v-model="isFull" />
  </div>
</template>

<style scoped>
.expand{
  position: fixed;
  right: 10px;
  top:10px
}
</style>
