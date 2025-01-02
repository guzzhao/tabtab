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
      <div class="badge badge-primary" @click="copyText(t1)">
        {{ t1 }}
      </div>
      <div class="badge badge-primary" @click="copyText(t2)">
        {{ t2 }}
      </div>
      <div class="badge badge-primary" @click="copyText(t3)">
        {{ t3 }}
      </div>
      <div class="badge badge-primary" @click="copyText(t4)">
        {{ t4 }}
      </div>
      <div class="badge badge-primary" @click="copyText(t5)">
        {{ t5 }}
      </div>
  </div>
</template>

<style scoped>

</style>
