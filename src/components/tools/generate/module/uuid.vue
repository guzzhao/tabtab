<script setup>
import { v4 as uuidv4 } from 'uuid'

const r = ref([])
const count = ref(1)
const isUppercase = ref(false)
const hasLine = ref(true)

watchEffect(() => {
  r.value = []
  for (let index = 0; index < count.value; index++) {

    let u = uuidv4()
    if (isUppercase.value) {
      u = u.toLocaleUpperCase()
    }
    if(!hasLine.value){
      u = u.replaceAll('-','')
    }
    r.value.push(u)
  }
})
</script>

<template>
  <n-card>
    <n-slider v-model:value="count" :step="1" />{{ count }}
    <n-switch v-model:value="isUppercase">
      <template #checked>
        大写
      </template>
      <template #unchecked>
        小写
      </template>
    </n-switch>
    <n-switch v-model:value="hasLine">
      <template #checked>
        短横线
      </template>
      <template #unchecked>
        没短横线
      </template>
    </n-switch>
    <div v-for="i in r">
      {{ i }}
    </div>
  </n-card>
</template>
