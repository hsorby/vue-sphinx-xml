<template>
  <colgroup>
    <col
      v-for="(v, index) in columnWidths"
      :key="'col_' + index"
      :style="'width: ' + v + '%'"
    />
  </colgroup>
</template>

<script setup>
import { computed, toRefs } from 'vue'

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

const { properties } = toRefs(props)

const columnWidths = computed(() => {
  let sum = 0
  let widths = []
  for (const value of properties.value.colspecs) {
    sum += Number(value)
    widths.push(Number(value))
  }
  let percentWidths = []
  for (const value of widths) {
    percentWidths.push((value / sum) * 100)
  }

  return percentWidths
})
</script>
