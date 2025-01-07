<script setup>
import { useDateFormat, useFullscreen, useNow } from '@vueuse/core'
import { SRARCH_URL } from '~/utils/const'
import { usePageStore } from '~/stores/page';
import { toolsList } from '~/utils/const'
import { openNewTab } from '~/utils/util.js'
import { useAppStore } from '~/stores/app';

const app = useAppStore()
const page = usePageStore()

const props = defineProps({
  type: {
    type: String,
    default: 'convert'
  }
})

const mainType = ref('')
const funcType = ref('')


watchEffect(() => {
  mainType.value = props.type
})

let searchBtnDisable = computed(() => page.baseSearchText == '' && page.baseSearchText.trim() == '')

const modules = import.meta.glob(['./convert/*.vue', './generate/*.vue'])

// 获取模块组件
const components = ref({})
Object.entries(modules).forEach(([path, asyncCom]) => {
  const name = path.replace(/\.\/(.*)\/(.*)\.vue/, '$2')
  components.value[name] = markRaw(defineAsyncComponent(asyncCom))
})

function funChange(t1) {
  funcType.value = t1
}

function searchOpen(t) {
  openNewTab(app.searchEngine, page.baseSearchText)
}
</script>

<template>
  <div class="card  bg-base-100 shadow-sm">
    <div class="card-body">
      <div class="w-50% p-2">
        <p>{{ page.baseSearchText }}</p>
      </div>
      <div class="flex flex-wrap" v-if="mainType === 'convert'">
        <button class="badge badge-soft badge-primary m-1" @click="searchOpen('baidu')" :disabled="searchBtnDisable">
          百度
        </button>
        <button class="badge badge-soft badge-secondary m-1" @click="searchOpen('bing')" :disabled="searchBtnDisable">
          Bing
        </button>
        <button class="badge badge-soft badge-accent m-1" @click="searchOpen('google')" :disabled="searchBtnDisable">
          谷歌
        </button>
        <button class="badge badge-soft badge-info m-1" type="tertiary" @click="funChange('hash')"> 哈希 </button>
        <button class="badge badge-soft badge-info m-1" type="primary" @click="funChange('base64')"> Base64 </button>
        <button class="badge badge-soft badge-success m-1" type="info" @click="funChange('time')"> 时间日期 </button>
        <button class="badge badge-soft badge-warning m-1" type="success" @click="funChange('var')"> 变量名 </button>
        <button class="badge badge-soft badge-error m-1" type="error" @click="funChange('math')"> 数学计算 </button>
      </div>
      <div v-else>
        <button class="badge badge-soft badge-primary m-1" type="tertiary" @click="funChange('uniqueId')"> 随机字符
        </button>
        <button class="badge badge-soft badge-primary m-1" type="primary" @click="funChange('uuid')"> UUID生成 </button>
        <button class="badge badge-soft badge-primary m-1" type="warning" @click="funChange('color')"> 颜色 </button>
      </div>


      <div v-for="(item, index) in toolsList" :key="index">
        <component :is="components[item.component]" v-if="item.name === funcType" />
      </div>



    </div>
  </div>
</template>

<style scoped>
.full {
  background-color: wheat;
}
</style>
