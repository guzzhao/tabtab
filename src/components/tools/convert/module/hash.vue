<script setup>
import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'
import sha256 from 'crypto-js/sha256'
import sha224 from 'crypto-js/sha224'
import sha512 from 'crypto-js/sha512'

const searchText = inject('searchText')

const text = computed(() => {
  return searchText.value
})
</script>

<template>
  <div>
    md5:{{ md5(text) }}
    sha1:{{ sha1(text) }}
    sha256:{{ sha256(text) }}
    <!-- sha224:{{ sha224(text) }} -->
    sha512:{{ sha512(text) }}
  </div>
</template>

<style scoped></style>
