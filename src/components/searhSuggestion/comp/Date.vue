<script setup>
import { useClipboard, useDateFormat, useNow } from '@vueuse/core'
import Base from '../Base.vue'
import { isDate, isTimestamp } from '~/utils/util'

const searchText = inject('searchText')

const updateSearchSuggsetion = inject('updateSearchSuggsetion')

const msg = useMessage()

const now = useNow()

const timestamp = computed(() => {
  if (isDate(searchText)) {
    updateSearchSuggsetion('Date', true)
    return new Date(searchText).getTime()
  }
  else if (isTimestamp(searchText)) {
    updateSearchSuggsetion('Date', true)
    return Number(searchText)
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
    </div>
  </Base>
</template>

<style scoped></style>
