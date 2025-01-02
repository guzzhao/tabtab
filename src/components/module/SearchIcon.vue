<script setup>
import SimpleIconsBaidu from '~icons/simple-icons/baidu'
import UilBing from '~icons/uil/bing'
import DeviconPlainGoogle from '~icons/devicon-plain/google'

const props = defineProps({
  searchEngine: {
    type: String,
    default: 'baidu'
  }
})

console.log(props.searchEngine,"props.searchEngine")

</script>

<template>
  <SimpleIconsBaidu v-if="props.searchEngine === 'baidu'" />
  <UilBing v-if="props.searchEngine === 'bing'" />
  <DeviconPlainGoogle  v-if="props.searchEngine === 'google'" />
</template>

