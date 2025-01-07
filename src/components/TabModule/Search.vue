<script setup>
import MaterialSymbolsSearch from '~icons/material-symbols/search'
import { SRARCH_LIST } from '~/utils/const'
import { openNewTab } from '~/utils/util.js'
import { useAppStore } from '~/stores/app';
import { usePageStore } from '~/stores/page';


const app = useAppStore()
const page = usePageStore()
const suggestionRef = ref(null)

const searchText = computed({
  get: () => {
    return page.baseSearchText
  },
  set: (v) => {
    page.changeBaseSearchText(v)
  }
})


function handleKeyUp(event) {

  if (event.code === 'Enter') {
    openNewTab(app.searchEngine, searchText.value)
    return
  }

  if (event.code === 'ArrowDown') {
    event.preventDefault()
    suggestionRef.value.changeSelectedItem(1)
    return
  }

  if (event.code === 'ArrowUp') {
    event.preventDefault()
    suggestionRef.value.changeSelectedItem(-1)
    return
  }

  suggestionRef.value.search(searchText.value)

}
</script>

<template>
  <div class="w-100">
    <label class="input w-full">
      <SearchIcon :searchEngine="app.searchEngine" />
      <input type="search" required placeholder="Search" v-model="searchText" @keyup="handleKeyUp"
        @keydown="handleKeyDown" />
    </label>

    <Suggestion ref="suggestionRef" class="absolute z-100 w-100" />

  </div>
</template>

<style scoped></style>
