<script setup>


const color = ref('')



</script>

<template>
  <n-card>
    <n-color-picker  v-model:value="color"/> {{ color }}
  </n-card>
</template>
