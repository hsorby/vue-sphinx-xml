<template>
  <div>{{ name }} {{ bar }}</div>
</template>

<script>
export default {
  name: 'Reusable',
  props: {
    name: {
      type: String,
    },
  },

  data() {
    return {
      bar: 'Baa',
    }
  },
}
</script>

<style scoped></style>
