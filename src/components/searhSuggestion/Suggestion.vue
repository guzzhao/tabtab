<script setup>
import Base64 from './comp/Base64.vue'
import Date from './comp/Date.vue'
import Var from './comp/Var.vue'
import instance from "~/api/request.js"
import { useAppStore } from '~/stores/app';
import { openNewTab } from '~/utils/util.js'

const props = defineProps(['isTools'])

const app = useAppStore()
const searchText = inject('searchText')
const suggestionList = ref([])
const searchSuggestion = ref({})

let abase64 = ref(false)
let adate = ref(false)
let avar = ref(false)

watchEffect(() => {

  abase64.value = searchSuggestion.value && searchSuggestion.value.Base64
  adate.value = searchSuggestion.value && searchSuggestion.value.Date
  avar.value = searchSuggestion.value && searchSuggestion.value.Var

  nextTick()

  if (searchText.value) {
    instance.get(`https://www.baidu.com/sugrec?prod=pc&wd=${searchText.value}`).then(res => {
      suggestionList.value = res?.g?.map(e => e.q)
        .slice(0, 10 - [abase64.value, adate.value, avar.value].filter(Boolean).length)
    })
  }

})

function updateSearchSuggsetion(k, v) {
  console.log(k, v)
  searchSuggestion.value[k] = v
}

function openSearh(i) {
  openNewTab(app.searchEngine, i)
}

provide('updateSearchSuggsetion', updateSearchSuggsetion)
</script>

<template>
  <div class="recommend mt-2">
    <div class="bg-white p-1">
      <Base64 v-show="abase64" />
      <Date v-show="adate" />
      <Var v-show="avar" />
      <div class="bg-white cursor-pointer " v-if="searchText != ''">
        <Base v-for="i in suggestionList" class="m-2 hover:border-gray-400" @click="openSearh(i)">
        {{ i }}
        </Base>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
