<template>
  <span class="equation" v-katex="formula"></span>
</template>

<script>
export default {
  name: 'Math',
  props: {
    element: {
      type: Element,
    },
  },

  computed: {
    formula() {
      return this.element.textContent
    },
  },
}
</script>
