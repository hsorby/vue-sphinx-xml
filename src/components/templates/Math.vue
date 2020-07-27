<template>
  <vue-mathjax :formula="formula"> </vue-mathjax>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'

export default {
  name: 'MathBlock',
  components: {
    'vue-mathjax': VueMathjax,
  },
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    formula() {
      let formula = this.element.textContent
      return '$' + formula + '$'
    },
  },
}
</script>

<style scoped></style>
