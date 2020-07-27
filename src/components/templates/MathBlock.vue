<template>
  <div class="mathjax">
    <vue-mathjax
      v-for="(formula, index) in formulas"
      :formula="formula"
      :key="'math_formula_' + index"
    >
    </vue-mathjax>
  </div>
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
    formulas() {
      let formulas = []
      this.element.innerHTML.split(/\r?\n/).forEach(formula => {
        if (formula) {
          formulas.push('$$' + formula + '$$')
        }
      })
      return formulas
    },
  },
}
</script>

<style scoped></style>
