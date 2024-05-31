<script setup>
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

const searchText = inject('searchText')
const type = ref(true)

const text1 = ref('')

watch([searchText, type], ([newV1, newV2]) => {
  if (newV2) { text1.value = Base64.stringify(Utf8.parse(newV1)) }

  else {
    try {
      text1.value = Utf8.stringify(Base64.parse(newV1))
    }
    catch (e) {
      text1.value = '错误'
    }
  }
})

// const text = computed(() => {
//   // return atob(searchText)
//   return btoa(searchText)
// })
</script>

<template>
  <div>
    <n-switch v-model:value="type">
      <template #checked>
        编码
      </template>
      <template #unchecked>
        解码
      </template>
    </n-switch>

    {{ text1 }}
  </div>
</template>

<style scoped>

</style>
