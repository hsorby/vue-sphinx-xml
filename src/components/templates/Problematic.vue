<template>
  <router-link :to="routeDescription">
    <span class="problematic" :id="id">{{
      node.textContent
    }}</span></router-link
  >
</template>

<script setup>
import { toRefs, ref } from 'vue'

import { useMethods } from '../../composables/methods'

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
  }
})

const { node } = toRefs(props)
const routeDescription = ref({hash: '#' + node.value.getAttribute('refid')})

const { extractId } = useMethods()
const { id } = extractId(node.value)

</script>
