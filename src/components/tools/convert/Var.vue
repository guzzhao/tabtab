<script setup>
import { variateArrayTo_AA_BB, variateArrayTo_AbBb, variateArrayTo_aa0bb, variateArrayTo_aa_bb, variateArrayTo_abBb } from '~/utils/strUtil'
import { usePageStore } from '~/stores/page';

const page = usePageStore()

const t1 = computed(() => variateArrayTo_aa_bb(page.baseSearchText))
const t2 = computed(() => variateArrayTo_AA_BB(page.baseSearchText))
const t3 = computed(() => variateArrayTo_AbBb(page.baseSearchText))
const t4 = computed(() => variateArrayTo_abBb(page.baseSearchText))
const t5 = computed(() => variateArrayTo_aa0bb(page.baseSearchText))
</script>

<template>
  <div class="flex  gap-2">
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
