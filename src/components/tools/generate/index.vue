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
  
        <button type="tertiary" @click="funChange('uniqueId')">
          随机字符
        </button>
        <button type="primary" @click="funChange('uuid')">
          UUID生成
        </button>
        <button type="warning" @click="funChange('color')">
          颜色
        </button>
      <div>
        <div v-for="(item, index) in comName" :key="index" >
        <component :is="components[item]" v-if="item === funcType" />
      </div>
      </div>
    
</template>

<style scoped>
.expand {
  position: fixed;
  right: 10px;
  top: 10px
}
</style>
