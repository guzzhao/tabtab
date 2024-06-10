<script setup>
import Base64 from './comp/Base64.vue'
import Date from './comp/Date.vue'
import Var from './comp/Var.vue'
import { isBase64, isDate, isTimestamp, isVar } from '~/utils/util'
import instance from "~/api/request.js"

const searchText = inject('searchText')
const suggestionList = ref([])
const searchSuggestion = ref({})

let abase64 = ref(false)
let adate = ref(false)
let avar = ref(false)

watchEffect(() => {

  abase64.value = searchSuggestion.value && searchSuggestion.value.Base64
  adate.value = searchSuggestion && searchSuggestion.value.Date
  avar.value = searchSuggestion && searchSuggestion.value.Var

  if (searchText.value) {
    instance.get(`https://www.baidu.com/sugrec?prod=pc&wd=${searchText.value}`).then(res => {
      suggestionList.value = res.g.map(e => e.q)
        .slice(0, 10 - [abase64.value, adate.value, avar.value].filter(Boolean).length)
    })
  }

})

function updateSearchSuggsetion(k, v) {
  searchSuggestion.value[k] = v
}


provide('searchSuggestion', { searchSuggestion, updateSearchSuggsetion })
</script>

<template>
  <div class="recommend mt-2">
    <div class="bg-white p-1">
      <Base64 v-show="abase64" />
      <Date v-show="adate" />
      <Var v-show="avar" />
      <!-- <n-space>
        <div>
          <span class="i-ri-baidu-fill">Baidu</span>
        </div>
        <div>
          <span class="i-mdi-microsoft-bing">Bing</span>
        </div>
        <div>
          <span class="i-ri-google-fill">Google</span>
        </div>
      </n-space> -->

      <div class="bg-white" v-if="searchText != ''">
        <div v-for="i in suggestionList" class="m-2">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
