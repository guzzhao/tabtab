<script setup>
import MaterialSymbolsSearch from '~icons/material-symbols/search'
import { SRARCH_LIST } from '~/utils/const'
import { openNewTab } from '~/utils/util.js'
import { search_config } from '~/logic/storage'


const showModal = ref(false)
const searchText = ref('')
const searchType = ref('bing')
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
    openNewTab(search_config.value.search_engine, searchText.value)
  }
}
</script>

<template>
  <div class="search">
    <n-input v-model:value="searchText" passively-activated round placeholder="搜索" size="large" @keydown="handleKeyDown"
      autofocus id="mySearch">
      <template #prefix>

        <n-popselect v-model:value="searchType" :options="searchOptions" trigger="click">
          <span v-if="searchType === 'baidu'" class="i-ri-baidu-fill" />
          <span v-if="searchType === 'bing'" class="i-mdi-microsoft-bing" />
          <span v-if="searchType === 'google'" class="i-ri-google-fill" />
        </n-popselect>
      </template>
    </n-input>

    <Suggestion :search-text v-if="searchText != ''"  class="absolute z-100 w-500px"/>

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
