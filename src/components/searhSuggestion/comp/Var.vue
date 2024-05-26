<script setup>
import { useClipboard } from '@vueuse/core'
import Base from '../Base.vue'
import { isVar } from '~/utils/util'
import { variateArrayTo_AA_BB, variateArrayTo_AbBb, variateArrayTo_aa0bb, variateArrayTo_aa_bb, variateArrayTo_abBb } from '~/utils/strUtil'
import { search_suggestion } from '~/logic'

const props = defineProps(['text'])

const msg = useMessage()

const varText = computed(() => {
  if (isVar(props.text)) {
    search_suggestion.value.Var = true
    return props.text
  }
  else {
    search_suggestion.value.Var = false
    return ''
  }
})

const t1 = computed(() => variateArrayTo_aa_bb(varText.value))
const t2 = computed(() => variateArrayTo_AA_BB(varText.value))
const t3 = computed(() => variateArrayTo_AbBb(varText.value))
const t4 = computed(() => variateArrayTo_abBb(varText.value))
const t5 = computed(() => variateArrayTo_aa0bb(varText.value))

const { text, copy, copied, isSupported } = useClipboard()

function copyText(t) {
  copy(t)

  nextTick()
  if (copied)
    msg.success('复制成功')
}
</script>

<template>
  <Base>
    <n-space>
      <n-tag @click="copyText(t1)">
        {{ t1 }}
      </n-tag>
      <n-tag type="success" @click="copyText(t2)">
        {{ t2 }}
      </n-tag>
      <n-tag type="warning" @click="copyText(t3)">
        {{ t3 }}
      </n-tag>
      <n-tag type="error" @click="copyText(t4)">
        {{ t4 }}
      </n-tag>
      <n-tag type="info" @click="copyText(t5)">
        {{ t5 }}
      </n-tag>
    </n-space>
  </Base>
</template>

<style scoped></style>
