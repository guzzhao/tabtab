<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'
import { SRARCH_URL } from '~/utils/const'

const searchText = defineModel()
const type = ref('')

let searchBtnDisable = computed(() =>  searchText.value=='' || searchText.value.trim()=='' )


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
  <n-card class="w-300 h-100" title="" :bordered="false" size="huge" role="dialog" aria-modal="true">
    <template #header-extra>

    </template>
    <div class="w-50% p-2">

      <n-input v-model:value="searchText" type="text" size="tiny" placeholder="Tiny Input" />
    </div>
    <n-space>
      <n-button @click="searchOpen('baidu')" :disabled="searchBtnDisable">
        百度
      </n-button>
      <n-button @click="searchOpen('bing')" :disabled="searchBtnDisable">
        Bing
      </n-button>
      <n-button @click="searchOpen('google')" :disabled="searchBtnDisable">
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

    </template>
  </n-card>
</template>

<style scoped>
.full {
  background-color: wheat;
}
</style>
