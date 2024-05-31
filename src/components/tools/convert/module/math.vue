<script setup>
import { evaluate } from 'mathjs'

const searchText = inject('searchText')

const outputValue = computed(() => {
  try {
    return evaluate(searchText.value)
  }
  catch (e) {
    return '错误'
  }
})
</script>

<template>
  <div>
    math:{{ outputValue }}
  </div>
</template>

<style scoped>

</style>
