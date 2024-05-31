<script setup>
import { variateArrayTo_AA_BB, variateArrayTo_AbBb, variateArrayTo_aa0bb, variateArrayTo_aa_bb, variateArrayTo_abBb } from '~/utils/strUtil'

const searchText = inject('searchText')

const t1 = computed(() => variateArrayTo_aa_bb(searchText.value))
const t2 = computed(() => variateArrayTo_AA_BB(searchText.value))
const t3 = computed(() => variateArrayTo_AbBb(searchText.value))
const t4 = computed(() => variateArrayTo_abBb(searchText.value))
const t5 = computed(() => variateArrayTo_aa0bb(searchText.value))
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped>

</style>
