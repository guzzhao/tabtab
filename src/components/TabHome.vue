<script setup>
import Time from './Time.vue'
import Expand from './Expand.vue'

const img = ref('url(https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png)')
</script>

<template>
  <div class="base">
    <div class="flex flex-col justify-center items-center ">
      <div class="head h-20" />
      <Time />
      <Search />
      <Expand />
      <Bookmark/>
      <Generate />
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
