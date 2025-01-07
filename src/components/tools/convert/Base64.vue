<script setup>
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'
import { usePageStore } from '~/stores/page';

const page = usePageStore()

const type = ref(true)

const text1 = ref('')

watchEffect(() => {

  if (type.value) {

    text1.value = Base64.stringify(Utf8.parse(page.baseSearchText))
  } else {
    try {
      text1.value = Utf8.stringify(Base64.parse(page.baseSearchText))
    }
    catch (e) {
      text1.value = '错误'
    }
  }
})


</script>

<template>
  <div>
    <input type="checkbox" checked="checked" class="toggle toggle-primary" v-model="type" />
    <div>
      <span v-if="type">编码</span>
      <span v-else>解码</span>
    </div>
    <div class="">
      {{ text1 }}
    </div>

  </div>
</template>

<style scoped></style>
