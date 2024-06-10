<script setup>


let showModal = defineModel({ default: false })

let funcType = ref("color")

const modules = import.meta.glob('./module/*.vue')
const components = ref({})
const comName = Object.entries(modules).map(([path]) => path.replace(/\.\/module\/(.*)\.vue/, '$1'))

Object.entries(modules).forEach(([path, asyncCom]) => {
  const name = path.replace(/\.\/module\/(.*)\.vue/, '$1')
  components.value[name] = markRaw(defineAsyncComponent(asyncCom))
})

function funChange(t1) {
  funcType.value = t1
}




</script>

<template>
  <n-modal v-model:show="showModal" class="w-300 h-100">
    <n-card>
      <n-space class="pb-3">
        <n-button type="tertiary" @click="funChange('uniqueId')">
          随机字符
        </n-button>
        <n-button type="primary" @click="funChange('uuid')">
          UUID生成
        </n-button>
        <n-button type="warning" @click="funChange('color')">
          颜色
        </n-button>
      </n-space>
      <div>
        <div v-for="(item, index) in comName" :key="index" >
        <component :is="components[item]" v-if="item === funcType" />
      </div>
      </div>
    
    </n-card>
  </n-modal>
</template>

<style scoped>
.expand {
  position: fixed;
  right: 10px;
  top: 10px
}
</style>
