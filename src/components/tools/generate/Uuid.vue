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
    if (!hasLine.value) {
      u = u.replaceAll('-', '')
    }
    r.value.push(u)
  }
})
</script>

<template>
    <input type="range" min="0" max="100" class="range range-primary" v-model="count" /> {{ count }}
    <input type="checkbox" :checked="isUppercase" class="toggle" />
    <div v-if="isUppercase">大写</div>
    <div v-else>小写</div>
    <input type="checkbox" :checked="hasLine" class="toggle" />
    <div v-if="hasLine">短横线</div>
    <div v-else>没短横线</div>


    <div class="overflow-auto h-50 m-1">
      <div v-for="i in r">
        {{ i }}
      </div>
    </div>
</template>
