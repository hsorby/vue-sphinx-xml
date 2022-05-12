<template>
  {{ properties.text }}
</template>

<script setup>
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
    required: true,
  },
})
</script>
