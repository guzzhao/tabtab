<script setup>

const img = ref('url(https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png)')

</script>

<template>
  <div class="base">
    <div class="flex flex-col justify-center items-center ">
      <div class="head h-20" />
      <DateTime />
      <Search />
      <Expand />
      <Bookmark/>
    </div>
  </div>
</template>

<style scoped>
.base {
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: v-bind("img");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
