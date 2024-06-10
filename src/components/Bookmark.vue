<script setup>
import { onMessage, sendMessage } from 'webext-bridge/background'

sendMessage('get-current-tab', { title: '123tit' }, { context: 'content-script', tabId:123 })


</script>

<template>
  <div class="color-white select-none pointer-events-none ">
    Bookmark
  </div>
</template>

<style scoped>

</style>
