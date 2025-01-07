<script setup>
import { evaluate } from 'mathjs'
import { usePageStore } from '~/stores/page';

const page = usePageStore()

const outputValue = computed(() => {
  try {
    return evaluate(page.baseSearchText)
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
