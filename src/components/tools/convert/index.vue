<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'
import { SRARCH_URL } from '~/utils/const'

const searchText = defineModel()
const type = ref('')

let searchBtnDisable = computed(() =>  searchText.value=='' &&  searchText.value.trim()=='' )

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
 <div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">

    <div class="w-50% p-2">

      <input v-model="searchText" type="text" size="tiny" placeholder="Tiny Input" class="input" />
    </div>
      <button @click="searchOpen('baidu')" :disabled="searchBtnDisable">
        百度
      </button>
      <button @click="searchOpen('bing')" :disabled="searchBtnDisable">
        Bing
      </button>
      <button @click="searchOpen('google')" :disabled="searchBtnDisable">
        谷歌
      </button>
      <button type="tertiary" @click="funChange('hash')">
        哈希
      </button>
      <button type="primary" @click="funChange('base64')">
        Base64
      </button>
      <button type="info" @click="funChange('time')">
        时间日期
      </button>
      <button type="success" @click="funChange('var')">
        变量名
      </button>
      <button type="error" @click="funChange('math')">
        数学计算
      </button>
    <div v-for="(item, index) in comName" :key="index">
      <component :is="components[item]" v-if="item === type" />
    </div>
   
  </div>
 </div>
</template>

<style scoped>
.full {
  background-color: wheat;
}
</style>
