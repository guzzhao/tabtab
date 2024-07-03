<script setup>
import MaterialSymbolsSearch from '~icons/material-symbols/search'
import { SRARCH_LIST } from '~/utils/const'
import { openNewTab } from '~/utils/util.js'
import { useAppStore } from '~/stores/app';


const app = useAppStore()

const showModal = ref(false)
const searchText = ref('')


const searchTextTrim = computed(()=>{
  return searchText.value.trim()
})



provide('searchText', searchText)

const searchOptions = SRARCH_LIST.map(e =>{
  return {
    label:e,
    value:e
  }
})

function handleKeyDown(event) {

  if (event.code === 'Tab') {
    event.preventDefault()
    showModal.value = !showModal.value
  }

  if (event.code === 'Enter') {
    openNewTab(app.searchEngine, searchText.value)
  }
}
</script>

<template>
  <div class="search">
    <n-input v-model:value="searchText" passively-activated round placeholder="搜索" size="large" @keydown="handleKeyDown"
      autofocus id="mySearch">
      <template #prefix>

        <n-popselect v-model:value="app.searchEngine" :options="searchOptions" trigger="click">
          <span v-if="app.searchEngine === 'baidu'" class="i-ri-baidu-fill cursor-pointer" />
          <span v-if="app.searchEngine === 'bing'" class="i-mdi-microsoft-bing cursor-pointer" />
          <span v-if="app.searchEngine === 'google'" class="i-ri-google-fill cursor-pointer"  />
        </n-popselect>
      </template>
    </n-input>

    <Suggestion  :isTools="searchText.length !== searchTextTrim.length"  v-if="searchTextTrim != ''"   class="absolute z-100 w-500px"/>

    <n-modal v-model:show="showModal">
      <Convert v-model.trim="searchText" />
    </n-modal>
  </div>
</template>

<style scoped>
.search {
  width: 500px;
}

.recommend {}
</style>
