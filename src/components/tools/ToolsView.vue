<script setup>

const tab = ref('convert')
const toolsRef = ref(null)

function show(){
  toolsRef.value.showModal()
}


function switchTab(t) {
  tab.value = t
}
defineExpose({
  show
})

</script>

<template>

  <dialog ref="toolsRef" class="modal ">
    <div class="modal-box w-11/12 max-w-5xl">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <a @click="switchTab('convert')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </li>
        <li>
          <a @click="switchTab('generate')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
      </ul>
      <ToolsList :type="tab" />

    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
