<template>
  <div :="attrs">
    <component
      v-for="(c, index) in children"
      :key="'section_component_' + index"
      :is="c.component"
      :node="c.node"
      :componentName="c.name"
      :properties="c.properties"
    />
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue'

import { useChildren } from '../../composables/computed'
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
  },
})

const { dataObject } = useMethods()
const { node } = toRefs(props)
const attrs = ref({})

const { children } = useChildren(node)
attrs.value = dataObject(node.value, ['line_block']).attrs
</script>
