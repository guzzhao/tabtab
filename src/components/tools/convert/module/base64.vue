<script setup>
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

const searchText = inject('searchText')
const type = ref(true)

const text1 = ref('')

watchEffect(() => {

  if (type.value) {

    text1.value = Base64.stringify(Utf8.parse(searchText))
  } else {
    try {
      text1.value = Utf8.stringify(Base64.parse(searchText))
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
    <input type="checkbox" checked="checked" class="toggle toggle-primary" v-model="type" />
    <div>
      <span v-if="type">编码</span>
      <span v-else>解码</span>
    </div>

    
    {{ text1 }}
  </div>
</template>

<style scoped></style>
