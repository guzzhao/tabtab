<script setup>
import { useClipboard, useDateFormat, useNow } from '@vueuse/core'
import Base from '../Base.vue'
import { isDate, isTimestamp } from '~/utils/util'

const props = defineProps(['text'])
const { searchSuggestion, updateSearchSuggsetion } = inject('searchSuggestion')

const msg = useMessage()

const now = useNow()

const timestamp = computed(() => {
  if (isDate(props.text)) {
    updateSearchSuggsetion('Date', true)
    return new Date(props.text).getTime()
  }
  else if (isTimestamp(props.text)) {
    updateSearchSuggsetion('Date', true)
    return Number(props.text)
  }
  else {
    updateSearchSuggsetion('Date', false)
    return ''
  }
})

const t1 = computed(() => {
  if (timestamp.value == null)
    return null
  // return new Date(1714811429420).toISOString()
  return useDateFormat(timestamp.value, 'YYYY-MM-DD HH:mm:ss')
})
const t2 = computed(() => {
  if (timestamp.value == null)
    return null
  // return new Date(1714811429420).toISOString()
  return useDateFormat(timestamp.value, 'YYYY年M月D日 H时m分s秒')
})

const { text, copy, copied, isSupported } = useClipboard()

function copyText(text) {
  console.log('copy')
  copy(text.value)

  nextTick()
  if (copied)
    msg.success('复制成功')
}
</script>

<template>
  <Base>
    <n-tag type="success">
      时间
    </n-tag>
    <div>
      <n-tag @click="copyText(timestamp)">
        {{ timestamp }}
      </n-tag>
      <n-tag type="success" @click="copyText(t1)">
        {{ t1 }}
      </n-tag>
      <n-tag type="warning" @click="copyText(t2)">
        {{ t2 }}
      </n-tag>
    <!-- <n-tag type="error">
      手写的从前
    </n-tag>
    <n-tag type="info">
      哪里都是你
    </n-tag>
      -->
    </div>
  </Base>
</template>

<style scoped></style>
