<template>
  <div class="equation" v-katex="formula"></div>
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
