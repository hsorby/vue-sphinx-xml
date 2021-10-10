<template>
  <katex-element :expression="formula"></katex-element>
</template>

<script>
export default {
  name: 'Math',
  props: {
    element: {
      type: undefined,
    },
  },

  computed: {
    formula() {
      return this.element.textContent
    },
  },
}
</script>
