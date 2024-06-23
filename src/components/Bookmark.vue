<script setup>
import { onMessage, sendMessage } from 'webext-bridge/background'
import {openNewTab} from '~/utils/util'

let baseBookMarks = []
let bookMarks = ref([])
let level = ref([])
let src = ref('')


onMounted(() => {
  getBookMarkToLocal1()
  // TODO
  // function faviconURL(u) {
  // const url = new URL(chrome.runtime.getURL("/_favicon/"));
  // url.searchParams.set("pageUrl", u);
  // url.searchParams.set("size", "32");
  // return url.toString();
  //  src = faviconURL("https://ctool.dev/tool.html") 

})

let backBtn = computed(() => {
  return level.value.length !== 0
})

function getBookMarkToLocal1() {
  chrome.bookmarks.getTree().then(e => {
    baseBookMarks = e[0].children[0].children
    bookMarks.value = e[0].children[0].children
  })
}

function clickTag(id, url) {
  if (!url) {
    console.log(id)
    level.value.push(id)
    buildBookMark()
  }else{
    openNewTab("",url)
  }
}

function buildBookMark() {
  let bs = baseBookMarks
  for (let b in level.value) {
    bs = bs.filter(e => e.id = b)[0].children
  }
  bookMarks.value = bs
}

function back() {
  level.value.pop()
  buildBookMark()
}


</script>

<template>
  <div class="bg-white mt-10">


    <div class="flex">
      <n-tag v-if="backBtn" @click="back"> 返回 </n-tag>
      <div v-for="bo in bookMarks">
        <n-space>
          <n-tag  v-if="bo.url" type="warning" @click="clickTag(bo.id, bo.url)"> {{ bo.title }} </n-tag>
          <n-tag  v-else type="success" @click="clickTag(bo.id, bo.url)"> {{ bo.title }} </n-tag>
        </n-space>
      </div>

      <img :src/>
    </div>



  </div>
</template>

<style scoped></style>
