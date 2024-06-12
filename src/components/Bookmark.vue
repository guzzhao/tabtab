<script setup>
import { onMessage, sendMessage } from 'webext-bridge/background'
import {getBookMarkToLocal} from '~/utils/util.js'


sendMessage('get-current-tab', { title: '123tit' }, { context: 'content-script', tabId:123 })

function getBookMarkToLocal1(){
  console.log("getBookMarkToLocal1")
  getBookMarkToLocal()
}


</script>

<template>
  <div class="color-white" >
    Bookmark
    <n-button @click="getBookMarkToLocal1">
      获取1
    </n-button>
</div>
</template>

<style scoped>

</style>
