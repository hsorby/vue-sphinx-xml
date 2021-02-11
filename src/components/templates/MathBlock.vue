<template>
    <!-- TODO Not happy with how this works.  If they're rendered as separate equations then relative formatting will fail ... -->
    <div>
      <div v-for="formula in formulas" :key="'math_'+formula.index">
        <div class="equation" v-katex:display="formula.formula"></div>
      </div>
    </div>
  <!-- <div class="equation" v-katex="formulas"></div> -->
</template>

<script>
export default {
  name: 'MathBlock',
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    // formulas() {
    //   let eqn = this.element.innerHTML.replaceAll('&amp;','')
    //   let head = '\\begin{align}\n'
    //   let foot = '\n\\end{align}\n'
    //   return head + eqn + foot
    // }
    formulas() {
      let formulas = []
      let i = 0
      this.element.innerHTML.split(/\r?\n/).forEach((formula) => {
        if (formula) {
          formulas.push({
            // TODO: Removing the & from the string, as this causes errors.  Not
            // sure if it needs the "amsmath" plugin to be installed somewhere in order
            // to work?
            formula: formula.replaceAll('&amp;', ''),
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
