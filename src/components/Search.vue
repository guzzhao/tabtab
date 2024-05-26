<script setup>
import MaterialSymbolsSearch from '~icons/material-symbols/search'
import { SRARCH_URL } from '~/utils/const'
import { search_config } from '~/logic/storage'

const showModal = ref(false)

const searchText = ref('')
const message = useMessage()

const searchType = computed(() => {
  return SRARCH_URL[search_config.value.search_engine]
})

function handleKeyDown(event) {
  if (event.code === 'Tab') {
    event.preventDefault()
    showModal.value = !showModal.value
    // const keys = Object.keys(SRARCH_URL)
    // const inx = keys.indexOf(search_config.value.search_engine)
    // if (inx < keys.length - 1)
    //   search_config.value.search_engine = keys[inx + 1]
    // else
    //   search_config.value.search_engine = keys[0]
  }

  if (event.code === 'Enter') {
    const baseUrl = searchType.value.url

    chrome.tabs.create({ url: baseUrl.replace('{query}', searchText.value), active: true })
  }
}
</script>

<template>
  <div class="search">
    <n-input
      v-model:value="searchText" passively-activated round placeholder="搜索" size="large"
      @keydown="handleKeyDown"
    >
      <template #prefix>
        <span v-if="searchType.key === 'Baidu'" class="i-ri-baidu-fill" />
        <span v-if="searchType.key === 'Bing'" class="i-mdi-microsoft-bing" />
        <span v-if="searchType.key === 'Google'" class="i-ri-google-fill" />
      </template>
    </n-input>
    <Suggestion :search-text />
    <n-modal v-model:show="showModal">
      <Convert v-model="searchText" />
    </n-modal>
  </div>
</template>

<style scoped>
.search {
  width: 500px;
}

.recommend {}
</style>
