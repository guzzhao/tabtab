<script setup>

import { useMagicKeys, whenever } from '@vueuse/core'
import { usePageStore } from '~/stores/page';

const page = usePageStore()

const toolsViewRef = ref(null)

const { tab } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'Tab')
      e.preventDefault()
  },
})

whenever(tab, () =>{
  toolsViewRef.value.show()
})



</script>

<template>
  <div class="base">
    <div class="flex flex-col justify-center items-center p-20">
      <BackGround />
      <DateTime />
      <Search />
      <Expand />
      <Bookmark/>
      <ToolsView ref="toolsViewRef"/>
    </div>
  </div>
</template>

<style scoped>

</style>
