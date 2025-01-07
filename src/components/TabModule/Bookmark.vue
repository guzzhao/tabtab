<script setup>
import { onMessage, sendMessage } from 'webext-bridge/background'
import { openNewTab } from '~/utils/util'

let baseBookMarks = []
let bookMarks = ref([])
let level = ref([])
let src = ref('')


onMounted(() => {
  getBookMarkToLocal()

})

let backBtn = computed(() => {
  return level.value.length !== 0
})

function getBookMarkToLocal() {
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
  } else {
    openNewTab("", url)
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
  <div class="w-max flex justify-center">
    <div class="flex mt-10 w-200 flex-wrap">
      <div class="badge badge-info cursor-pointer m-1" v-if="backBtn" @click="back"> 返回 </div>
      <div v-for="bo in bookMarks">
        <div class="badge badge-warning cursor-pointer m-1" v-if="bo.url" @click="clickTag(bo.id, bo.url)">
          {{ bo.title }}
        </div>
        <div class="badge badge-primary cursor-pointer m-1" v-else @click="clickTag(bo.id, bo.url)">
          {{ bo.title }}
        </div>

      </div>

      <img :src />
    </div>
  </div>


</template>

<style scoped>
.box {
  display: flex;
  align-items: center;
}
</style>
