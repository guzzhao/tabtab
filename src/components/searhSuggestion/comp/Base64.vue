<script setup>
import { useClipboard } from '@vueuse/core'
import Base from '../Base.vue'
import { isBase64 } from '~/utils/util'

const searchText = inject('searchText')
const updateSearchSuggsetion = inject('updateSearchSuggsetion')
const msg = useMessage()



const unBase64 = computed(() => {
  if (isBase64(searchText.value)) {
    updateSearchSuggsetion('Base64', true)
    return atob(searchText.value)
  }
  else {
    updateSearchSuggsetion('Base64', false)
    return false
  }
})

const { text, copy, copied, isSupported } = useClipboard({ unBase64 })

function copyText() {
  copy(unBase64.value)
  nextTick()
  if (copied) {
    msg.success('复制成功')
  }

}
</script>

<template>
  <Base @click="copyText">
  <n-tag type="success">
    解析base64
  </n-tag>
  <div>
    <n-gradient-text type="success" class="cursor-pointer">
      {{ unBase64 }}
    </n-gradient-text>
  </div>
  </Base>
</template>

<style scoped></style>
