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
    <input type="range" min="0" max="100" class="range range-primary" v-model="strLength" /> {{ strLength }}
    <input type="range" min="0" max="100" class="range range-primary" v-model="count" /> {{ count }}

    <div class="overflow-auto h-50">
      <div v-for="i in r">
        {{ i }}
      </div>
    </div>
</template>
