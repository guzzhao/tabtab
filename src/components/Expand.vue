<script setup>

import MaterialSymbolsSettings from '~icons/material-symbols/settings'
import MaterialSymbolsFullscreen from '~icons/material-symbols/fullscreen'

import { useCounterStore } from "~/stores/counter"

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
    </div>

  </div>
</template>

<style scoped>
.expand {
  position: fixed;
  right: 10px;
  top: 10px
}
</style>
