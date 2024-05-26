<script setup>
import { useClipboard } from '@vueuse/core'
import Base from '../Base.vue'
import { isBase64 } from '~/utils/util'
import { search_suggestion } from '~/logic'

const props = defineProps(['text'])

const msg = useMessage()

const unBase64 = computed(() => {
  if (isBase64(props.text)) {
    search_suggestion.value.Base64 = true
    return atob(props.text)
  }
  else {
    search_suggestion.value.Base64 = false
    return '不是base64'
  }
})

watch(search_suggestion, (new1) => {
  console.log(new1, 'new1')
})

const { text, copy, copied, isSupported } = useClipboard({ unBase64 })

function copyText() {
  console.log('copy')
  copy(unBase64.value)

  nextTick()
  if (copied)
    msg.success('复制成功')
}
</script>

<template>
  <Base @click="copyText">
    <n-tag type="success">
      解析base64
    </n-tag>
    <div>
      {{ unBase64 }}
    </div>
  </Base>
</template>

<style scoped></style>
