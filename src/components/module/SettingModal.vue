<script setup>
import { useAppStore } from '~/stores/app';

const app = useAppStore()


const backgroundUrl = computed({
  get: () => {
    return app.backgroundUrl
  },
  set: (v) => {
    app.setBackgroundUrl(v)
  }
})

const searchEngine = computed({
  get: () => {
    return app.searchEngine
  },
  set: (v) => {
    app.changeEngine(v)
  }
})

const theme = computed({
  get: () => {
    return app.theme
  },
  set: (v) => {
    app.setTheme(v)
  }
})


</script>

<template>

  <div class="card bg-base-100  shadow-sm">
    <div class="card-body">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">图片地址：</legend>
        <input type="text" class="input" placeholder="Type here" v-model="backgroundUrl" />
        <!-- <p class="fieldset-label">Optional</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">搜索引擎：</legend>
        <div class="flex  gap-2">
          <input type="radio" name="radio-1" class="radio" value="baidu" v-model="searchEngine" /><label> 百度</label>
          <input type="radio" name="radio-1" class="radio" value="google" v-model="searchEngine" /><label> 谷歌</label>
          <input type="radio" name="radio-1" class="radio" value="bing" v-model="searchEngine" /><label> bing</label>
        </div>

      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">主题:</legend>
        <div class="flex  gap-2">
          <input type="radio" name="radio-2" class="radio" value="light" v-model="theme" /><label> light</label>
          <input type="radio" name="radio-2" class="radio" value="dark" v-model="theme" /><label> dark</label>
        </div>

      </fieldset>
    </div>
  </div>


</template>
