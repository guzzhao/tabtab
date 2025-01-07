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

</script>

<template>
  <div class="dropdown dropdown-center">
    <div class="cursor-pointer" tabindex="0" role="button">
      <SimpleIconsBaidu v-if="props.searchEngine === 'baidu'" />
      <UilBing v-if="props.searchEngine === 'bing'" />
      <DeviconPlainGoogle v-if="props.searchEngine === 'google'" />
    </div>

    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1  p-2 shadow-sm">
      <li><a>baidu</a></li>
      <li><a>bing</a></li>
      <li><a>google</a></li>
    </ul>
  </div>
</template>
