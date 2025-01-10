<script setup>

import instance from "~/api/request.js"
import { useAppStore } from '~/stores/app';
import { usePageStore } from '~/stores/page';
import { openNewTab } from '~/utils/util.js'


const app = useAppStore()
const page = usePageStore()
const suggestionList = ref([])
const selectedIndex = ref(-1)


watch(() => page.baseSearchText, () => {
  if (!page.baseSearchText) {
    suggestionList.value = []
  }
})



function openSearh(i) {
  openNewTab(app.searchEngine, i)
}

function changeSelectedItem(key) {

  if (key == 1) {
    if (selectedIndex.value < suggestionList.value.length - 1) {
      selectedIndex.value++
    } else {
      selectedIndex.value = 0
    }
  } else {
    if (selectedIndex.value > 0) {
      selectedIndex.value--
    } else {
      selectedIndex.value = suggestionList.value.length - 1
    }

  }

  page.changeBaseSearchText(suggestionList.value[selectedIndex.value])
}

function search(searchText) {
  if (searchText == '') {
    return
  }
  instance.get(`https://www.baidu.com/sugrec?prod=pc&wd=${searchText}`).then(res => {
    if (page.baseSearchText) {
      suggestionList.value = res?.g?.map(e => e.q)
      selectedIndex.value = -1
    }else{
      suggestionList.value = []
    }
  })

}


defineExpose({
  changeSelectedItem, search
})

</script>

<template>
  <div class="bg-white rounded-lg cursor-pointer opacity-90 mt-1">
    <div v-for="(i, index) in suggestionList" class="m-2 hover:border-gray-400 hover:pl-2 b-gray b-1 p-1"
      :class="{ 'bg-gray-200': selectedIndex == index }" @click="openSearh(i)">
      {{ i }}
    </div>

  </div>
</template>

<style scoped>
.base {
  border: 1px solid rgba(0, 0, 0, 0.062);
  padding: 5px;
}
</style>
