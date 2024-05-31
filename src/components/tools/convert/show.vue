<script setup>
const props = defineProps(['foo'])

const modules = import.meta.glob('./module/*.vue')

const components = ref({})

const comName = Object.entries(modules).map(([path]) => path.replace(/\.\/module\/(.*)\.vue/, '$1'))

Object.entries(modules).forEach(([path, asyncCom]) => {
  const name = path.replace(/\.\/module\/(.*)\.vue/, '$1')
  components.value[name] = markRaw(defineAsyncComponent(asyncCom))
})
console.log(comName, 'comName')
</script>

<template>
  <div>
    <div v-for="(item, index) in comName" :key="index">
      <component :is="components[item]" v-if="item === props.foo" />
    </div>
  </div>
</template>

<style scoped>

</style>
