<template>
  <div>
    <div v-for="(formula, index) in formulas" :key="'math_' + index">
      <katex-element :expression="formula"></katex-element>
    </div>
  </div>
</template>

<script>
// Unsupported delimiters/formatting.
const removeList = ['\\begin{equation}', '\\end{equation}']

const renameMap = new Map([
  ['\\begin{align}', '\\begin{aligned}'],
  ['\\begin{eqnarray}', '\\begin{aligned}'],
  ['\\end{align}', '\\end{aligned}'],
  ['\\end{eqnarray}', '\\end{aligned}'],
])

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
      const multiEquations = this.element.innerHTML.split(/\r?\n\r?\n/)
      for (const equation of multiEquations) {
        if (equation) {
          let stripped = equation.replaceAll('&amp;', '&')
          for (const item of removeList) {
            stripped = stripped.replaceAll(item, '')
          }
          for (let [key, value] of renameMap) {
            stripped = stripped.replaceAll(key, value)
          }
          if (
            this.requiresSplitEnvironment(stripped) &&
            !this.hasEnvironment(stripped)
          ) {
            // Create an environment that looks like a split environment
            stripped = `\\begin{array}{cc}${stripped}\\end{array}`
          }
          formulas.push(stripped)
        }
      }
      return formulas
    },
  },
  methods: {
    requiresSplitEnvironment(formula) {
      const ampersandIndex = formula.search('&')
      const newLineIndex = formula.search('\\\\')
      if (ampersandIndex !== -1 && newLineIndex !== -1) {
        return true
      }
      return false
    },
    hasEnvironment(formula) {
      // For some reason search doesn't return 0 if looking for \ at the start of a string.
      // So we don't look for it.
      const beginEnvironmentIndex = formula.search('begin{aligned}')
      const endEnvironmentIndex = formula.search('end{aligned}')
      if (beginEnvironmentIndex !== -1 && endEnvironmentIndex !== -1) {
        return true
      }
      return false
    },
  },
}
</script>
