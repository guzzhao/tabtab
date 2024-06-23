<script setup>
import FullScreen from './FullScreen.vue'
import MaterialSymbolsSettings from '~icons/material-symbols/settings'
import MaterialSymbolsFullscreen from '~icons/material-symbols/fullscreen'
import generate from "./tools/generate/index.vue"

import { useCounterStore } from "~/stores/counter"

// import { fullscreen } from '~/logic'

const showModal = ref(false)


const count = useCounterStore()

function generateFun() {
  showModal.value = true

}


</script>

<template>
  <div class="expand flex-row items-end">
    <div class="flex">
      <div>
        <MaterialSymbolsSettings class="" />
      </div>
      <div>
        <MaterialSymbolsSettings @click="generateFun" />
      </div>
    </div>

    <FullScreen />
    <generate v-model="showModal" />
  </div>
</template>

<style scoped>
.expand {
  position: fixed;
  right: 10px;
  top: 10px
}
</style>
