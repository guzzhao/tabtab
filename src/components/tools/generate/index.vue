<script setup>

</script>

<template>
  <n-card>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary">
        随机字符
      </n-button>
      <n-button type="primary">
        UUID生成
      </n-button>
      <n-button type="info">
        时间日期
      </n-button>
      <n-button type="success">
        变量名
      </n-button>
      <n-button type="warning">
        颜色
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>
  </n-card>
</template>

<style scoped>
.expand{
  position: fixed;
  right: 10px;
  top:10px
}
</style>
