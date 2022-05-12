<template>
  <div>
    <h3>Missing: '{{ componentName }}' from Sphinx XML output</h3>
    <span>It seems the component was not found.</span>
  </div>
</template>

<script setup>
const props = defineProps({
  node: {
    type: undefined,
  },
  componentName: {
    type: String,
  },
})
</script>
