<template>
  <div class="katex-block">
    <div v-for="(formula, index) in formulas" :key="'math_' + index">
      <katex-element :expression="formula"></katex-element>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
// Unsupported delimiters/formatting.
const removeList = ['\\begin{equation}', '\\end{equation}']

const renameMap = new Map([
  ['\\begin{align}', '\\begin{aligned}'],
  ['\\begin{eqnarray}', '\\begin{aligned}'],
  ['\\end{align}', '\\end{aligned}'],
  ['\\end{eqnarray}', '\\end{aligned}'],
])

const props = defineProps({
  node: {
    type: undefined,
    default: null,
  },
  componentName: {
    type: String,
  },
  properties: {
    type: Object,
  },
})

const { node } = toRefs(props)

const formulas = computed(() => {
  let formulas = []
  const multiEquations = node.value.innerHTML.split(/\r?\n\r?\n/)
  for (const equation of multiEquations) {
    if (equation) {
      let stripped = equation.replaceAll('&amp;', '&')
      for (const item of removeList) {
        stripped = stripped.replaceAll(item, '')
      }
      for (let [key, value] of renameMap) {
        stripped = stripped.replaceAll(key, value)
      }
      if (requiresSplitEnvironment(stripped) && !hasEnvironment(stripped)) {
        // Create an environment that looks like a split environment
        stripped = `\\begin{array}{cc}${stripped}\\end{array}`
      }
      formulas.push(stripped)
    }
  }
  return formulas
})

function requiresSplitEnvironment(formula) {
  const ampersandIndex = formula.search('&')
  const newLineIndex = formula.search('\\\\')
  if (ampersandIndex !== -1 && newLineIndex !== -1) {
    return true
  }
  return false
}

function hasEnvironment(formula) {
  // For some reason search doesn't return 0 if looking for \ at the start of a string.
  // So we don't look for it.
  const beginEnvironmentIndex = formula.search('begin{aligned}')
  const endEnvironmentIndex = formula.search('end{aligned}')
  if (beginEnvironmentIndex !== -1 && endEnvironmentIndex !== -1) {
    return true
  }
  return false
}
</script>
