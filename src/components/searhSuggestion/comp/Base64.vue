<script setup>
import { useClipboard } from '@vueuse/core'
import Base from '../Base.vue'
import { isBase64 } from '~/utils/util'

const props = defineProps(['text'])
const msg = useMessage()

const { searchSuggestion, updateSearchSuggsetion } = inject('searchSuggestion')

const unBase64 = computed(() => {
  if (isBase64(props.text)) {
    updateSearchSuggsetion('Base64', true)
    return atob(props.text)
  }
  else {
    updateSearchSuggsetion('Base64', false)
    return '不是base64'
  }
})

const { text, copy, copied, isSupported } = useClipboard({ unBase64 })

function copyText() {
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
