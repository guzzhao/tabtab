<script setup>

const img = ref('url(https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png)')

</script>
<template>
<div class="background"></div>


</template>
<style scoped>
.background{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: black;
  background-image: v-bind("img");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

