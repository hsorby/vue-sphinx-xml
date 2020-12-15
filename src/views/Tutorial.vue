<template>
  <div class="tutorial">
    <sphinx-page
      baseURL="/base/v0.2.0"
      indexFileName="tutorials_index"
    ></sphinx-page>
  </div>
</template>

<script>
import SphinxPage from '../components/SphinxPage.vue'

export default {
  name: 'Tutorial',
  components: {
    SphinxPage,
  },
}
</script>
