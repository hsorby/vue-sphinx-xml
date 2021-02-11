<template>
  <!-- TODO Not happy with how this works.  If they're rendered as separate equations then relative 
  formatting will fail ... but that's a problem for another day, when the alignment markup is actually recognised! -->
  <div>
    <div v-for="formula in formulas" :key="'math_' + formula.index">
      <div class="equation" v-katex="formula.formula"></div>
    </div>
  </div>
</template>

<script>
// Unsupported delimiters/formatting.
const skipList = [
  '&amp;',
  '\\begin{align}',
  '\\begin{eqnarray}',
  '\\begin{equation}',
  '\\end{align}',
  '\\end{eqnarray}',
  '\\end{equation}',
]

export default {
  name: 'MathBlock',
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    formulas() {
      let formulas = []
      let i = 0
      this.element.innerHTML.split(/\r?\n/).forEach((formula) => {
        let stripped = formula.replaceAll('&amp;', '')
        skipList.forEach(item=> {
          stripped = stripped.replaceAll(item, '')
        })

        if (formula) {
          formulas.push({
            formula: stripped,
            index: i,
          })
          i++
        }
      })
      return formulas
    },
  },
}
</script>
