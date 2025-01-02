<script setup>

import instance from "~/api/request.js"
import { useAppStore } from '~/stores/app';
import { openNewTab } from '~/utils/util.js'

const props = defineProps(['isTools'])

const app = useAppStore()
const searchText = inject('searchText')
const suggestionList = ref([])
const searchSuggestion = ref({})

watchEffect(() => {

  if (searchText.value) {
    instance.get(`https://www.baidu.com/sugrec?prod=pc&wd=${searchText.value}`).then(res => {
      suggestionList.value = res?.g?.map(e => e.q)
    })
  }

})

function updateSearchSuggsetion(k, v) {
  searchSuggestion.value[k] = v
}

function openSearh(i) {
  openNewTab(app.searchEngine, i)
}

provide('updateSearchSuggsetion', updateSearchSuggsetion)
</script>

<template>
      <div class="bg-white rounded-lg cursor-pointer opacity-90 mt-1" v-if="searchText != ''">

        <div v-for="i in suggestionList" class="m-2 hover:border-gray-400 hover:pl-2 b-gray b-1 p-1" @click="openSearh(i)">
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
