<script setup>
import { dateZhCN, zhCN } from 'naive-ui'
import TabHome from '~/components/TabHome.vue'
</script>

<template>
  <div>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <n-message-provider>
        <TabHome />
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<style scoped>

</style>
