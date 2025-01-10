<script setup>

import MaterialSymbolsSettings from '~icons/material-symbols/settings'
import MaterialSymbolsFullscreen from '~icons/material-symbols/fullscreen'
import { useAppStore } from '~/stores/app'

const app = useAppStore()
const modal = ref(false)
const color = computed(() => app.theme == 'light' ? "text-white" : "text-black")

function open() {
  modal.value.showModal()

}


</script>

<template>
  <div class="expand flex-row items-end " :class="color">
    <MaterialSymbolsSettings class="" @click="open" />
  </div>
  <dialog ref="modal" class="modal">
    <div class="modal-box">
      <SettingModal />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</template>

<style scoped>
.expand {
  position: fixed;
  right: 10px;
  top: 10px
}
</style>
