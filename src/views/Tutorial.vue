<template>
  <div class="tutorial">
    <sphinx-page indexFileName="tutorials_index"></sphinx-page>
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
