<script setup>
import MaterialSymbolsSearch from '~icons/material-symbols/search'
import { SRARCH_LIST } from '~/utils/const'
import { openNewTab } from '~/utils/util.js'
import { useAppStore } from '~/stores/app';


const app = useAppStore()

const showModal = ref(false)
const searchText = ref('')


const searchTextTrim = computed(() => {
  return searchText.value.trim()
})



provide('searchText', searchText)

const searchOptions = SRARCH_LIST.map(e => {
  return {
    label: e,
    value: e
  }
})
const my_modal_2 = ref(null)
function handleKeyDown(event) {

  if (event.code === 'Tab') {
    event.preventDefault()
    my_modal_2.value.showModal()
  }

  if (event.code === 'Enter') {
    openNewTab(app.searchEngine, searchText.value)
  }
}
</script>

<template>
  <div class="w-100">
    <label class="input w-full">
      <SearchIcon  :searchEngine="app.searchEngine"/>

      <input type="search" required placeholder="Search" v-model="searchText" @keydown="handleKeyDown" />
    </label>

    <Suggestion :isTools="searchText.length !== searchTextTrim.length" v-if="searchTextTrim != ''"
      class="absolute z-100 w-100" />




    <dialog ref="my_modal_2" class="modal">
      <ToolsView />
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

  </div>
</template>

<style scoped></style>
