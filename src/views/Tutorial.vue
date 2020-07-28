<template>
  <div class="tutorial">
    <sphinx-page
      baseURL="/v0.1.0"
      indexFileName="tutorials_index"
    ></sphinx-page>
  </div>
</template>

<script>
import SphinxPage from '@/components/SphinxPage.vue'

export default {
  name: 'Tutorial',
  components: {
    SphinxPage,
  },
}
</script>
