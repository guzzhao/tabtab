<script setup>
import Base64 from './comp/Base64.vue'
import Date from './comp/Date.vue'
import Var from './comp/Var.vue'
import { isBase64, isDate, isTimestamp, isVar } from '~/utils/util'
import { search_suggestion } from '~/logic'

const props = defineProps(['searchText'])

const searchText = computed(() => props.searchText)

watch(searchText, (newT) => {
  console.log(newT)
})
</script>

<template>
  <div class="recommend mt-2">
    <div class="bg-white p-1">
      <Base64 v-show="search_suggestion && search_suggestion.Base64" :text="searchText" />
      <Date v-show="search_suggestion && search_suggestion.Date" :text="searchText" />
      <Var v-show="search_suggestion && search_suggestion.Var" :text="searchText" />
      <n-space>
        <div>
          <span class="i-ri-baidu-fill">Baidu</span>
        </div>
        <div>
          <span class="i-mdi-microsoft-bing">Bing</span>
        </div>
        <div>
          <span class="i-ri-google-fill">Google</span>
        </div>
      </n-space>
    </div>
  </div>
</template>

<style scoped>

</style>
