<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'
import { SRARCH_URL } from '~/utils/const'

const searchText = defineModel()
const type = ref('')

const props = defineProps(['foo'])

const modules = import.meta.glob('./module/*.vue')

const components = ref({})

const comName = Object.entries(modules).map(([path]) => path.replace(/\.\/module\/(.*)\.vue/, '$1'))

Object.entries(modules).forEach(([path, asyncCom]) => {
  const name = path.replace(/\.\/module\/(.*)\.vue/, '$1')
  components.value[name] = markRaw(defineAsyncComponent(asyncCom))
})



function funChange(t1) {
  type.value = t1
}





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
      <n-button type="tertiary" @click="funChange('hash')">
        哈希
      </n-button>
      <n-button type="primary" @click="funChange('base64')">
        Base64
      </n-button>
      <n-button type="info" @click="funChange('time')">
        时间日期
      </n-button>
      <n-button type="success" @click="funChange('var')">
        变量名
      </n-button>
      <n-button type="error" @click="funChange('math')">
        数学计算
      </n-button>
    </n-space>
    <div v-for="(item, index) in comName" :key="index">
      <component :is="components[item]" v-if="item === type" />
    </div>
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
