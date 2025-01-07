<script setup>
import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'
import sha256 from 'crypto-js/sha256'
import sha224 from 'crypto-js/sha224'
import sha512 from 'crypto-js/sha512'
import { usePageStore } from '~/stores/page';

const page = usePageStore()


</script>

<template>
  <div>
    md5:{{ md5(page.baseSearchText) }}
    sha1:{{ sha1(page.baseSearchText) }}
    sha256:{{ sha256(page.baseSearchText) }}
    <!-- sha224:{{ sha224(text) }} -->
    sha512:{{ sha512(page.baseSearchText) }}
  </div>
</template>

<style scoped></style>
