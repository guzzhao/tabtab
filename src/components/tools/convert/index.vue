<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'
import Show from './show.vue'
import { SRARCH_URL } from '~/utils/const'

const searchText = defineModel()

function searchOpen(t) {
  const baseUrl = SRARCH_URL[t].url
  chrome.tabs.create({ url: baseUrl.replace('{query}', searchText.value), active: true })
}
</script>

<template>
  <n-card style="width: 600px" title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
    <template #header-extra>
      <n-input v-model:value="searchText" type="text" size="tiny" placeholder="Tiny Input" />
    </template>
    <n-space>
      <n-button @click="searchOpen('baidu')">
        百度
      </n-button>
      <n-button @click="searchOpen('bing')">
        Bing
      </n-button>
      <n-button @click="searchOpen('google')">
        谷歌
      </n-button>
      <n-button type="tertiary">
        哈希
      </n-button>
      <n-button type="primary">
        Base64
      </n-button>
      <n-button type="info">
        时间日期
      </n-button>
      <n-button type="success">
        变量名
      </n-button>

      <n-button type="error">
        数学计算
      </n-button>
    </n-space>
    <Show foo="math" :search-text />
    <template #footer>
      尾部
    </template>
  </n-card>
</template>

<style scoped>
.full {
  background-color: wheat;
}
</style>
