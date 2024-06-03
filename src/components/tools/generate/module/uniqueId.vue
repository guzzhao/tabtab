<script setup>
import { customAlphabet } from 'nanoid'

const c = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nanoid = customAlphabet(c, 10)
const r = ref([])
const strLength = ref(10)
const count = ref(1)

watchEffect(() => {
  r.value = []
  for (let index = 0; index < count.value; index++)
    r.value.push(nanoid(strLength.value))
})
</script>

<template>
  <n-card>
    <n-slider v-model:value="strLength" :step="1" />{{ strLength }}
    <n-slider v-model:value="count" :step="1" />{{ count }}
    <div v-for="i in r">
      {{ i }}
    </div>
  </n-card>
</template>
