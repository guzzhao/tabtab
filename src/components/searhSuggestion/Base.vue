<script setup>

</script>

<template>
  <div class="flex  items-center  m-1  base">
    <n-space><slot /></n-space>
  </div>
</template>

<style scoped>
.base{
  border: 1px solid rgba(0, 0, 0, 0.062);
  padding: 5px
}
</style>
